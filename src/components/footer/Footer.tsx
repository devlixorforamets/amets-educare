"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import {
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock,
  ArrowRight,
  Send
} from 'lucide-react';
import { generateOrganizationSchema } from '@/lib/schemas';

// --- DATA STRUCTURES ---

const QUICK_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Courses', href: '/courses' },
  { name: 'Colleges', href: '/colleges-universities' },
  { name: 'Study Abroad', href: '/study-abroad' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact-us' },
];

const TOP_COURSES = [
  { name: 'MBBS Admission', href: '/courses/mbbs' },
  { name: 'BDS Admission', href: '/courses/bds' },
  { name: 'B.Tech Engineering', href: '/courses/btech' },
  { name: 'MBA Programs', href: '/courses/mba' },
  { name: 'LLB & Legal Studies', href: '/courses/llb' },
  { name: 'B.Sc Nursing', href: '/courses/nursing' },
  { name: 'BAMS Admissions', href: '/courses/bams' },
  { name: 'BHMS Admissions', href: '/courses/bhms' },
];

// --- COMPONENT ---

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribeMessage('Thank you for subscribing to our newsletter!');
      setEmail('');
      
      // Clear message after 3 seconds
      setTimeout(() => setSubscribeMessage(''), 3000);
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-slate-300 relative border-t-4 border-accent-500 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-800/50 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      {/* JSON-LD Organization Schema embedded directly for redundancy/completeness as requested */}
      <Script
        id="schema-organization-footer"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />

      <div className="container-premium py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Social */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-baseline space-x-2">
                <span className="font-serif font-bold text-3xl tracking-tight text-white">AMETS</span>
                <span className="font-sans font-light text-xl tracking-widest text-accent-500">EDUCARE</span>
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Premier educational consultancy guiding ambitious students towards top-tier institutions across India and the globe. Your success is our mission.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <a href="https://www.facebook.com/ametseducare18/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center text-slate-400 hover:bg-accent-500 hover:text-primary-900 transition-all duration-300 shadow-md" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/amets_educare_delhi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center text-slate-400 hover:bg-accent-500 hover:text-primary-900 transition-all duration-300 shadow-md" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://x.com/EducareAmets" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center text-slate-400 hover:bg-accent-500 hover:text-primary-900 transition-all duration-300 shadow-md" aria-label="X (Twitter)">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/amets-educare/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center text-slate-400 hover:bg-accent-500 hover:text-primary-900 transition-all duration-300 shadow-md" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.youtube.com/@ametseducare6632" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center text-slate-400 hover:bg-accent-500 hover:text-primary-900 transition-all duration-300 shadow-md" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-serif font-semibold text-lg mb-6 flex items-center">
              Quick Links
              <span className="ml-3 h-[2px] w-8 bg-accent-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center text-sm font-medium text-slate-400 hover:text-accent-500 transition-colors">
                    <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-accent-500">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Courses */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-serif font-semibold text-lg mb-6 flex items-center">
              Top Courses
              <span className="ml-3 h-[2px] w-8 bg-accent-500 rounded-full"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-3">
              {TOP_COURSES.map((course) => (
                <Link key={course.name} href={course.href} className="group flex items-center text-sm font-medium text-slate-400 hover:text-accent-500 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-700 group-hover:bg-accent-500 mr-3 transition-colors"></span>
                  {course.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="lg:col-span-3 flex flex-col space-y-8">
            <div>
              <h3 className="text-white font-serif font-semibold text-lg mb-6 flex items-center">
                Get In Touch
                <span className="ml-3 h-[2px] w-8 bg-accent-500 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-accent-500 mr-4 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-400 leading-relaxed">
                    123 Education Plaza, Knowledge Park<br />
                    New Delhi, India 110001
                  </span>
                </li>
                <li className="flex items-center">
                  <PhoneCall className="w-5 h-5 text-accent-500 mr-4 shrink-0" />
                  <a href="tel:+919876543210" className="text-sm text-slate-400 hover:text-white transition-colors">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-accent-500 mr-4 shrink-0" />
                  <a href="mailto:info@ametseducare.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                    info@ametseducare.com
                  </a>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-accent-500 mr-4 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-400">
                    Mon - Sat: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-primary-800/40 p-5 rounded-xl border border-primary-700/50 backdrop-blur-sm">
              <h4 className="text-sm font-semibold text-white mb-3 tracking-wide">Subscribe to Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="w-full bg-primary-900 border border-primary-700 text-sm text-white px-4 py-2.5 rounded-l-lg focus:outline-none focus:border-accent-500 transition-colors placeholder:text-slate-500"
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-accent-500 hover:bg-accent-400 text-primary-900 px-4 py-2.5 rounded-r-lg transition-colors flex items-center justify-center font-semibold disabled:opacity-70"
                  aria-label="Subscribe"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-primary-900 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </form>
              {subscribeMessage && (
                <p className="text-xs text-accent-500 mt-2 animate-fade-in">{subscribeMessage}</p>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-primary-800 bg-primary-950">
        <div className="container-premium py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Amets Educare. All rights reserved.
          </p>
          
          <p className="text-xs text-slate-500 text-center md:text-left flex flex-col sm:flex-row items-center gap-1">
            <span>Designed & Developed with excellence by</span>
            <a 
              href="https://devlixor.com" 
              target="_blank" 
              rel="nofollow noopener noreferrer" 
              className="font-bold text-accent-500 hover:text-white transition-colors flex items-center group"
            >
              Devlixor Technologies
              <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 ml-0 group-hover:ml-1 opacity-0 group-hover:opacity-100">
                &rarr;
              </span>
            </a>
          </p>

          <div className="flex items-center space-x-6 text-xs text-slate-500">
            <Link href="/privacy-policy" className="hover:text-accent-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-accent-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
