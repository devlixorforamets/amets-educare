"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight, Mail, Search } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

const CATEGORIES = ['All', 'Medical Education', 'Admission Tips', 'College Reviews', 'Career Guidance', 'Study Abroad'];

export default function BlogHubPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayPosts = filteredPosts.slice(0, visibleCount);

  return (
    <main className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Section */}
      <section className="bg-primary-900 pt-32 pb-16 text-white border-b-4 border-accent-500">
        <div className="container-premium text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            Admission Tips, College Reviews <span className="text-accent-500">& Career Guidance</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Insights, strategies, and updates from India's leading educational consultants.
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-primary-800 border border-primary-700 rounded-full py-3.5 pl-12 pr-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-accent-500 transition-all"
            />
          </div>
        </div>
      </section>

      <div className="container-premium mt-12">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => { setActiveCategory(category); setVisibleCount(9); }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm border ${
                activeCategory === category 
                ? 'bg-primary-900 text-white border-primary-900' 
                : 'bg-white text-slate-600 border-slate-200 hover:border-accent-500 hover:text-primary-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-lg">No articles found matching your criteria.</p>
            <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="mt-4 text-accent-600 font-bold hover:underline">Clear Filters</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map((post, idx) => (
              <article key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-accent-500 transition-all group flex flex-col h-full">
                <div className="h-48 relative overflow-hidden bg-slate-200">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary-900 shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="font-serif text-xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-slate-600 mb-6 line-clamp-3 flex-1">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric'})}</span>
                      <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Load More */}
        {visibleCount < filteredPosts.length && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="bg-white text-primary-900 border border-slate-200 font-bold px-8 py-3 rounded-full hover:border-primary-900 hover:shadow-md transition-all inline-flex items-center"
            >
              Load More Articles <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        )}

        {/* Newsletter Banner */}
        <section className="mt-24 bg-primary-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden border border-primary-800 shadow-xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-accent-500" />
            </div>
            <h2 className="font-serif text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
            <p className="text-slate-300 mb-8">Subscribe to our newsletter and get the latest admission alerts, exam notifications, and career guides delivered straight to your inbox.</p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required className="flex-1 bg-primary-800 border border-primary-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:border-accent-500" />
              <button type="submit" className="bg-accent-500 text-primary-900 font-bold px-6 py-3 rounded-xl hover:bg-white transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
          </div>
        </section>

      </div>
    </main>
  );
}
