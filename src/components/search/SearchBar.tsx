"use client";

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import dynamic from 'next/dynamic';

// Lazy load the heavy modal component
const SearchModal = dynamic(() => import('./SearchModal'), { ssr: false });

export default function SearchBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch for keyboard shortcut hints
  useEffect(() => setMounted(true), []);

  // Global Keyboard Shortcut Listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-between w-full md:w-64 bg-slate-100 hover:bg-slate-200 text-slate-500 border border-transparent hover:border-slate-300 rounded-full px-4 py-2.5 transition-all duration-200 group"
        aria-label="Search colleges and courses"
      >
        <div className="flex items-center">
          <Search className="w-4 h-4 text-slate-400 group-hover:text-primary-900 transition-colors mr-2 shrink-0" />
          <span className="text-sm font-medium">Search...</span>
        </div>
        {mounted && (
          <kbd className="hidden md:inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-slate-400 bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-sm">
            <span className="text-xs">⌘</span>K
          </kbd>
        )}
      </button>

      {isModalOpen && (
        <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
