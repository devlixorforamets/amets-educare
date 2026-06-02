"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, Building2, GraduationCap, FileText, ChevronRight, AlertCircle } from 'lucide-react';
import { performSearch } from '@/lib/search';

// Wrapper to handle useSearchParams safely
export default function SearchResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-900"></div></div>}>
      <SearchResultsContent />
    </Suspense>
  );
}

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<'all' | 'college' | 'course' | 'blog'>('all');

  useEffect(() => {
    const fetchResults = () => {
      setIsLoading(true);
      if (!query.trim()) {
        setResults([]);
        setIsLoading(false);
        return;
      }

      try {
        const data = performSearch(query);
        setResults(data);
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  const filteredResults = activeFilter === 'all' 
    ? results 
    : results.filter(r => r.type === activeFilter);

  // Metadata update based on query
  useEffect(() => {
    document.title = query ? `Search results for "${query}" | Amets Educare` : 'Search | Amets Educare';
  }, [query]);

  return (
    <main className="bg-slate-50 min-h-screen pb-24">
      {/* Search Header */}
      <div className="bg-primary-900 pt-32 pb-16 text-white border-b-4 border-accent-500">
        <div className="container-premium text-center">
          <Search className="w-12 h-12 text-accent-500 mx-auto mb-6 opacity-80" />
          {query ? (
            <>
              <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                Search Results for <span className="text-accent-500">"{query}"</span>
              </h1>
              <p className="text-slate-300">Found {results.length} matches across our platform</p>
            </>
          ) : (
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">Explore Amets Educare</h1>
          )}
        </div>
      </div>

      <div className="container-premium py-12">
        {!query ? (
          <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">What are you looking for?</h2>
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search colleges, medical courses, etc..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-full py-4 pl-12 pr-4 text-slate-800 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                    window.location.href = `/search?q=${encodeURIComponent(e.currentTarget.value.trim())}`;
                  }
                }}
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Popular Searches</p>
              <div className="flex flex-wrap justify-center gap-3">
                {['MBBS Admission', 'Top B.Tech Colleges', 'Engineering in Karnataka', 'MBA Fees', 'Study Abroad'].map(s => (
                  <Link key={s} href={`/search?q=${encodeURIComponent(s)}`} className="bg-primary-50 text-primary-800 hover:bg-primary-900 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors border border-primary-100">
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : isLoading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-accent-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            
            {/* Filter Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm sticky top-24">
                <h3 className="font-bold text-primary-900 mb-4 pb-4 border-b border-slate-100">Filter Results</h3>
                <div className="space-y-2">
                  <button onClick={() => setActiveFilter('all')} className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeFilter === 'all' ? 'bg-primary-50 text-primary-900' : 'text-slate-600 hover:bg-slate-50'}`}>
                    All Categories <span className="float-right bg-white px-2 py-0.5 rounded text-xs">{results.length}</span>
                  </button>
                  <button onClick={() => setActiveFilter('college')} className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeFilter === 'college' ? 'bg-primary-50 text-primary-900' : 'text-slate-600 hover:bg-slate-50'}`}>
                    Colleges <span className="float-right bg-white px-2 py-0.5 rounded text-xs">{results.filter(r=>r.type==='college').length}</span>
                  </button>
                  <button onClick={() => setActiveFilter('course')} className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeFilter === 'course' ? 'bg-primary-50 text-primary-900' : 'text-slate-600 hover:bg-slate-50'}`}>
                    Courses <span className="float-right bg-white px-2 py-0.5 rounded text-xs">{results.filter(r=>r.type==='course').length}</span>
                  </button>
                  <button onClick={() => setActiveFilter('blog')} className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeFilter === 'blog' ? 'bg-primary-50 text-primary-900' : 'text-slate-600 hover:bg-slate-50'}`}>
                    Articles <span className="float-right bg-white px-2 py-0.5 rounded text-xs">{results.filter(r=>r.type==='blog').length}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Results List */}
            <div className="lg:col-span-3 space-y-4">
              {filteredResults.length === 0 ? (
                <div className="bg-white rounded-xl border border-slate-200 p-12 text-center shadow-sm">
                  <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary-900 mb-2">No results matched your filter</h3>
                  <p className="text-slate-500 mb-6">Try broadening your search or selecting a different category.</p>
                  <button onClick={() => setActiveFilter('all')} className="bg-primary-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-800 transition-colors">
                    Clear Filters
                  </button>
                </div>
              ) : (
                filteredResults.map((result, idx) => {
                  const Icon = result.type === 'college' ? Building2 : result.type === 'course' ? GraduationCap : FileText;
                  return (
                    <Link key={idx} href={result.url} className="block bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-accent-500 transition-all group">
                      <div className="flex gap-4">
                        <div className={`p-3 rounded-lg shrink-0 h-fit ${result.type === 'college' ? 'bg-blue-50 text-blue-600' : result.type === 'course' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                            <span>{result.type}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span className="text-slate-500">{result.meta}</span>
                          </div>
                          <h3 className="font-serif text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">{result.title}</h3>
                          <p className="text-sm text-slate-600 leading-relaxed mb-4">{result.excerpt}</p>
                          <span className="text-sm font-bold text-accent-600 flex items-center group-hover:translate-x-1 transition-transform w-fit">
                            Read More <ChevronRight className="w-4 h-4 ml-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
