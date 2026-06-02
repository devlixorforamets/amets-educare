import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Globe, ShieldCheck, Banknote, Building2, Users, BedDouble, ChevronRight, Star, Image as ImageIcon } from 'lucide-react';
import { states, colleges } from '@/lib/data';
import { generateBreadcrumbSchema, generateCollegeSchema } from '@/lib/schemas';
import Script from 'next/script';

export async function generateStaticParams() {
  const params: { state: string, city: string, college: string }[] = [];
  
  colleges.forEach(college => {
    params.push({
      state: (college.state || 'unknown-state').toLowerCase().replace(/\s+/g, '-'),
      city: (college.city || 'unknown-city').toLowerCase().replace(/\s+/g, '-'),
      college: college.slug
    });
  });
  
  return params;
}

type Props = {
  params: Promise<{ state: string, city: string, college: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const college = colleges.find(c => c.slug === resolvedParams.college);
  const name = college?.name || resolvedParams.college.replace(/-/g, ' ');
  return {
    title: `${name} Admission 2026, Fees, Courses & Rating | Amets Educare`,
    description: `Get complete admission details for ${name}. View fee structure, courses offered, campus facilities, and direct admission guidelines.`,
  };
}

export default async function CollegeDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const college = colleges.find(c => c.slug === resolvedParams.college) || {
    name: resolvedParams.college.replace(/-/g, ' '),
    state: resolvedParams.state,
    city: resolvedParams.city,
    courses: ['MBBS', 'BDS', 'B.Tech'],
    type: 'Private',
    established: 2000,
    rating: 4.5,
    annualFee: 'Varies',
    recognition: 'Approved',
    hostel: true,
    slug: resolvedParams.college
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://ametseducare.com' },
    { name: 'Colleges', url: 'https://ametseducare.com/colleges-universities' },
    { name: college.state, url: `https://ametseducare.com/colleges-universities/${resolvedParams.state}` },
    { name: college.name, url: `https://ametseducare.com/colleges-universities/${resolvedParams.state}/${resolvedParams.city}/${resolvedParams.college}` }
  ];

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />
      <Script id="schema-college" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateCollegeSchema({
        name: college.name,
        description: `Premier educational institution located in ${college.city}, ${college.state}.`,
        url: `https://ametseducare.com/colleges-universities/${resolvedParams.state}/${resolvedParams.city}/${resolvedParams.college}`,
        logo: "https://ametseducare.com/logo.png",
        address: { streetAddress: "Campus Road", addressLocality: college.city, addressRegion: college.state, addressCountry: "IN" },
        contactPoint: { telephone: "+91-9876543210", email: "admissions@ametseducare.com" },
        sameAs: []
      })) }} />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200 pt-28 pb-4">
        <div className="container-premium">
          <nav className="flex flex-wrap items-center space-x-2 text-sm text-slate-500 font-medium">
            <Link href="/" className="hover:text-accent-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <Link href="/colleges-universities" className="hover:text-accent-500 transition-colors">Colleges</Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <Link href={`/colleges-universities/${resolvedParams.state}`} className="hover:text-accent-500 transition-colors capitalize">{resolvedParams.state.replace(/-/g, ' ')}</Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <span className="text-primary-900 truncate max-w-[200px] sm:max-w-xs">{college.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-primary-900 text-white relative">
        <div className="h-[250px] md:h-[350px] bg-slate-800 relative overflow-hidden">
          {/* Cover Image Placeholder */}
          <div className="absolute inset-0 bg-primary-900/40 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] z-0"></div>
          <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20">
            <Building2 className="w-32 h-32" />
          </div>
        </div>

        <div className="container-premium relative z-20 -mt-16 pb-12">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-32 h-32 bg-white rounded-2xl shadow-xl p-4 flex items-center justify-center shrink-0 border-4 border-slate-50">
              <Building2 className="w-16 h-16 text-primary-900" />
            </div>
            <div className="flex-1 mt-2 md:mt-16">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-accent-500 text-primary-900 px-2.5 py-1 rounded-full shadow-sm">{college.type}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur px-2.5 py-1 rounded-full border border-white/30">{college.recognition.split(',')[0]} Approved</span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 backdrop-blur px-2.5 py-1 rounded-full border border-amber-500/30 flex items-center"><Star className="w-3 h-3 fill-amber-300 mr-1"/> {college.rating} Rating</span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-balance shadow-black drop-shadow-md">
                {college.name}
              </h1>
              <p className="text-slate-300 flex items-center text-sm md:text-base font-medium">
                <MapPin className="w-4 h-4 mr-1.5 text-accent-500" /> {college.city}, {college.state}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-premium mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Quick Facts */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6 flex items-center">
                <ShieldCheck className="w-6 h-6 mr-2 text-accent-500" /> College Overview
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                <div className="border-b border-slate-100 pb-4">
                  <p className="text-xs text-slate-400 mb-1">Established</p>
                  <p className="font-semibold text-slate-700">{college.established}</p>
                </div>
                <div className="border-b border-slate-100 pb-4">
                  <p className="text-xs text-slate-400 mb-1">Institution Type</p>
                  <p className="font-semibold text-slate-700">{college.type}</p>
                </div>
                <div className="border-b border-slate-100 pb-4">
                  <p className="text-xs text-slate-400 mb-1">Approvals & Recognition</p>
                  <p className="font-semibold text-slate-700">{college.recognition}</p>
                </div>
                <div className="border-b border-slate-100 pb-4">
                  <p className="text-xs text-slate-400 mb-1">Hostel Facility</p>
                  <p className="font-semibold text-slate-700 flex items-center">
                    {college.hostel ? <><BedDouble className="w-4 h-4 mr-1 text-emerald-500" /> Available</> : 'Not Available'}
                  </p>
                </div>
              </div>
            </div>

            {/* Courses Offered */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6 flex items-center">
                <Building2 className="w-6 h-6 mr-2 text-accent-500" /> Courses Offered
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {college.courses.map((course, idx) => (
                  <Link key={idx} href={`/courses/${course.toLowerCase().replace(/[^a-z0-9]+/g, '')}`} className="border border-slate-200 rounded-xl p-4 hover:border-accent-500 hover:bg-slate-50 transition-all group flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-primary-900 group-hover:text-accent-600 transition-colors">{course}</h3>
                      <p className="text-xs text-slate-500">View admission process</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-accent-500 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Fee Structure */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm overflow-hidden">
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6 flex items-center">
                <Banknote className="w-6 h-6 mr-2 text-accent-500" /> Fee Structure
              </h2>
              <div className="overflow-x-auto hide-scrollbar -mx-6 md:mx-0 px-6 md:px-0">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-slate-50 border-y border-slate-200">
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase tracking-wider">Course</th>
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase tracking-wider">Duration</th>
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase tracking-wider">First Year Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {college.courses.map((course, idx) => (
                      <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                        <td className="py-4 px-4 font-semibold text-slate-700">{course}</td>
                        <td className="py-4 px-4 text-slate-600 text-sm">Dependent on course</td>
                        <td className="py-4 px-4 font-bold text-primary-900">{idx === 0 ? college.annualFee : 'On Request'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400 mt-4 italic">* Fee structure is indicative. For management quota/NRI fee structures, please contact our counsellors.</p>
            </div>

            {/* Campus Gallery Placeholder */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6 flex items-center">
                <ImageIcon className="w-6 h-6 mr-2 text-accent-500" /> Campus Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer border border-slate-200">
                    <ImageIcon className="w-6 h-6 text-slate-300" />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Sticky Lead Form */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xl sticky top-24">
              <h3 className="font-serif text-xl font-bold text-primary-900 mb-2">Apply for Admission</h3>
              <p className="text-sm text-slate-500 mb-6">Get expert guidance for securing a seat in {college.name}.</p>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500" />
                <input type="tel" placeholder="Phone Number" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500" />
                <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500" />
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500 text-slate-600">
                  <option value="">Select Course</option>
                  {college.courses.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <button type="button" className="w-full bg-accent-500 text-primary-900 font-bold py-4 rounded-lg hover:bg-accent-400 transition-colors mt-2 shadow-md">
                  Get Free Consultation
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-primary-900 mb-3">Location</h3>
              <div className="w-full h-48 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200">
                <div className="text-center text-slate-400">
                  <Globe className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <span className="text-xs">Interactive Map Data</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-3 flex items-start">
                <MapPin className="w-4 h-4 text-accent-500 mr-2 shrink-0 mt-0.5" />
                {college.city}, {college.state}, India
              </p>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
