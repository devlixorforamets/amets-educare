import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ChevronRight, Share2, MessageSquare } from 'lucide-react';
import { FaFacebook, FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import { blogPosts } from '@/lib/blog-data';
import { generateBreadcrumbSchema } from '@/lib/schemas';
import Script from 'next/script';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  if (!post) return { title: 'Not Found' };
  
  return {
    title: `${post.title} | Amets Educare Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
  };
}

// Very basic markdown to HTML converter for exactly the required elements
function parseMarkdown(md: string) {
  let html = md;
  // H2
  html = html.replace(/^## (.*$)/gim, '<h2 id="$1" class="font-serif text-2xl font-bold text-primary-900 mt-10 mb-4 pb-2 border-b border-slate-100 scroll-mt-24">$1</h2>');
  // H3
  html = html.replace(/^### (.*$)/gim, '<h3 id="$1" class="font-serif text-xl font-bold text-primary-900 mt-8 mb-3 scroll-mt-24">$1</h3>');
  // Blockquotes
  html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-accent-500 pl-4 py-1 my-6 text-slate-700 italic bg-slate-50 rounded-r-lg">$1</blockquote>');
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Unordered Lists
  html = html.replace(/^\* (.*$)/gim, '<li class="ml-4 mb-2 list-disc marker:text-accent-500">$1</li>');
  html = html.replace(/(<li.*<\/li>)\n/g, '<ul>$1</ul>\n'); // Simplistic wrapper
  
  // Paragraphs (wrap lines that aren't tags)
  html = html.split('\n').map(line => {
    if (line.trim() === '') return '';
    if (line.match(/^<h|<blockquote|<li|<ul/)) return line;
    return `<p class="mb-4 text-slate-600 leading-relaxed">${line}</p>`;
  }).join('\n');

  // Fix duplicate ul tags (hacky but works for the mock data)
  html = html.replace(/<\/ul>\n<ul>/g, '');

  return html;
}

// Extract headings for TOC
function extractHeadings(md: string) {
  const headings: { level: number, text: string, id: string }[] = [];
  const lines = md.split('\n');
  lines.forEach(line => {
    const h2Match = line.match(/^## (.*$)/);
    if (h2Match) headings.push({ level: 2, text: h2Match[1], id: h2Match[1] });
    const h3Match = line.match(/^### (.*$)/);
    if (h3Match) headings.push({ level: 3, text: h3Match[1], id: h3Match[1] });
  });
  return headings;
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug) || blogPosts[0];
  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  
  if (relatedPosts.length < 3) {
    relatedPosts.push(...blogPosts.filter(p => p.slug !== post.slug).slice(0, 3 - relatedPosts.length));
  }

  const toc = extractHeadings(post.content);
  const htmlContent = parseMarkdown(post.content);

  const breadcrumbs = [
    { name: 'Home', url: 'https://ametseducare.com' },
    { name: 'Blog', url: 'https://ametseducare.com/blog' },
    { name: post.title, url: `https://ametseducare.com/blog/${post.slug}` }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [post.image],
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "author": [{ "@type": "Person", "name": post.author, "url": "https://ametseducare.com/about-us" }],
    "publisher": { "@type": "Organization", "name": "Amets Educare", "logo": { "@type": "ImageObject", "url": "https://ametseducare.com/logo.png" } },
    "description": post.excerpt
  };

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />
      <Script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero Header */}
      <div className="bg-primary-950 pt-32 pb-16 text-white border-b-4 border-accent-500">
        <div className="container-premium max-w-4xl mx-auto">
          <nav className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-8">
            <Link href="/" className="hover:text-accent-500 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-accent-500 transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-accent-500">{post.category}</span>
          </nav>
          
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight text-balance">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-slate-700 mr-3 flex items-center justify-center overflow-hidden">
                <User className="w-4 h-4 text-slate-400" />
              </div>
              <span className="font-medium text-white">{post.author}</span>
            </div>
            <div className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-slate-400" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})}</div>
            <div className="flex items-center"><Clock className="w-4 h-4 mr-2 text-slate-400" /> {post.readTime}</div>
          </div>
        </div>
      </div>

      <div className="container-premium max-w-6xl mx-auto mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article */}
          <article className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="h-[300px] md:h-[400px] w-full bg-slate-200">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-12">
              <div 
                className="prose prose-slate max-w-none prose-a:text-accent-600 prose-a:underline prose-a:decoration-accent-500 prose-a:underline-offset-4 hover:prose-a:text-primary-900"
                dangerouslySetInnerHTML={{ __html: htmlContent }} 
              />
              
              <div className="mt-12 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">#{tag}</span>
                ))}
              </div>

              {/* Share Box */}
              <div className="mt-10 py-6 border-t border-b border-slate-100 flex items-center justify-between">
                <span className="font-bold text-primary-900">Share this article:</span>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><FaFacebook className="w-4 h-4" /></button>
                  <button className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"><FaXTwitter className="w-4 h-4" /></button>
                  <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors"><FaLinkedin className="w-4 h-4" /></button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-10 bg-slate-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-slate-100">
                <div className="w-20 h-20 rounded-full bg-primary-900 shrink-0 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-primary-900 text-lg mb-2">Written by {post.author}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">Reena Thakur is the Founder and Lead Consultant at Amets Educare. With over a decade of experience, she has guided thousands of students to successful medical and engineering careers.</p>
                  <Link href="/about-us" className="text-accent-600 font-bold text-sm hover:underline">View Full Profile</Link>
                </div>
              </div>

              {/* Comments Placeholder */}
              <div className="mt-12">
                <h3 className="font-serif text-2xl font-bold text-primary-900 mb-6 flex items-center"><MessageSquare className="w-5 h-5 mr-2 text-slate-400" /> Comments (0)</h3>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center text-slate-500 text-sm">
                  Comments are currently disabled for this post. If you have questions, please use our contact form.
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Table of Contents (Sticky) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-24">
              <h3 className="font-serif text-lg font-bold text-primary-900 mb-4 border-b border-slate-100 pb-2">Table of Contents</h3>
              <ul className="space-y-3 text-sm">
                {toc.map((heading, i) => (
                  <li key={i} className={`${heading.level === 3 ? 'ml-4' : ''}`}>
                    <a href={`#${heading.id}`} className="text-slate-600 hover:text-accent-600 transition-colors block">
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-primary-900 mb-6 border-b border-slate-100 pb-2">Related Articles</h3>
              <div className="space-y-6">
                {relatedPosts.map((related, i) => (
                  <Link key={i} href={`/blog/${related.slug}`} className="flex gap-4 group">
                    <div className="w-20 h-20 bg-slate-200 rounded-lg shrink-0 overflow-hidden">
                      <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary-900 group-hover:text-accent-600 transition-colors line-clamp-2 mb-1">{related.title}</h4>
                      <p className="text-xs text-slate-400">{new Date(related.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric'})}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Widget */}
            <div className="bg-primary-900 rounded-2xl p-6 text-white text-center shadow-lg">
              <h3 className="font-serif text-xl font-bold mb-3 text-accent-500">Need Expert Guidance?</h3>
              <p className="text-sm text-slate-300 mb-6">Book a free consultation with Reena Thakur and clear all your admission doubts.</p>
              <Link href="/contact-us" className="block w-full bg-white text-primary-900 font-bold py-3 rounded-lg hover:bg-accent-500 transition-colors text-sm">
                Book Free Consultation
              </Link>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
