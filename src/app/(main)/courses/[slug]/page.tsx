"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { 
  ChevronRight, Clock, Award, BookOpen, FileText, 
  MapPin, Star, GraduationCap, DollarSign, ChevronDown, 
  CheckCircle2, Send, ArrowRight, Building, Globe
} from 'lucide-react';
import { generateCourseSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schemas';

// --- INTERFACES ---

export interface College {
  name: string;
  city: string;
  state: string;
  annualFee: string;
  rating: number;
  slug: string;
}

export interface CoursePageProps {
  course: {
    name: string;
    slug: string;
    category: string;
    duration: string;
    eligibility: string;
    degree: string;
    entranceExam: string;
    description: string;
    syllabus: string[];
    careerOptions: string[];
    feeRange: { govt: string; private: string; abroad: string };
    topColleges: College[];
    relatedCourses: { name: string; slug: string; desc: string }[];
    faqs: Array<{question: string, answer: string}>;
    metaTitle: string;
    metaDescription: string;
  }
}

// --- SUB-COMPONENTS ---

const Breadcrumbs = ({ items }: { items: {name: string, url: string}[] }) => (
  <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-6 font-medium">
    {items.map((item, index) => (
      <React.Fragment key={item.name}>
        <Link href={item.url} className="hover:text-accent-500 transition-colors">
          {item.name}
        </Link>
        {index < items.length - 1 && <ChevronRight className="w-4 h-4" />}
      </React.Fragment>
    ))}
  </nav>
);

const LeadCaptureForm = ({ courseName }: { courseName: string }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sticky top-24">
      <h3 className="font-serif text-2xl font-bold text-primary-900 mb-2">Free Admission Guidance</h3>
      <p className="text-sm text-slate-500 mb-6">Fill the form to get expert advice for {courseName} admission.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input type="text" placeholder="Full Name" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all" />
        </div>
        <div>
          <input type="tel" placeholder="Phone Number" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all" />
        </div>
        <div>
          <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="City" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all" />
          <input type="text" placeholder="NEET/Entrance Score" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all" />
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-primary-900 text-accent-500 font-bold py-4 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center"
        >
          {isSubmitting ? 'Submitting...' : 'Get Free Guidance'}
        </button>
      </form>
      <p className="text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
        <CheckCircle2 className="w-3 h-3 text-emerald-500" /> We also assist via WhatsApp
      </p>
    </div>
  );
};

// --- MAIN TEMPLATE ---

export function CourseDetailTemplate({ course }: CoursePageProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'eligibility' | 'syllabus' | 'career' | 'fees'>('overview');

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Courses', url: '/courses' },
    { name: course.name, url: `/courses/${course.slug}` }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'career', label: 'Career Scope' },
    { id: 'fees', label: 'Fee Structure' }
  ] as const;

  const states = ['Karnataka', 'Maharashtra', 'Tamil Nadu', 'Delhi NCR', 'Uttar Pradesh', 'Madhya Pradesh', 'Rajasthan', 'Gujarat'];

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      {/* Schemas */}
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }} />
      <Script id="schema-course" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateCourseSchema({
        name: course.name,
        description: course.description,
        educationalLevel: course.degree,
        timeToComplete: course.duration,
        occupationalCredentialAwarded: "Professional Degree"
      })) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(course.faqs)) }} />

      {/* Hero Section */}
      <section className="bg-primary-900 pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container-premium relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="max-w-4xl">
            <span className="bg-accent-500 text-primary-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6 inline-block">
              {course.category}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-balance">
              {course.name} Admission {new Date().getFullYear()}: Complete Guide & College Options
            </h1>
            
            <div className="flex flex-wrap gap-4 md:gap-8 mb-10 border-y border-white/10 py-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Clock className="w-5 h-5 text-accent-500" /></div>
                <div><p className="text-xs text-slate-400">Duration</p><p className="font-semibold">{course.duration}</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><FileText className="w-5 h-5 text-accent-500" /></div>
                <div><p className="text-xs text-slate-400">Eligibility</p><p className="font-semibold">{course.eligibility}</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><GraduationCap className="w-5 h-5 text-accent-500" /></div>
                <div><p className="text-xs text-slate-400">Degree</p><p className="font-semibold">{course.degree}</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><BookOpen className="w-5 h-5 text-accent-500" /></div>
                <div><p className="text-xs text-slate-400">Entrance</p><p className="font-semibold">{course.entranceExam}</p></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="#colleges" className="bg-accent-500 text-primary-900 font-bold px-8 py-4 rounded-full hover:bg-accent-400 transition-colors">
                Check Cutoff & Colleges
              </Link>
              <Link href="#apply" className="bg-transparent border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
                Apply for Counselling
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container-premium py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Tabs Navigation */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-2 flex overflow-x-auto hide-scrollbar sticky top-4 z-40">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-[120px] py-3 text-sm font-semibold rounded-lg transition-colors ${activeTab === tab.id ? 'bg-primary-50 text-primary-900' : 'text-slate-500 hover:text-primary-900 hover:bg-slate-50'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 lg:p-10">
              {activeTab === 'overview' && (
                <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-primary-900 prose-a:text-accent-600">
                  <h2 className="text-3xl font-bold mb-6">What is {course.name}?</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{course.description}</p>
                  
                  <h3 className="text-2xl font-bold mb-4">Why choose Amets Educare for {course.name} Admission?</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" /> <span className="text-slate-600">Direct admission guidance and management quota seat securing.</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" /> <span className="text-slate-600">Comprehensive profile evaluation to match you with the exact right tier of institution.</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" /> <span className="text-slate-600">End-to-end documentation, counselling form filling, and reporting assistance.</span></li>
                  </ul>
                </div>
              )}

              {activeTab === 'eligibility' && (
                <div>
                  <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6">Eligibility & Entrance Exams</h2>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
                    <h4 className="font-bold text-primary-900 mb-2">Academic Requirement</h4>
                    <p className="text-slate-600 mb-4">{course.eligibility}</p>
                    <h4 className="font-bold text-primary-900 mb-2">Required Entrance Exam</h4>
                    <p className="text-slate-600 inline-block bg-white px-3 py-1 rounded border border-slate-200 font-mono text-sm">{course.entranceExam}</p>
                  </div>
                </div>
              )}

              {activeTab === 'syllabus' && (
                <div>
                  <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6">Syllabus Overview</h2>
                  <div className="space-y-4">
                    {course.syllabus.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-900 flex items-center justify-center font-bold text-sm shrink-0">{i+1}</div>
                        <p className="text-slate-700 mt-1">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'career' && (
                <div>
                  <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6">Career Opportunities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course.careerOptions.map((career, i) => (
                      <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                        <Award className="w-5 h-5 text-accent-500" />
                        <span className="font-medium text-slate-700">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'fees' && (
                <div>
                  <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6">Fee Structure Comparison</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="border border-slate-200 rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4"><Building className="w-6 h-6" /></div>
                      <h4 className="font-bold text-primary-900 mb-2">Government</h4>
                      <p className="text-xl font-bold text-slate-700">{course.feeRange.govt}</p>
                    </div>
                    <div className="border border-slate-200 rounded-xl p-6 text-center shadow-md border-b-4 border-b-accent-500 relative">
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-500 text-primary-900 text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"><Building className="w-6 h-6" /></div>
                      <h4 className="font-bold text-primary-900 mb-2">Private</h4>
                      <p className="text-xl font-bold text-slate-700">{course.feeRange.private}</p>
                    </div>
                    <div className="border border-slate-200 rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"><Globe className="w-6 h-6" /></div>
                      <h4 className="font-bold text-primary-900 mb-2">Abroad</h4>
                      <p className="text-xl font-bold text-slate-700">{course.feeRange.abroad}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Top Colleges Section */}
            <div id="colleges" className="pt-8">
              <div className="flex items-end justify-between mb-8">
                <h2 className="font-serif text-3xl font-bold text-primary-900">Top {course.name} Colleges in India</h2>
                <div className="hidden sm:block">
                  <select className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-700 focus:outline-none focus:border-accent-500">
                    <option>All States</option>
                    {states.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {course.topColleges.map((college, i) => (
                  <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-primary-900 text-lg mb-1 leading-tight group-hover:text-accent-600 transition-colors">{college.name}</h4>
                        <p className="text-xs text-slate-500 flex items-center"><MapPin className="w-3 h-3 mr-1" /> {college.city}, {college.state}</p>
                      </div>
                      <div className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-amber-700" /> {college.rating}
                      </div>
                    </div>
                    <div className="flex justify-between items-end border-t border-slate-100 pt-4 mt-4">
                      <div>
                        <p className="text-xs text-slate-400 mb-1">Annual Fee</p>
                        <p className="font-semibold text-slate-700 flex items-center"><DollarSign className="w-4 h-4 text-slate-400" /> {college.annualFee}</p>
                      </div>
                      <Link href={`/colleges-universities/${college.state.toLowerCase()}/${college.city.toLowerCase()}/${college.slug}`} className="text-sm font-bold text-accent-600 hover:text-primary-900">
                        View College &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/colleges-universities" className="inline-flex items-center justify-center border-2 border-primary-900 text-primary-900 font-bold px-8 py-3 rounded-full hover:bg-primary-900 hover:text-white transition-colors">
                  View All {course.name} Colleges
                </Link>
              </div>
            </div>

            {/* State-wise Admission */}
            <div className="bg-primary-900 rounded-2xl p-8 lg:p-10 text-white mt-12">
              <h2 className="font-serif text-3xl font-bold mb-8">Admission Process for {course.name} by State</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {states.map(state => (
                  <Link key={state} href={`/admissions/${state.toLowerCase().replace(/\s+/g, '-')}`} className="bg-primary-800 border border-primary-700 rounded-xl p-4 text-center hover:bg-accent-500 hover:text-primary-900 hover:border-accent-500 transition-all font-medium text-sm">
                    {state}
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="pt-8">
              <h2 className="font-serif text-3xl font-bold text-primary-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {course.faqs.map((faq, i) => (
                  <details key={i} className="group bg-white border border-slate-200 rounded-xl [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-primary-900">
                      {faq.question}
                      <span className="relative ml-1.5 h-5 w-5 shrink-0">
                        <ChevronDown className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity" />
                        <ChevronDown className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 rotate-180 transition-transform" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar / Form Area */}
          <div className="lg:col-span-4 relative" id="apply">
            <LeadCaptureForm courseName={course.name} />
          </div>
        </div>
      </div>

      {/* Related Courses */}
      <section className="bg-white py-20 border-t border-slate-200">
        <div className="container-premium">
          <h2 className="font-serif text-3xl font-bold text-primary-900 mb-8 text-center">Explore Related Courses</h2>
          <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar gap-6">
            {course.relatedCourses.map((rel, i) => (
              <div key={i} className="min-w-[280px] sm:min-w-[320px] snap-center bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-accent-500 transition-colors">
                <h3 className="text-xl font-bold text-primary-900 mb-2">{rel.name}</h3>
                <p className="text-sm text-slate-600 mb-6">{rel.desc}</p>
                <Link href={`/courses/${rel.slug}`} className="text-accent-600 font-bold hover:text-primary-900 flex items-center group">
                  Explore Course <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

// --- DYNAMIC PAGE EXPORT ---
// In a real app, this data would be fetched based on the slug.
export default function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  // Mock Data generation based on slug
  const mockCourse: CoursePageProps['course'] = {
    name: resolvedParams.slug.toUpperCase(),
    slug: resolvedParams.slug,
    category: "Medical & Healthcare",
    duration: "5.5 Years",
    eligibility: "10+2 PCB with 50%, Valid NEET Score",
    degree: "Undergraduate Professional Degree",
    entranceExam: "NEET UG",
    description: `The ${resolvedParams.slug.toUpperCase()} program is designed to create competent medical professionals. It involves rigorous academic study combined with extensive clinical rotations. Amets Educare specializes in securing management quota and merit seats in top institutions for this program.`,
    syllabus: [
      "First Year: Anatomy, Physiology, Biochemistry",
      "Second Year: Pathology, Microbiology, Pharmacology",
      "Third Year: ENT, Ophthalmology, Community Medicine",
      "Fourth Year: Medicine, Surgery, OBG, Pediatrics"
    ],
    careerOptions: ["Medical Officer", "Surgeon", "Specialist Doctor", "Healthcare Administrator"],
    feeRange: { govt: "₹50K - ₹2L / year", private: "₹10L - ₹25L / year", abroad: "₹3L - ₹6L / year" },
    topColleges: [
      { name: "Kasturba Medical College", city: "Manipal", state: "Karnataka", annualFee: "17.7L", rating: 4.8, slug: "kmc-manipal" },
      { name: "Christian Medical College", city: "Vellore", state: "Tamil Nadu", annualFee: "50K", rating: 4.9, slug: "cmc-vellore" },
      { name: "St. John's Medical College", city: "Bangalore", state: "Karnataka", annualFee: "7L", rating: 4.7, slug: "st-johns-bangalore" },
      { name: "KPC Medical College", city: "Kolkata", state: "West Bengal", annualFee: "12L", rating: 4.5, slug: "kpc-kolkata" }
    ],
    relatedCourses: [
      { name: "BDS", slug: "bds", desc: "Bachelor of Dental Surgery" },
      { name: "BAMS", slug: "bams", desc: "Bachelor of Ayurvedic Medicine and Surgery" },
      { name: "B.Sc Nursing", slug: "nursing", desc: "Bachelor of Science in Nursing" }
    ],
    faqs: [
      { question: `What is the NEET cutoff for ${resolvedParams.slug.toUpperCase()} in private colleges?`, answer: "The cutoff varies yearly, but generally, a score of 300+ is required for good private colleges through management quota." },
      { question: "Can Amets Educare help with education loans?", answer: "Yes, we provide complete documentation support to help you secure education loans from our banking partners." }
    ],
    metaTitle: `${resolvedParams.slug.toUpperCase()} Admission 2026 | Amets Educare`,
    metaDescription: `Complete guide for ${resolvedParams.slug.toUpperCase()} admission. Get details on eligibility, fees, syllabus, and top colleges. Connect with Reena Thakur for expert guidance.`
  };

  return <CourseDetailTemplate course={mockCourse} />;
}
