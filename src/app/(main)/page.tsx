"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Users, Building, FileCheck, Globe, 
  Quote, Star, ChevronDown, CheckCircle2, PhoneCall,
  MapPin, Clock, ArrowUpRight, ShieldCheck
} from 'lucide-react';
import Script from 'next/script';
import { generateFAQSchema, generateCourseSchema } from '@/lib/schemas';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- DATA ---
const MARQUEE_ITEMS = ['MBBS', 'MS/MD', 'BDS', 'BAMS', 'BHMS', 'BUMS', 'BVSC', 'B.Sc Nursing', 'B.Pharma', 'D.Pharma', 'B.Tech', 'M.Tech', 'BCA', 'MBA', 'PGDM', 'BA LLB', 'LLB', 'LLM', 'B.Ed', 'M.Ed'];

const WHY_US_FEATURES = [
  {
    icon: Users,
    title: "Elite Counselling",
    desc: "Data-backed guidance from Reena Thakur & our expert core team.",
    keywords: []
  },
  {
    icon: Building,
    title: "Global Network",
    desc: "Direct tie-ups with 100+ premier NMC & WHO recognized universities.",
    keywords: []
  },
  {
    icon: ShieldCheck,
    title: "100% Assurance",
    desc: "Transparent, end-to-end process with guaranteed placement.",
    keywords: []
  },
  {
    icon: Globe,
    title: "Pan-India Reach",
    desc: "Empowering students from 28+ states to secure global opportunities.",
    keywords: []
  }
];

const FEATURED_COURSES = [
  {
    name: "MBBS",
    description: "Pursue medicine at top MCI-approved universities in India and abroad.",
    duration: "5.5 Years",
    eligibility: "10+2 PCB, NEET Valid Score",
    color: "bg-blue-500",
    href: "/courses/mbbs"
  },
  {
    name: "BDS",
    description: "Launch your career in dental surgery with premium college placements.",
    duration: "5 Years",
    eligibility: "10+2 PCB, NEET Valid Score",
    color: "bg-blue-400",
    href: "/courses/bds"
  },
  {
    name: "B.Tech",
    description: "Engineering admissions in CS, IT, AI & ML at leading tech institutes.",
    duration: "4 Years",
    eligibility: "10+2 PCM",
    color: "bg-emerald-500",
    href: "/courses/btech"
  },
  {
    name: "MBA",
    description: "Transform your career with management degrees from top B-Schools.",
    duration: "2 Years",
    eligibility: "Graduation (Any Stream)",
    color: "bg-amber-500",
    href: "/courses/mba"
  },
  {
    name: "LLB",
    description: "Expert guidance for law admissions in top national law universities.",
    duration: "3/5 Years",
    eligibility: "10+2 / Graduation",
    color: "bg-purple-500",
    href: "/courses/llb"
  },
  {
    name: "B.Sc Nursing",
    description: "Join the noble profession with admissions in reputed nursing colleges.",
    duration: "4 Years",
    eligibility: "10+2 PCB",
    color: "bg-pink-500",
    href: "/courses/nursing"
  }
];

const METRICS = [
  { label: "Students Admitted", value: 15000, suffix: "+" },
  { label: "Partner Colleges", value: 100, suffix: "+" },
  { label: "States Covered", value: 28, suffix: "+" },
  { label: "Countries Existence", value: 30, suffix: "+" },
  { label: "Years of Excellence", value: 15, suffix: "+" }
];

const TESTIMONIALS = [
  {
    name: "Aarav Sharma",
    course: "MBBS, Russia",
    year: "2024",
    text: "Reena ma'am made my dream of studying medicine a reality. The team handled my entire visa and admission process for Russia seamlessly."
  },
  {
    name: "Priya Patel",
    course: "MBA, Pune",
    year: "2023",
    text: "I was confused about which B-school to choose. Amets Educare provided a detailed profile evaluation and got me into a top college."
  },
  {
    name: "Rohan Verma",
    course: "B.Tech (CS), Bangalore",
    year: "2025",
    text: "Excellent counselling! They didn't just suggest colleges but mapped out the exact career trajectory for artificial intelligence."
  },
  {
    name: "Sneha Reddy",
    course: "BDS, Hyderabad",
    year: "2024",
    text: "Very transparent process. They guided my parents and me through the management quota admission process with absolute clarity."
  }
];

const FAQS = [
  {
    question: "How can Amets Educare help with my MBBS admission?",
    answer: "We provide end-to-end guidance including college shortlisting, profile building, NEET counselling assistance, documentation, and seat confirmation across India and abroad."
  },
  {
    question: "What is the eligibility for MBBS abroad?",
    answer: "You must have passed 10+2 with Physics, Chemistry, and Biology (min. 50% aggregate) and have a valid, qualifying NEET scorecard."
  },
  {
    question: "Do you provide management quota admission support?",
    answer: "Yes, we specialize in securing admissions through management and NRI quotas in top private medical, engineering, and management colleges across India."
  },
  {
    question: "Which states do you cover for college admissions?",
    answer: "We cover pan-India admissions with a strong network in Karnataka, Maharashtra, UP, Delhi NCR, Tamil Nadu, and Telangana."
  },
  {
    question: "What documents are required for NEET counselling?",
    answer: "Key documents include your NEET admit card and scorecard, 10th and 12th mark sheets, ID proof, category certificate (if applicable), and passport-size photographs."
  },
  {
    question: "How do I book a counselling session with Reena Thakur?",
    answer: "You can book a free initial consultation by filling out the contact form on our website or calling our helpline at +91-9354679830."
  }
];

const BLOGS = [
  {
    title: "Navigating NEET 2026: Top Strategies for Success",
    category: "Medical",
    date: "May 2, 2026",
    readTime: "5 min read",
    excerpt: "Discover the ultimate preparation strategies and last-minute tips to maximize your NEET score this year."
  },
  {
    title: "Why Georgia is the Top Choice for MBBS Abroad",
    category: "Study Abroad",
    date: "April 28, 2026",
    readTime: "7 min read",
    excerpt: "An in-depth look at the MCI-approved universities, affordable fees, and European lifestyle that makes Georgia perfect for Indian students."
  },
  {
    title: "B.Tech AI vs. Data Science: Making the Right Choice",
    category: "Engineering",
    date: "April 15, 2026",
    readTime: "6 min read",
    excerpt: "Confused between Artificial Intelligence and Data Science? We break down the syllabus, career prospects, and top colleges for both."
  }
];

// --- SECTION COMPONENTS ---

const SectionHeader = ({ eyebrow, title, light = false }: { eyebrow: string, title: string, light?: boolean }) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    <span className="text-accent-500 font-bold tracking-wider uppercase text-sm mb-3 block">{eyebrow}</span>
    <h2 className={`font-serif text-3xl md:text-5xl font-bold ${light ? 'text-white' : 'text-primary-900'} leading-tight`}>
      {title}
    </h2>
  </div>
);

const HERO_SLIDES = [
  {
    id: 1,
    badge: "India's Trusted Educational Consultancy",
    title: "Your Gateway to ",
    highlight: "Premier",
    subtitle: " Medical & Professional Education",
    desc: "Expert admission guidance for MBBS, BDS, B.Tech, MBA, LLB, Nursing & more. Led by Reena Thakur, we connect aspiring students with top colleges across India and abroad.",
    primaryAction: "Explore Courses",
    primaryLink: "/courses",
    secondaryAction: "Book Free Counselling",
    secondaryLink: "/contact-us",
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(15, 40, 71, 1) 0%, rgba(10, 25, 47, 1) 100%)",
    image: "/images/hero_medical.png",
    imageAlt: "Medical student interacting with modern holographic data",
  },
  {
    id: 2,
    badge: "Top Engineering Colleges",
    title: "Accelerate Your ",
    highlight: "Career",
    subtitle: " With Premium B.Tech Programs",
    desc: "Unlock your potential with premium B.Tech programs. We partner with India's leading institutions to provide you with the best technical education and placement opportunities.",
    primaryAction: "View Engineering",
    primaryLink: "/courses",
    secondaryAction: "Talk to an Expert",
    secondaryLink: "/contact-us",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(30, 58, 138, 0.8) 0%, rgba(10, 25, 47, 1) 80%)",
    image: "/images/hero_engineering.png",
    imageAlt: "Engineering students working on advanced robotics and coding",
  },
  {
    id: 3,
    badge: "Global MBA Admissions",
    title: "Shape Your ",
    highlight: "Business",
    subtitle: " Acumen with Premium MBAs",
    desc: "Get into top-tier B-Schools. Our expert counseling ensures you choose the right MBA program to leapfrog into leadership roles across global enterprises.",
    primaryAction: "Discover MBAs",
    primaryLink: "/courses",
    secondaryAction: "Get Free Assessment",
    secondaryLink: "/contact-us",
    bgPattern: "radial-gradient(circle at 20% 80%, rgba(88, 28, 135, 0.6) 0%, rgba(10, 25, 47, 1) 80%)",
    image: "/images/hero_business.png",
    imageAlt: "Business professional presenting charts with modern skyscraper background",
  },
  {
    id: 4,
    badge: "International Opportunities",
    title: "Study ",
    highlight: "Abroad",
    subtitle: " & Become a Global Citizen",
    desc: "Discover world-class education opportunities in the US, UK, Canada, and Australia. Comprehensive visa, admission, and scholarship guidance from our seasoned experts.",
    primaryAction: "Explore Destinations",
    primaryLink: "/study-abroad",
    secondaryAction: "Consult Now",
    secondaryLink: "/contact-us",
    bgPattern: "radial-gradient(circle at 50% 0%, rgba(3, 105, 161, 0.7) 0%, rgba(10, 25, 47, 1) 80%)",
    image: "/images/hero_abroad.png",
    imageAlt: "Student exploring international education with global landmarks",
  },
  {
    id: 5,
    badge: "15+ Years of Excellence",
    title: "Trusted by ",
    highlight: "5000+",
    subtitle: " Successful Students",
    desc: "Join our legacy of excellence. With 15+ years of experience, Amets Educare has successfully shaped the futures of thousands of students across multiple disciplines.",
    primaryAction: "Read Success Stories",
    primaryLink: "/blog",
    secondaryAction: "Start Your Journey",
    secondaryLink: "/contact-us",
    bgPattern: "radial-gradient(circle at 100% 100%, rgba(180, 83, 9, 0.5) 0%, rgba(10, 25, 47, 1) 80%)",
    image: "/images/hero_success.png",
    imageAlt: "Successful graduates throwing caps in joyous celebration",
  }
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000); // Change slide every 7 seconds
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 lg:pt-40 transition-colors duration-1000 ease-in-out bg-primary-950">
      
      {/* Background Image that transitions with the slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={slide.image} 
            alt={slide.imageAlt} 
            loading="eager"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-primary-950/75 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent z-20"></div>
        </motion.div>
      </AnimatePresence>

      {/* Grid Pattern overlay for texture */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>

      <div className="container-premium relative z-10 w-full h-full flex flex-col justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col items-center text-center w-full max-w-5xl mx-auto"
          >
            <span className="text-accent-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm mb-4 sm:mb-6 inline-block bg-primary-950/40 px-4 py-1.5 rounded-full border border-accent-500/20 backdrop-blur-md shadow-lg">
              {slide.badge}
            </span>
            
            <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-extrabold leading-[1.1] sm:leading-[1.1] mb-6 text-balance drop-shadow-2xl">
              {slide.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">{slide.highlight}</span>{slide.subtitle}
            </h1>
            
            <p className="text-slate-200 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light drop-shadow-md">
              {slide.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center">
              <Link href={slide.primaryLink} className="w-full sm:w-auto bg-accent-500 text-primary-950 font-extrabold px-8 sm:px-10 py-4 rounded-full hover:bg-accent-400 hover:shadow-gold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                {slide.primaryAction} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href={slide.secondaryLink} className="w-full sm:w-auto bg-transparent border-2 border-white/40 text-white font-bold px-8 sm:px-10 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 text-sm sm:text-base">
                {slide.secondaryAction}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 relative z-20 mt-2 sm:mt-4">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === index ? 'w-6 sm:w-8 bg-accent-500' : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="w-full max-w-3xl mx-auto border-t border-white/10 pt-6 sm:pt-8 mt-8 sm:mt-10 relative z-20 hidden md:block">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/80 text-sm font-medium">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-500" /> 15+ Years Experience</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-500" /> 5000+ Students Placed</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-500" /> 100+ Partner Colleges</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-500" /> Pan India Coverage</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeSection() {
  return (
    <section className="w-full bg-slate-50 py-8 border-y border-slate-200 overflow-hidden relative flex items-center">
      {/* Gradient masks for smooth fade effect at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {/* Double the array for seamless looping */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span key={i} className="mx-3 sm:mx-4 bg-white text-primary-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold shadow-sm hover:shadow-md hover:bg-primary-900 hover:text-accent-500 hover:-translate-y-1 transition-all cursor-default border border-slate-200 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-500" /> {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function WhoWeAreSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section id="who-we-are" className="bg-white py-20 lg:py-28 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="container-premium relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(10,25,47,0.1)] group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
            <Image 
              src="/images/amets-educare-reena-thakur-counselling-session.jpg" 
              alt="Reena Thakur, Director of Amets Educare, counseling medical and engineering aspirants for MBBS, BAMS, BHMS admissions in New Delhi, India" 
              width={800} 
              height={600} 
              className="w-full h-auto object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center shrink-0">
                <Quote className="w-6 h-6 text-primary-900" />
              </div>
              <div>
                <p className="font-bold text-primary-900 text-sm">Reena Thakur</p>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Founder & Director, Amets Educare</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col items-start"
          >
            <span className="text-accent-500 font-bold tracking-wider uppercase text-sm mb-3 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent-500 inline-block"></span> Who We Are
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 leading-tight mb-6">
              India's Most Trusted <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-900">Education Consultants</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              Amets Educare is a premier educational consultancy based in New Delhi, India. With over 15 years of industry excellence, we specialize in providing transparent and highly successful admission guidance for prestigious medical, engineering, and professional courses.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Under the visionary leadership of <strong>Reena Thakur</strong>, our expert team has consistently helped thousands of students secure placements in top <strong>MBBS, BAMS, BHMS, BUMS, and B.Tech</strong> institutions across India and globally. We don't just offer admissions; we engineer successful careers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full sm:w-auto">
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 p-4 rounded-xl flex-1 hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-8 h-8 text-accent-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-primary-900 text-sm">100% Transparent</h4>
                  <p className="text-xs text-slate-500 mt-1">Ethical Guidance</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 p-4 rounded-xl flex-1 hover:shadow-md transition-shadow">
                <Globe className="w-8 h-8 text-accent-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-primary-900 text-sm">Global Reach</h4>
                  <p className="text-xs text-slate-500 mt-1">35+ Countries</p>
                </div>
              </div>
            </div>

            <Link href="/about-us" className="mt-10 inline-flex items-center justify-center gap-2 bg-primary-900 text-white font-bold px-8 py-4 rounded-full hover:bg-primary-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
              Read Our Full Story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function WhyAmetsSection() {
  return (
    <section id="why-us" className="bg-white section-padding relative overflow-hidden">
       {/* Background Decorative Slice */}
       <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-slate-50 -skew-x-12 transform origin-top-right z-0"></div>

       <div className="container-premium relative z-10">
         <div className="text-center max-w-3xl mx-auto mb-16">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-4">
             <span className="w-2 h-2 rounded-full bg-accent-500"></span>
             <span className="text-primary-900 font-bold uppercase tracking-widest text-xs">Why Choose Us</span>
           </div>
           <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary-900 mb-6">The Amets Advantage</h2>
           <p className="text-slate-500 text-lg">We provide an elite, data-driven framework to ensure your admission into the world's most prestigious universities.</p>
         </div>

         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Image / Art Graphic */}
            <div className="w-full lg:w-1/2 relative">
               <div className="absolute -inset-4 bg-gradient-to-tr from-accent-400/30 to-primary-600/30 rounded-[2.5rem] blur-2xl -z-10"></div>
               <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                 <Image 
                   src="/images/reena-thakur-gniot-felicitation.jpg" 
                   alt="reena-thakur-gniot-felicitation.jpg" 
                   width={800} 
                   height={600} 
                   className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                 
                 {/* Floating animated badge */}
                 <motion.div 
                   initial={{ y: 20, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   viewport={{ once: true }}
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50"
                 >
                    <div className="flex items-center gap-4">
                       <div className="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 font-bold text-2xl">
                         15+
                       </div>
                       <div>
                         <p className="text-sm font-bold text-primary-900 uppercase tracking-wide">Years of</p>
                         <p className="text-xs text-slate-500 font-medium">Excellence</p>
                       </div>
                    </div>
                 </motion.div>
               </div>
            </div>

            {/* Right 2x2 Grid - Short & Punchy */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_US_FEATURES.map((feature, idx) => {
                 const Icon = feature.icon;
                 return (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 0.5, delay: idx * 0.1 }}
                     className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 cursor-default"
                   >
                      <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-slate-50 rounded-full z-0 group-hover:bg-accent-50 transition-colors duration-500"></div>
                      <Icon className="absolute -right-2 -bottom-2 w-20 h-20 text-slate-100/50 z-0 group-hover:text-accent-200/50 transition-colors duration-500 group-hover:-rotate-12 group-hover:scale-110" />
                      
                      <div className="relative z-10">
                        <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                          <Icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-primary-900 mb-2">{feature.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                      </div>
                   </motion.div>
                 )
              })}
            </div>
         </div>

        {/* Schema markup for AEO/SEO */}
        <Script
          id="schema-why-us"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Why Choose Amets Educare",
              "itemListElement": WHY_US_FEATURES.map((feature, idx) => ({
                "@type": "ListItem",
                "position": idx + 1,
                "name": feature.title,
                "description": feature.desc
              }))
            })
          }}
        />
       </div>
    </section>
  );
}

function FeaturedCoursesSection() {
  return (
    <section id="courses" className="bg-white section-padding">
      <div className="container-premium">
        <SectionHeader eyebrow="Our Courses" title="Popular Courses We Guide For" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_COURSES.map((course, idx) => (
            <motion.div 
              key={course.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group bg-slate-50"
            >
              <div className={`h-2 w-full ${course.color}`}></div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary-900 mb-2">{course.name}</h3>
                <p className="text-slate-600 mb-6 h-12">{course.description}</p>
                
                <div className="space-y-3 mb-8 border-y border-slate-100 py-4">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 text-slate-400 mr-3" />
                    <span className="text-slate-700 font-medium">Duration:</span>
                    <span className="ml-auto text-slate-500">{course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FileCheck className="w-4 h-4 text-slate-400 mr-3" />
                    <span className="text-slate-700 font-medium">Eligibility:</span>
                    <span className="ml-auto text-slate-500 text-right">{course.eligibility}</span>
                  </div>
                </div>

                <Link href={course.href} className="text-accent-600 font-bold hover:text-primary-900 flex items-center group-hover:gap-2 transition-all">
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Inject Course Schema dynamically */}
              <Script
                id={`schema-course-${idx}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(generateCourseSchema({
                    name: course.name,
                    description: course.description,
                    educationalLevel: "Undergraduate",
                    timeToComplete: course.duration,
                    occupationalCredentialAwarded: "Degree"
                  }))
                }}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/courses" className="inline-flex items-center justify-center border-2 border-primary-900 text-primary-900 font-bold px-8 py-3 rounded-full hover:bg-primary-900 hover:text-white transition-colors">
            Explore All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}

function StudyAbroadSection() {
  return (
    <section id="study-abroad" className="bg-primary-900 text-white section-padding overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20 hidden lg:block"></div>
      
      <div className="container-premium relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent-500 font-bold tracking-wider uppercase text-sm mb-3 block">Study Abroad</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Pursue MBBS & Higher Education Overseas
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              We guide students to highly reputed, NMC-approved medical universities globally. Experience world-class infrastructure, affordable tuition, and international exposure.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              {['Russia 🇷🇺', 'Ukraine 🇺🇦', 'Philippines 🇵🇭', 'Georgia 🇬🇪', 'Kazakhstan 🇰🇿', 'Kyrgyzstan 🇰🇬'].map(country => (
                <span key={country} className="bg-primary-800 border border-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                  {country}
                </span>
              ))}
            </div>

            <Link href="/study-abroad" className="bg-accent-500 text-primary-900 font-bold px-8 py-4 rounded-full hover:bg-accent-400 hover:shadow-gold transition-all duration-300 inline-flex items-center gap-2">
              Explore MBBS Abroad <Globe className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-950 flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-24 h-24 text-white/20 mx-auto mb-4" />
                <span className="text-white/50 font-mono tracking-widest text-sm">[WORLD MAP VISUAL]</span>
              </div>
            </div>
            
            {/* Floating Glass Cards */}
            <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl hover:bg-white/20 transition-colors cursor-pointer">
              <p className="font-bold text-accent-400">Russia</p>
              <p className="text-xs text-white/80">Top NMC Approved</p>
            </div>
            <div className="absolute bottom-20 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl hover:bg-white/20 transition-colors cursor-pointer">
              <p className="font-bold text-accent-400">Georgia</p>
              <p className="text-xs text-white/80">European Standard</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Simple Counter Component
function AnimatedCounter({ end, duration = 2 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60); // 60 FPS
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

function SuccessMetricsSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-12 sm:py-20 border-b border-slate-100">
      <div className="container-premium">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="text-center px-2 sm:px-4 py-4 sm:py-0 border border-slate-100 sm:border-none rounded-xl sm:rounded-none bg-white sm:bg-transparent shadow-sm sm:shadow-none">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-accent-600 mb-1 sm:mb-2 flex items-center justify-center">
                <AnimatedCounter end={metric.value} />
                {metric.suffix}
              </div>
              <p className="text-primary-900 font-semibold uppercase tracking-wider text-[10px] sm:text-xs md:text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white section-padding overflow-hidden">
      <div className="container-premium">
        <SectionHeader eyebrow="Success Stories" title="What Our Students Say" />
        
        <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0 gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] w-full snap-center bg-slate-50 border border-slate-100 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-200" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent-500 fill-accent-500" />)}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed relative z-10">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-900 flex items-center justify-center font-bold text-lg border border-primary-200">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{testimonial.course} • Batch of {testimonial.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogPreviewSection() {
  return (
    <section id="blog" className="bg-slate-50 section-padding">
      <div className="container-premium">
        <SectionHeader eyebrow="Latest Insights" title="Admission Tips & Career Guidance" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((blog, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-video bg-gradient-to-tr from-slate-200 to-slate-100 relative flex items-center justify-center overflow-hidden">
                <span className="text-slate-400 font-mono text-sm">[ARTICLE IMAGE]</span>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-primary-900 tracking-wider">
                  {blog.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center text-xs text-slate-500 mb-3 font-medium">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-primary-900 mb-3 group-hover:text-accent-600 transition-colors line-clamp-2">
                  <Link href="/blog">{blog.title}</Link>
                </h3>
                <p className="text-slate-600 text-sm line-clamp-2 mb-4">{blog.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog" className="inline-flex items-center text-primary-900 font-bold hover:text-accent-600 transition-colors group">
            View All Articles <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  return (
    <section id="faq" className="bg-white section-padding">
      <div className="container-premium max-w-4xl">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-slate-100 transition-colors focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="font-semibold text-primary-900 pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-accent-600 transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-2 text-slate-600 bg-slate-50 border-t border-slate-100/50">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inject FAQ Schema */}
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }}
        />
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="bg-primary-900 py-16 sm:py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-accent-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>
      
      <div className="container-premium relative z-10 max-w-3xl mx-auto px-4">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          Begin Your Medical Career Today
        </h2>
        <p className="text-slate-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 font-light">
          Get expert guidance from Reena Thakur and team. Your dream college awaits.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link href="/contact-us" className="bg-accent-500 text-primary-900 font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-accent-400 hover:shadow-gold transition-all duration-300 w-full sm:w-auto">
            Schedule Free Counselling
          </Link>
          <a href="tel:+919354679830" className="text-accent-400 font-semibold flex items-center justify-center hover:text-white transition-colors gap-2">
            <PhoneCall className="w-5 h-5" /> Or call us: +91-9354679830
          </a>
        </div>
      </div>
    </section>
  );
}

// --- MAIN PAGE COMPONENT ---

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <MarqueeSection />
      <WhoWeAreSection />
      <WhyAmetsSection />
      <FeaturedCoursesSection />
      <StudyAbroadSection />
      <SuccessMetricsSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
