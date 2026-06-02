import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { 
  Stethoscope, Cpu, Scale, Briefcase, GraduationCap, 
  ChevronRight, ArrowRight, CheckCircle2, PhoneCall
} from 'lucide-react';
import { generateBreadcrumbSchema, generateOrganizationSchema } from '@/lib/schemas';

// --- METADATA ---
export const metadata: Metadata = {
  title: "Medical, Engineering & Professional Courses",
  description: "Explore MBBS, BDS, B.Tech, MBA, LLB, Nursing, BAMS, BHMS and other professional courses. Get expert admission guidance across India and abroad.",
};

// --- DATA ---
const CATEGORIES = [
  {
    title: 'Medical & Healthcare',
    icon: Stethoscope,
    color: 'bg-blue-500',
    iconBg: 'bg-blue-100 text-blue-600',
    slug: 'medical',
    courses: [
      { name: 'MBBS', href: '/courses/mbbs' },
      { name: 'BDS', href: '/courses/bds' },
      { name: 'BAMS', href: '/courses/bams' },
      { name: 'BHMS', href: '/courses/bhms' },
      { name: 'B.Sc Nursing', href: '/courses/nursing' },
      { name: 'B.Pharma', href: '/courses/b-pharma' },
      { name: 'D.Pharma', href: '/courses/d-pharma' },
    ]
  },
  {
    title: 'Engineering & Technical',
    icon: Cpu,
    color: 'bg-emerald-500',
    iconBg: 'bg-emerald-100 text-emerald-600',
    slug: 'engineering',
    courses: [
      { name: 'B.Tech', href: '/courses/btech' },
      { name: 'M.Tech', href: '/courses/mtech' },
      { name: 'BCA', href: '/courses/bca' },
    ]
  },
  {
    title: 'Legal Studies',
    icon: Scale,
    color: 'bg-purple-500',
    iconBg: 'bg-purple-100 text-purple-600',
    slug: 'legal',
    courses: [
      { name: 'LLB', href: '/courses/llb' },
      { name: 'LLM', href: '/courses/llm' },
    ]
  },
  {
    title: 'Management',
    icon: Briefcase,
    color: 'bg-amber-500',
    iconBg: 'bg-amber-100 text-amber-600',
    slug: 'management',
    courses: [
      { name: 'MBA', href: '/courses/mba' },
    ]
  },
  {
    title: 'Education',
    icon: GraduationCap,
    color: 'bg-pink-500',
    iconBg: 'bg-pink-100 text-pink-600',
    slug: 'education',
    courses: [
      { name: 'B.Ed', href: '/courses/bed' },
    ]
  }
];

const COMPARISON_TABLE = [
  { course: 'MBBS', duration: '5.5 Years', eligibility: '10+2 PCB, NEET Valid', fee: '₹5L - ₹25L/yr', scope: 'Doctor, Surgeon, Specialist' },
  { course: 'BDS', duration: '5 Years', eligibility: '10+2 PCB, NEET Valid', fee: '₹2L - ₹8L/yr', scope: 'Dentist, Dental Surgeon' },
  { course: 'B.Tech', duration: '4 Years', eligibility: '10+2 PCM (Min 50%)', fee: '₹1L - ₹4L/yr', scope: 'Software Engineer, IT Consultant' },
  { course: 'MBA', duration: '2 Years', eligibility: 'Graduation (Any Stream)', fee: '₹2L - ₹15L/yr', scope: 'Manager, Entrepreneur, Analyst' },
  { course: 'LLB', duration: '3 / 5 Years', eligibility: 'Graduation / 10+2', fee: '₹50K - ₹3L/yr', scope: 'Lawyer, Legal Advisor, Judge' },
  { course: 'B.Sc Nursing', duration: '4 Years', eligibility: '10+2 PCB', fee: '₹50K - ₹2L/yr', scope: 'Registered Nurse, Healthcare Manager' },
];

const STEPS = [
  { title: 'Consultation', desc: 'Initial profile evaluation and goal setting with Reena Thakur and team.' },
  { title: 'Shortlisting', desc: 'Selecting the best colleges based on entrance scores, budget, and location.' },
  { title: 'Application', desc: 'Handling documentation, state counselling forms, and direct university applications.' },
  { title: 'Admission', desc: 'Seat confirmation, visa processing (for abroad), and final enrollment formalities.' }
];

export default function CoursesPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ametseducare.com' },
    { name: 'Courses', url: 'https://ametseducare.com/courses' }
  ];

  // Generate ItemList Schema for SEO
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": CATEGORIES.flatMap((cat, i) => 
      cat.courses.map((c, j) => ({
        "@type": "ListItem",
        "position": (i * 10) + j + 1,
        "name": c.name,
        "url": `https://ametseducare.com${c.href}`
      }))
    )
  };

  return (
    <main className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Schemas */}
      <Script
        id="schema-breadcrumb-courses"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
      <Script
        id="schema-organization-courses"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />
      <Script
        id="schema-itemlist-courses"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Breadcrumb Header */}
      <div className="bg-primary-950 border-b border-primary-800 pt-24 pb-4 px-4 hidden md:block">
        <div className="container-premium text-sm font-medium text-slate-400 flex items-center gap-2">
          <Link href="/" className="hover:text-accent-500 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Courses</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="container-premium relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Courses We Offer
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light mb-8">
            Comprehensive admission guidance for medical, technical, legal and management programs. Discover your path to success with Amets Educare.
          </p>
          <Link href="/study-abroad/mbbs" className="inline-flex items-center gap-2 bg-transparent border border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-primary-900 font-semibold px-6 py-3 rounded-full transition-all">
            Looking for MBBS Abroad? Click Here <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="section-padding -mt-10 relative z-20">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.title} className="bg-white rounded-2xl shadow-premium p-8 border border-slate-100 hover:shadow-2xl transition-shadow group">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${cat.iconBg}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">{cat.title}</h2>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {cat.courses.map(course => (
                      <Link 
                        key={course.name} 
                        href={course.href}
                        className="bg-slate-50 text-slate-700 hover:bg-primary-50 hover:text-primary-900 border border-slate-200 px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
                      >
                        {course.name}
                      </Link>
                    ))}
                  </div>

                  <Link href={`/courses#${cat.slug}`} className="mt-auto inline-flex items-center text-accent-600 font-bold hover:text-primary-900 transition-colors">
                    Explore Category <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="bg-white section-padding border-y border-slate-200">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">Course Comparison at a Glance</h2>
            <p className="text-slate-600">Quickly compare durations, eligibility criteria, and career scopes for major programs.</p>
          </div>

          <div className="overflow-x-auto pb-4 custom-scrollbar rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-50">
                  <th className="py-5 px-6 font-bold text-primary-900 border-b border-slate-200 uppercase text-sm tracking-wider">Course</th>
                  <th className="py-5 px-6 font-bold text-primary-900 border-b border-slate-200 uppercase text-sm tracking-wider">Duration</th>
                  <th className="py-5 px-6 font-bold text-primary-900 border-b border-slate-200 uppercase text-sm tracking-wider">Eligibility</th>
                  <th className="py-5 px-6 font-bold text-primary-900 border-b border-slate-200 uppercase text-sm tracking-wider">Avg. Fees</th>
                  <th className="py-5 px-6 font-bold text-primary-900 border-b border-slate-200 uppercase text-sm tracking-wider">Career Scope</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors border-b border-slate-100 last:border-0">
                    <td className="py-4 px-6 font-semibold text-primary-800">{row.course}</td>
                    <td className="py-4 px-6 text-slate-600">{row.duration}</td>
                    <td className="py-4 px-6 text-slate-600">{row.eligibility}</td>
                    <td className="py-4 px-6 text-slate-600">{row.fee}</td>
                    <td className="py-4 px-6 text-slate-600 font-medium">{row.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Admission Process Overview */}
      <section className="section-padding bg-slate-50">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-500 font-bold tracking-wider uppercase text-sm mb-3 block">Simple & Transparent</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900">Our Admission Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Connecting Line (hidden on mobile) */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-slate-200 z-0">
                    <div className="h-full bg-accent-500 w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                )}
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 shadow-lg flex items-center justify-center mb-6 group-hover:border-accent-500 transition-colors">
                    <span className="font-serif text-3xl font-bold text-primary-900">0{idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-xl text-primary-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/admissions" className="text-accent-600 font-bold hover:text-primary-900 inline-flex items-center">
              Read Detailed Admission Guide <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 py-24 text-center">
        <div className="container-premium max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Not sure which course is right for you?
          </h2>
          <p className="text-slate-300 mb-10 text-lg font-light">
            Choosing the right career path can be overwhelming. Let our experts evaluate your profile and guide you to the perfect course.
          </p>
          <Link href="/contact-us" className="bg-accent-500 text-primary-900 font-bold px-10 py-4 rounded-full hover:bg-accent-400 hover:shadow-gold transition-all inline-flex items-center gap-2">
            <PhoneCall className="w-5 h-5" />
            Talk to Reena Thakur
          </Link>
        </div>
      </section>

    </main>
  );
}
