import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Building2, MapPin, Search, Filter, PhoneCall, ArrowRight, Star } from 'lucide-react';
import { states, colleges } from '@/lib/data';
import { generateBreadcrumbSchema } from '@/lib/schemas';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Colleges & Universities in India — Complete Directory | Amets Educare",
  description: "Explore top medical, engineering and professional colleges across all Indian states. Find the best institution for your career.",
};

export default function CollegesDirectoryPage() {
  const featuredColleges = colleges.slice(0, 8);

  const breadcrumbs = [
    { name: 'Home', url: 'https://ametseducare.com' },
    { name: 'Colleges & Universities', url: 'https://ametseducare.com/colleges-universities' }
  ];

  return (
    <main className="bg-slate-50 min-h-screen">
      <Script id="schema-breadcrumb-dir" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />
      
      {/* Hero Section */}
      <section className="bg-primary-900 text-white pt-32 pb-20 text-center">
        <div className="container-premium max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Colleges & Universities in India
            <span className="block text-accent-500 mt-2 text-3xl md:text-4xl">— Complete Directory —</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light mb-10">
            Explore top medical, engineering and professional colleges across all Indian states. Compare fees, courses, and ratings to make an informed decision.
          </p>

          {/* Filter Bar */}
          <div className="bg-white p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row gap-2 max-w-3xl mx-auto">
            <div className="flex-1 flex items-center px-4 py-3 bg-slate-50 rounded-xl md:rounded-l-full border border-slate-100">
              <Search className="w-5 h-5 text-slate-400 mr-3" />
              <input type="text" placeholder="Search by college name..." className="bg-transparent border-none focus:outline-none w-full text-slate-700" />
            </div>
            <div className="flex-1 flex items-center px-4 py-3 bg-slate-50 rounded-xl md:rounded-none border border-slate-100 md:border-l-0">
              <Filter className="w-5 h-5 text-slate-400 mr-3" />
              <select className="bg-transparent border-none focus:outline-none w-full text-slate-700 cursor-pointer">
                <option value="">All Course Types</option>
                <option value="medical">Medical (MBBS, BDS)</option>
                <option value="engineering">Engineering (B.Tech)</option>
                <option value="management">Management (MBA)</option>
                <option value="law">Law (LLB)</option>
              </select>
            </div>
            <button className="bg-accent-500 hover:bg-accent-400 text-primary-900 font-bold px-8 py-4 rounded-xl md:rounded-full transition-colors whitespace-nowrap">
              Search Directory
            </button>
          </div>
        </div>
      </section>

      {/* State Grid Section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary-900 mb-2">Browse by State</h2>
              <p className="text-slate-600">Discover prestigious institutions in your preferred location.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {states.map((state) => {
              // Mock college count for visual fidelity
              const count = Math.floor(Math.random() * 50) + 12;
              return (
                <Link key={state.slug} href={`/colleges-universities/${state.slug}`} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-accent-500 hover:shadow-lg transition-all group text-center flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors">
                    <MapPin className="w-5 h-5 text-primary-700" />
                  </div>
                  <h3 className="font-bold text-primary-900 mb-1 group-hover:text-accent-600 transition-colors">{state.name}</h3>
                  <p className="text-xs text-slate-500 mb-3">Capital: {state.capital}</p>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full group-hover:bg-accent-100 group-hover:text-accent-800 transition-colors">
                    {count} Colleges
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Colleges */}
      <section className="bg-white section-padding border-t border-slate-200">
        <div className="container-premium">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary-900 mb-4">Featured Institutions</h2>
            <p className="text-slate-600">Top-rated colleges offering world-class education and outstanding placement records.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredColleges.map((college, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all overflow-hidden flex flex-col h-full group">
                <div className="h-32 bg-slate-200 relative overflow-hidden">
                  {/* Placeholder for college image */}
                  <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-primary-900 text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> {college.rating}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{college.type}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded">{college.recognition.split(',')[0]}</span>
                  </div>
                  <h3 className="font-bold text-primary-900 mb-1 leading-tight group-hover:text-accent-600 transition-colors">{college.name}</h3>
                  <p className="text-xs text-slate-500 flex items-center mb-4"><MapPin className="w-3 h-3 mr-1" /> {college.city}, {college.state}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {college.courses.map((c, j) => (
                      <span key={j} className="text-[10px] font-medium bg-primary-50 text-primary-700 px-1.5 py-0.5 rounded border border-primary-100">{c}</span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-400">Annual Fee</p>
                      <p className="text-sm font-bold text-slate-700">{college.annualFee}</p>
                    </div>
                    <Link href={`/colleges-universities/${college.state.toLowerCase().replace(/\s+/g, '-')}/${college.city.toLowerCase().replace(/\s+/g, '-')}/${college.slug}`} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-primary-900 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 py-16 text-center border-t-4 border-accent-500">
        <div className="container-premium">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Can't find your target college?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Our database is constantly updating. If you have a specific institution in mind, reach out to Reena Thakur for instant admission prospects.</p>
          <Link href="/contact-us" className="inline-flex items-center gap-2 bg-accent-500 text-primary-900 font-bold px-8 py-4 rounded-full hover:bg-white hover:shadow-lg transition-all">
            <PhoneCall className="w-5 h-5" /> Contact Reena Thakur
          </Link>
        </div>
      </section>
    </main>
  );
}
