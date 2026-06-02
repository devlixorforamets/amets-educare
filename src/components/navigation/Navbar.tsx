"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, PhoneCall, Home, GraduationCap, Building2, Globe2, FileText, BookOpen, Contact, ChevronRight, ArrowRight, Info } from 'lucide-react';
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA STRUCTURES ---

const COURSES = {
  Medical: [
    { name: 'MBBS', href: '/courses/mbbs' },
    { name: 'MS/MD', href: '/courses/ms-md' },
    { name: 'BDS', href: '/courses/bds' },
    { name: 'BAMS', href: '/courses/bams' },
    { name: 'BHMS', href: '/courses/bhms' },
    { name: 'BUMS', href: '/courses/bums' },
    { name: 'BVSC', href: '/courses/bvsc' },
    { name: 'Nursing (B.Sc Nursing)', href: '/courses/nursing' },
    { name: 'B.Pharma', href: '/courses/b-pharma' },
    { name: 'D.Pharma', href: '/courses/d-pharma' },
  ],
  Engineering: [
    { name: 'B.Tech', href: '/courses/btech' },
    { name: 'M.Tech', href: '/courses/mtech' },
    { name: 'BCA', href: '/courses/bca' },
  ],
  Legal: [
    { name: 'BA LLB', href: '/courses/ballb' },
    { name: 'LLB', href: '/courses/llb' },
    { name: 'LLM', href: '/courses/llm' },
  ],
  Management: [
    { name: 'MBA', href: '/courses/mba' },
    { name: 'PGDM', href: '/courses/pgdm' },
  ],
  Education: [
    { name: 'B.Ed', href: '/courses/bed' },
    { name: 'M.Ed', href: '/courses/med' },
  ]
};

const COLLEGES = {
  ByState: [
    'Karnataka', 'Maharashtra', 'Tamil Nadu', 'Delhi', 'UP', 'MP', 
    'Rajasthan', 'Gujarat', 'Telangana', 'Andhra Pradesh', 'Kerala', 'West Bengal', 
    'Punjab', 'Haryana', 'Bihar', 'Odisha', 'Jharkhand', 'Chhattisgarh', 'Uttarakhand', 
    'Himachal Pradesh', 'Assam', 'Goa', 'Chandigarh', 'Pondicherry'
  ],
  ByCity: ['Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata'],
  TopUniversities: [
    { name: 'Top Medical Universities', href: '/colleges/top-medical' },
    { name: 'Top Engineering Universities', href: '/colleges/top-engineering' },
    { name: 'Top Management Institutes', href: '/colleges/top-management' }
  ]
};

const STUDY_ABROAD = [
  { name: 'MBBS Abroad Overview', href: '/study-abroad/mbbs' },
  { name: 'Study in Russia', href: '/study-abroad/russia' },
  { name: 'Study in Ukraine', href: '/study-abroad/ukraine' },
  { name: 'Study in Philippines', href: '/study-abroad/philippines' },
  { name: 'Study in Georgia', href: '/study-abroad/georgia' },
  { name: 'Study in Kazakhstan', href: '/study-abroad/kazakhstan' },
  { name: 'Study in Kyrgyzstan', href: '/study-abroad/kyrgyzstan' },
  { name: 'Study in Nepal', href: '/study-abroad/nepal' },
  { name: 'Study in Bangladesh', href: '/study-abroad/bangladesh' },
];

const ADMISSIONS = [
  { name: 'NEET Counselling', href: '/admissions/neet' },
  { name: 'Management Quota', href: '/admissions/management-quota' },
  { name: 'NRI Quota', href: '/admissions/nri-quota' },
  { name: 'Admission Alerts', href: '/admissions/alerts' },
];

// --- COMPONENTS ---

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll detection for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trap focus when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Dropdown handlers
  const handleMouseEnter = (menu: string) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  const isActive = (path: string) => pathname?.startsWith(path);

  const lightBackgroundPaths = ['/privacy-policy', '/terms-of-service', '/about-us'];
  const headerScrolled = isScrolled || lightBackgroundPaths.some(p => pathname?.startsWith(p));

  // Helper to chunk array for column layouts
  const chunkArray = (arr: any[], size: number) => {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i + size));
    }
    return chunked;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300 ${
          headerScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
        role="banner"
      >
        {/* Top Row: Logo & Socials */}
        <div className={`w-full border-b transition-colors duration-300 ${headerScrolled ? 'border-slate-200 py-2' : 'border-white/20 py-4'}`}>
          <div className="container-premium flex items-center justify-between">
            {/* Logo Area */}
            <Link 
              href="/" 
              className="flex flex-col relative group"
              aria-label="Amets Educare Home"
            >
              <div className="flex items-baseline space-x-2">
                <span className={`font-serif font-bold text-3xl tracking-tight transition-colors duration-300 ${!headerScrolled ? 'text-white' : 'text-primary-900'}`}>AMETS</span>
                <span className={`font-sans font-light text-xl tracking-widest transition-colors duration-300 ${!headerScrolled ? 'text-slate-200' : 'text-primary-800'}`}>EDUCARE</span>
              </div>
              {/* Gold Accent Line */}
              <div className="h-[2px] w-12 bg-accent-500 mt-1 transition-all duration-300 group-hover:w-full"></div>
            </Link>
            
            {/* Social Icons & Mobile Toggle */}
            <div className="flex items-center space-x-6">
              <div className={`hidden lg:flex items-center space-x-5 transition-colors duration-300 ${!headerScrolled ? 'text-white' : 'text-slate-600'}`}>
                <Link href="https://www.facebook.com/ametseducare18/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors" aria-label="Facebook"><FaFacebook className="w-5 h-5" /></Link>
                <Link href="https://x.com/EducareAmets" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors" aria-label="X (Twitter)"><FaXTwitter className="w-5 h-5" /></Link>
                <Link href="https://www.instagram.com/amets_educare_delhi/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors" aria-label="Instagram"><FaInstagram className="w-5 h-5" /></Link>
                <Link href="https://www.linkedin.com/company/amets-educare/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors" aria-label="LinkedIn"><FaLinkedin className="w-5 h-5" /></Link>
                <Link href="https://www.youtube.com/@ametseducare6632" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors" aria-label="YouTube"><FaYoutube className="w-5 h-5" /></Link>
              </div>
              {/* Mobile Menu Toggle */}
              <button 
                className={`lg:hidden transition-colors duration-300 ${!headerScrolled ? 'text-white' : 'text-primary-900'} p-2`}
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Mobile Menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Row: Menu */}
        <div className={`w-full transition-all duration-300 hidden lg:block ${headerScrolled ? 'py-2' : 'py-3'}`}>
          <div className="container-premium flex items-center justify-between">
            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8" role="navigation" aria-label="Main Navigation">

            {/* Home Link */}
            <Link 
              href="/" 
              className={`flex items-center gap-1.5 text-sm font-semibold tracking-wide uppercase transition-colors relative group ${pathname === '/' ? 'text-accent-500' : (!headerScrolled ? 'text-white' : 'text-primary-900')} hover:text-accent-500`}
            >
              <Home className="w-4 h-4" /> Home
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent-500 transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* About Link */}
            <Link 
              href="/about-us" 
              className={`flex items-center gap-1.5 text-sm font-semibold tracking-wide uppercase transition-colors relative group ${isActive('/about-us') ? 'text-accent-500' : (!headerScrolled ? 'text-white' : 'text-primary-900')} hover:text-accent-500`}
            >
              <Info className="w-4 h-4" /> About
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent-500 transition-all duration-300 ${isActive('/about-us') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* Courses Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('courses')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1.5 text-sm font-semibold tracking-wide uppercase transition-colors relative group ${isActive('/courses') ? 'text-accent-500' : (!headerScrolled ? 'text-white' : 'text-primary-900')} hover:text-accent-500`}
                aria-expanded={activeDropdown === 'courses'}
                aria-haspopup="true"
              >
                <GraduationCap className="w-4 h-4" /> Courses <ChevronDown className="w-4 h-4 ml-0.5" />
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent-500 transition-all duration-300 ${isActive('/courses') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>

              <AnimatePresence>
                {activeDropdown === 'courses' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-6 w-[800px]"
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-8 grid grid-cols-4 gap-8">
                      {Object.entries(COURSES).map(([category, items]) => (
                        <div key={category} className="space-y-4">
                          <h3 className="font-serif font-semibold text-primary-900 text-lg border-b border-slate-100 pb-2">{category}</h3>
                          <ul className="space-y-2">
                            {items.map((item) => (
                              <li key={item.name}>
                                <Link href={item.href} className="text-slate-600 hover:text-accent-600 hover:translate-x-1 text-sm font-medium transition-all flex items-center group">
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200 mr-2 group-hover:bg-accent-500 transition-colors"></span>
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="col-span-4 mt-4 pt-4 border-t border-slate-100 text-center">
                        <Link href="/courses" className="inline-flex items-center justify-center gap-2 text-accent-600 font-bold hover:text-primary-900 transition-all hover:gap-3 uppercase text-sm tracking-wider group">
                          Explore All Programs <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Colleges Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('colleges')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1.5 text-sm font-semibold tracking-wide uppercase transition-colors relative group ${isActive('/colleges') ? 'text-accent-500' : (!headerScrolled ? 'text-white' : 'text-primary-900')} hover:text-accent-500`}
              >
                <Building2 className="w-4 h-4" /> Colleges <ChevronDown className="w-4 h-4 ml-0.5" />
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent-500 transition-all duration-300 ${isActive('/colleges') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>

              <AnimatePresence>
                {activeDropdown === 'colleges' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-6 w-[1000px]"
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-8 grid grid-cols-4 gap-8">
                      <div className="col-span-2">
                        <h3 className="font-serif font-semibold text-primary-900 text-lg border-b border-slate-100 pb-2 mb-4">Colleges By State</h3>
                        <div className="grid grid-cols-3 gap-2">
                          {COLLEGES.ByState.map((state) => (
                            <Link key={state} href={`/colleges/state/${state.toLowerCase().replace(/\s+/g, '-')}`} className="text-slate-600 hover:text-accent-600 hover:bg-slate-50 rounded-md px-2 py-1.5 text-sm font-medium transition-all flex items-center gap-2 group">
                              <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-accent-500 transition-colors"></span>
                              {state}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-1">
                        <h3 className="font-serif font-semibold text-primary-900 text-lg border-b border-slate-100 pb-2 mb-4">By City</h3>
                        <ul className="space-y-2">
                          {COLLEGES.ByCity.map((city) => (
                            <li key={city}>
                              <Link href={`/colleges/city/${city.toLowerCase()}`} className="text-slate-600 hover:text-accent-600 hover:translate-x-1 text-sm font-medium transition-all flex items-center group">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-200 mr-2 group-hover:bg-accent-500 transition-colors"></span>
                                {city}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-span-1 bg-slate-50 p-6 rounded-lg border border-slate-100">
                        <h3 className="font-serif font-semibold text-primary-900 text-lg mb-4">Top Universities</h3>
                        <ul className="space-y-4">
                          {COLLEGES.TopUniversities.map((uni) => (
                            <li key={uni.name}>
                              <Link href={uni.href} className="text-accent-600 hover:text-primary-900 hover:translate-x-1 text-sm font-bold transition-all flex items-center justify-between group">
                                {uni.name} 
                                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-900" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Study Abroad Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('abroad')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1.5 text-sm font-semibold tracking-wide uppercase transition-colors relative group ${isActive('/study-abroad') ? 'text-accent-500' : (!headerScrolled ? 'text-white' : 'text-primary-900')} hover:text-accent-500`}
              >
                <Globe2 className="w-4 h-4" /> Study Abroad <ChevronDown className="w-4 h-4 ml-0.5" />
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent-500 transition-all duration-300 ${isActive('/study-abroad') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>

              <AnimatePresence>
                {activeDropdown === 'abroad' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-4 pt-6 w-64"
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-3">
                      {STUDY_ABROAD.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          className="flex items-center justify-between px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-accent-600 hover:pl-8 transition-all group"
                        >
                          {item.name}
                          <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-500" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>



            <Link 
              href="/blog" 
              className={`flex items-center gap-1.5 text-sm font-semibold tracking-wide uppercase transition-colors relative group ${isActive('/blog') ? 'text-accent-500' : (!headerScrolled ? 'text-white' : 'text-primary-900')} hover:text-accent-500`}
            >
              <BookOpen className="w-4 h-4" /> Blog
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent-500 transition-all duration-300 ${isActive('/blog') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link 
              href="/contact-us" 
              className={`flex items-center gap-1.5 text-sm font-semibold tracking-wide uppercase transition-colors relative group ${isActive('/contact-us') ? 'text-accent-500' : (!headerScrolled ? 'text-white' : 'text-primary-900')} hover:text-accent-500`}
            >
              <Contact className="w-4 h-4" /> Contact
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent-500 transition-all duration-300 ${isActive('/contact-us') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </nav>

          {/* Actions: CTA */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/contact-us" 
              className="bg-accent-500 text-primary-900 font-bold uppercase tracking-wider text-sm px-6 py-2.5 rounded-full hover:bg-primary-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              Free Counselling
            </Link>
          </div>
        </div>
        </div>
      </header>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary-900/60 backdrop-blur-sm z-[60] lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] lg:hidden overflow-y-auto flex flex-col shadow-2xl"
              role="dialog"
              aria-label="Mobile Navigation"
              aria-modal="true"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100 sticky top-0 bg-white z-10">
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-xl tracking-tight text-primary-900">AMETS</span>
                  <div className="h-[2px] w-8 bg-accent-500 mt-1"></div>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-primary-900 bg-slate-50 rounded-full transition-colors"
                  aria-label="Close Mobile Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-6 space-y-2">
                
                <Link href="/" className="flex items-center gap-3 py-3 text-lg font-semibold text-primary-900 border-b border-slate-50" onClick={() => setMobileMenuOpen(false)}>
                  <Home className="w-5 h-5 text-accent-500" /> Home
                </Link>
                <Link href="/about-us" className="flex items-center gap-3 py-3 text-lg font-semibold text-primary-900 border-b border-slate-50" onClick={() => setMobileMenuOpen(false)}>
                  <Info className="w-5 h-5 text-accent-500" /> About
                </Link>

                {/* Mobile Accordion: Courses */}
                <div className="py-2 border-b border-slate-50">
                  <button 
                    className="flex items-center justify-between w-full text-lg font-semibold text-primary-900 py-2"
                    onClick={() => setActiveDropdown(activeDropdown === 'm-courses' ? null : 'm-courses')}
                  >
                    <div className="flex items-center gap-3"><GraduationCap className="w-5 h-5 text-accent-500" /> Courses</div> <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'm-courses' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'm-courses' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-3 space-y-4">
                          {Object.entries(COURSES).map(([cat, items]) => (
                            <div key={cat}>
                              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">{cat}</h4>
                              <ul className="space-y-3 border-l-2 border-slate-100 pl-3">
                                {items.map(item => (
                                  <li key={item.name}>
                                    <Link href={item.href} className="text-slate-600 block text-sm" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Accordion: Colleges */}
                <div className="py-2 border-b border-slate-50">
                  <button 
                    className="flex items-center justify-between w-full text-lg font-semibold text-primary-900 py-2"
                    onClick={() => setActiveDropdown(activeDropdown === 'm-colleges' ? null : 'm-colleges')}
                  >
                    <div className="flex items-center gap-3"><Building2 className="w-5 h-5 text-accent-500" /> Colleges</div> <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'm-colleges' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'm-colleges' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-3 space-y-4">
                          <div>
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Top Destinations</h4>
                            <ul className="space-y-3 border-l-2 border-slate-100 pl-3">
                              {COLLEGES.TopUniversities.map(item => (
                                <li key={item.name}>
                                  <Link href={item.href} className="text-slate-600 block text-sm" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Accordion: Study Abroad */}
                <div className="py-2 border-b border-slate-50">
                  <button 
                    className="flex items-center justify-between w-full text-lg font-semibold text-primary-900 py-2"
                    onClick={() => setActiveDropdown(activeDropdown === 'm-abroad' ? null : 'm-abroad')}
                  >
                    <div className="flex items-center gap-3"><Globe2 className="w-5 h-5 text-accent-500" /> Study Abroad</div> <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'm-abroad' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'm-abroad' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 border-l-2 border-slate-100 ml-2 mt-2 space-y-3">
                          {STUDY_ABROAD.map(item => (
                            <Link key={item.name} href={item.href} className="text-slate-600 block text-sm" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>


                <Link href="/blog" className="flex items-center gap-3 py-3 text-lg font-semibold text-primary-900 border-b border-slate-50" onClick={() => setMobileMenuOpen(false)}>
                  <BookOpen className="w-5 h-5 text-accent-500" /> Blog
                </Link>
                <Link href="/contact-us" className="flex items-center gap-3 py-3 text-lg font-semibold text-primary-900" onClick={() => setMobileMenuOpen(false)}>
                  <Contact className="w-5 h-5 text-accent-500" /> Contact
                </Link>
              </div>

              <div className="p-6 bg-slate-50 mt-auto">
                <Link 
                  href="/contact-us" 
                  className="w-full bg-accent-500 text-primary-900 font-bold uppercase tracking-wider text-center py-4 rounded-xl hover:bg-primary-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <PhoneCall className="w-5 h-5" />
                  Free Counselling
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- SEARCH MODAL PLACEHOLDER --- */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary-900/40 backdrop-blur-sm"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl relative z-10 overflow-hidden border border-slate-200"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center px-6 py-4 border-b border-slate-100">
                <Search className="w-6 h-6 text-slate-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="Search courses, universities, or destinations..." 
                  className="flex-1 bg-transparent border-none outline-none text-lg text-primary-900 placeholder:text-slate-400"
                  autoFocus
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-1 rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 bg-slate-50 text-center py-12">
                <p className="text-slate-500 font-medium">Command palette functionality to be integrated...</p>
                <div className="mt-6 flex justify-center gap-2">
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded text-xs text-slate-500 font-mono shadow-sm">MBBS</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded text-xs text-slate-500 font-mono shadow-sm">Russia</span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded text-xs text-slate-500 font-mono shadow-sm">B.Tech</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
