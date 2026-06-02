# Amets Educare — Deployment & Operations Guide

This document outlines the complete procedure to push the Amets Educare platform from local development to production on Cloudflare Pages, along with post-deployment SEO configurations and maintenance routines.

---

## 1. GitHub Repository Setup

First, you need to push the local source code to a remote GitHub repository.

1. **Initialize Git** (if not already done):
   ```bash
   git init
   ```

2. **Add all project files:**
   ```bash
   git add .
   ```

3. **Commit the code:**
   ```bash
   git commit -m "Initial commit: Amets Educare platform"
   ```

4. **Create a new repository on GitHub:**
   - Go to [GitHub](https://github.com/new).
   - Name the repository (e.g., `amets-educare-web`).
   - Keep it **Private** (recommended) or Public.
   - Do not initialize with a README, .gitignore, or license (you already have them).

5. **Link and Push:**
   Replace `<YOUR_GITHUB_USERNAME>` with your actual username.
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/amets-educare-web.git
   git push -u origin main
   ```

---

## 2. Cloudflare Pages Deployment

Cloudflare Pages is the optimal hosting platform for Next.js static exports (`output: 'export'`), offering blazing-fast CDN delivery and unmetered bandwidth.

1. **Connect GitHub to Cloudflare:**
   - Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
   - Navigate to **Workers & Pages** > **Pages** > **Connect to Git**.
   - Select your GitHub account and authorize access to the `amets-educare-web` repository.
   - Click **Begin setup**.

2. **Configure Build Settings:**
   - **Project Name:** `amets-educare`
   - **Production Branch:** `main`
   - **Framework Preset:** `Next.js (Static HTML Export)`
   - **Build Command:** `npx @cloudflare/next-on-pages` OR `next build` (Since we use pure static export, `next build` is correct).
   - **Build Output Directory:** `dist`

3. **Deploy:**
   - Click **Save and Deploy**. Cloudflare will clone the repo, run `npm install`, execute `next build`, and deploy the contents of the `dist` folder.

---

## 3. Domain Configuration

Once deployed, Cloudflare will give you a generic `.pages.dev` URL. Now, map your custom domain.

1. **Add Custom Domain:**
   - Inside your Pages project in Cloudflare, go to the **Custom Domains** tab.
   - Click **Set up a custom domain**.
   - Enter `ametseducare.com` and click **Continue**.

2. **Update DNS Records:**
   - If your domain is already managed by Cloudflare DNS, it will automatically add the required `CNAME` record.
   - If managed elsewhere (e.g., GoDaddy, Namecheap), log into your registrar and add:
     - **Type:** `CNAME`
     - **Name:** `@` (or `ametseducare.com`)
     - **Target:** `amets-educare.pages.dev`

3. **Redirect www to non-www:**
   - In Cloudflare dashboard, go to **Rules** > **Page Rules**.
   - Create a rule: 
     - **URL:** `www.ametseducare.com/*`
     - **Setting:** Forwarding URL (Status Code: 301 - Permanent Redirect)
     - **Destination URL:** `https://ametseducare.com/$1`

4. **SSL/TLS Configuration:**
   - Go to **SSL/TLS** in Cloudflare.
   - Set encryption mode to **Full (strict)**.
   - Ensure **Always Use HTTPS** is toggled **ON** under *Edge Certificates*.

---

## 4. Post-Deployment SEO Checklist

After the domain is live and propagating, execute these critical SEO tasks:

- [ ] **Google Search Console (GSC):**
  - Add `https://ametseducare.com` as a Domain Property.
  - Verify ownership using Cloudflare DNS verification.
  - Navigate to **Sitemaps** and submit `https://ametseducare.com/sitemap.xml`.
- [ ] **Bing Webmaster Tools:**
  - Import your verified site directly from Google Search Console.
  - Submit the sitemap manually if it doesn't auto-sync.
- [ ] **Schema Validation:**
  - Run the homepage, a course page, and a college page through the [Google Rich Results Test](https://search.google.com/test/rich-results) to verify the JSON-LD schemas are firing correctly.
- [ ] **Core Web Vitals:**
  - Test mobile and desktop performance on [PageSpeed Insights](https://pagespeed.web.dev/).
- [ ] **Google Analytics 4 (GA4):**
  - Ensure your `NEXT_PUBLIC_GA_MEASUREMENT_ID` is correctly firing. Check the Realtime Dashboard while navigating the live site.
- [ ] **Google Business Profile:**
  - Claim or update the Amets Educare Google Business Profile.
  - Add the new website link, updated operating hours, and photos.

---

## 5. Maintenance Commands & Workflows

Since this is a static site, any changes to data require a new build. However, Cloudflare Pages automates this.

### How to Update Content
1. Open the project in your local IDE (VS Code).
2. To add a new college, course, or state, open `src/lib/data.ts`.
3. To add a new blog post, open `src/lib/blog-data.ts`.
4. Add your new object to the respective array.

### How to Publish the Updates
Once you save the file locally, run the standard Git workflow:
```bash
git add .
git commit -m "Added new college data for KMC Manipal"
git push
```
*Cloudflare Pages will automatically detect the push to `main`, trigger a new `next build`, and deploy the updated static site within 2 minutes. You do not need to do anything else.*

### How to Regenerate Sitemap
The `sitemap.ts` file is dynamic at build-time. Whenever you push new data and Cloudflare runs a build, the sitemap is **automatically regenerated** and updated to include the new URLs. Google will fetch it on its next crawl.
