import { MetadataRoute } from 'next';
import { courses, colleges, states, abroadCountries } from '@/lib/data';
import { blogPosts } from '@/lib/blog-data';

export const dynamic = 'force-static';

const SITE_URL = 'https://ametseducare.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];
  const currentDate = new Date().toISOString();

  // 1. Static Routes
  const staticRoutes = [
    '',
    '/about-us',
    '/contact-us',
    '/courses',
    '/colleges-universities',
    '/study-abroad',
    '/admissions/neet-counselling',
    '/admissions/management-quota-admissions',
    '/admissions/nri-quota-admissions',
    '/blog',
  ];

  staticRoutes.forEach(route => {
    sitemapEntries.push({
      url: `${SITE_URL}${route}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: route === '' ? 1.0 : 0.8,
    });
  });

  // 2. Dynamic Course Routes
  courses.forEach(course => {
    sitemapEntries.push({
      url: `${SITE_URL}/courses/${course.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // 3. Dynamic State & College Routes (Top 100)
  states.forEach(state => {
    sitemapEntries.push({
      url: `${SITE_URL}/colleges-universities/${state.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // Limit to top 100 colleges to avoid overwhelming static generation initially
  colleges.slice(0, 100).forEach(college => {
    const stateSlug = college.state.toLowerCase().replace(/\s+/g, '-');
    const citySlug = college.city.toLowerCase().replace(/\s+/g, '-');
    sitemapEntries.push({
      url: `${SITE_URL}/colleges-universities/${stateSlug}/${citySlug}/${college.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // 4. Study Abroad Countries
  abroadCountries.forEach(country => {
    sitemapEntries.push({
      url: `${SITE_URL}/study-abroad/${country.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // 5. Blog Routes
  blogPosts.forEach(post => {
    sitemapEntries.push({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date).toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return sitemapEntries;
}
