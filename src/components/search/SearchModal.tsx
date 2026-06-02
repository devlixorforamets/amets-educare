"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Building2, GraduationCap, FileText, ChevronRight, Clock } from 'lucide-react';

interface SearchResult {
  type: 'college' | 'course' | 'blog';
  title: string;
  url: string;
  excerpt: string;
  meta: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Load recent searches
  useEffect(() => {
    const saved = localStorage.getItem('amets_recent_searches');
    if (saved) {
      try { setRecentSearches(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  // Handle focus and body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
      setResults([]);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  // Fetch results
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      setIsSearching(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data.results.slice(0, 8)); // Limit to 8 in modal
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setIsSearching(false);
      }
    };

    const debounce = setTimeout(fetchResults, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          saveRecentSearch(query);
          router.push(results[selectedIndex].url);
          onClose();
        } else if (query.trim()) {
          saveRecentSearch(query);
          router.push(`/search?q=${encodeURIComponent(query)}`);
          onClose();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, results, query, router, onClose]);

  const saveRecentSearch = (q: string) => {
    if (!q.trim()) return;
    const updated = [q, ...recentSearches.filter(s => s !== q)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('amets_recent_searches', JSON.stringify(updated));
  };

  const navigateTo = (url: string, q: string) => {
    saveRecentSearch(q || query);
    router.push(url);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-0 bg-primary-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        ref={modalRef}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] border border-slate-200"
      >
        {/* Search Input Area */}
        <div className="relative flex items-center px-4 border-b border-slate-100">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(-1);
            }}
            placeholder="Search colleges, courses, or guides..."
            className="flex-1 w-full bg-transparent border-none py-5 px-4 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-0 text-lg"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
              <X className="w-5 h-5" />
            </button>
          )}
          <div className="hidden sm:flex items-center gap-1 text-[10px] text-slate-400 ml-2 font-mono bg-slate-100 px-2 py-1 rounded">
            <span>ESC</span> to close
          </div>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          
          {isSearching && (
            <div className="p-8 text-center text-slate-400">
              <div className="w-6 h-6 border-2 border-accent-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-sm">Searching our database...</p>
            </div>
          )}

          {!isSearching && query.trim().length >= 2 && results.length === 0 && (
            <div className="p-12 text-center">
              <Search className="w-12 h-12 text-slate-200 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-700 mb-1">No results found for "{query}"</h3>
              <p className="text-sm text-slate-500 mb-6">We couldn't find anything matching your search. Try different keywords.</p>
              
              <div className="text-left max-w-sm mx-auto">
                <p className="text-xs font-bold text-slate-400 uppercase mb-3">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {['MBBS in Karnataka', 'B.Tech Admissions', 'Top MBA Colleges', 'NEET Cutoff'].map(s => (
                    <button key={s} onClick={() => { setQuery(s); inputRef.current?.focus(); }} className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1.5 rounded-full transition-colors">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {!isSearching && results.length > 0 && (
            <div className="p-2">
              {results.map((result, idx) => {
                const Icon = result.type === 'college' ? Building2 : result.type === 'course' ? GraduationCap : FileText;
                const isSelected = idx === selectedIndex;
                
                return (
                  <button
                    key={idx}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    onClick={() => navigateTo(result.url, query)}
                    className={`w-full text-left p-4 rounded-xl flex items-start gap-4 transition-colors ${isSelected ? 'bg-primary-50' : 'hover:bg-slate-50'}`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 mt-1 ${result.type === 'college' ? 'bg-blue-100 text-blue-600' : result.type === 'course' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold truncate mb-1 ${isSelected ? 'text-primary-900' : 'text-slate-700'}`}>{result.title}</h4>
                      <p className="text-xs text-slate-500 truncate mb-1.5">{result.excerpt}</p>
                      <div className="flex items-center gap-2 text-[10px]">
                        <span className="font-bold uppercase tracking-wider text-slate-400">{result.type}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span className="text-slate-500">{result.meta}</span>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 shrink-0 self-center ${isSelected ? 'text-accent-500' : 'text-slate-300'}`} />
                  </button>
                );
              })}

              <div className="p-4 border-t border-slate-100 mt-2">
                <button 
                  onClick={() => navigateTo(`/search?q=${encodeURIComponent(query)}`, query)}
                  className="w-full bg-slate-50 hover:bg-slate-100 text-primary-900 font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  View all results for "{query}"
                </button>
              </div>
            </div>
          )}

          {/* Idle State (Recent Searches) */}
          {!query.trim() && recentSearches.length > 0 && (
            <div className="p-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-4">Recent Searches</p>
              <div>
                {recentSearches.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setQuery(s); inputRef.current?.focus(); }}
                    className="w-full text-left px-4 py-3 flex items-center justify-between text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-slate-400 mr-3" />
                      <span className="text-sm font-medium">{s}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-100 px-4 py-3 flex items-center justify-between text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><kbd className="bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-sm">↑</kbd><kbd className="bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-sm">↓</kbd> to navigate</span>
            <span className="flex items-center gap-1"><kbd className="bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-sm">↵</kbd> to select</span>
          </div>
          <span className="flex items-center gap-1 font-serif text-primary-900 font-bold">Amets Educare</span>
        </div>
      </div>
    </div>
  );
}
