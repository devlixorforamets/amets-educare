import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Building, ChevronRight, Filter } from 'lucide-react';
import { states, colleges } from '@/lib/data';
import { generateBreadcrumbSchema } from '@/lib/schemas';
import Script from 'next/script';

export async function generateStaticParams() {
  return states.map((state) => ({
    state: state.slug,
  }));
}

type Props = {
  params: Promise<{ state: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const stateData = states.find(s => s.slug === resolvedParams.state);
  const stateName = stateData?.name || resolvedParams.state;
  return {
    title: `${stateName} Medical & Professional Colleges | Amets Educare`,
    description: `Explore the top colleges in ${stateName}. Find admission details, fee structures, and placement records for MBBS, B.Tech, MBA, and more.`,
  };
}

export default async function StateCollegesPage({ params }: Props) {
  const resolvedParams = await params;
  const stateData = states.find(s => s.slug === resolvedParams.state) || { name: resolvedParams.state, slug: resolvedParams.state, capital: '', popularCities: [] };
  
  // Filter colleges for this state
  const stateColleges = colleges.filter(c => c.state.toLowerCase().replace(/\s+/g, '-') === resolvedParams.state);
  
  // Provide mock data if state has no colleges in our small dataset
  const displayColleges = stateColleges.length > 0 ? stateColleges : colleges.slice(0, 8).map(c => ({...c, state: stateData.name}));

  const breadcrumbs = [
    { name: 'Home', url: 'https://ametseducare.com' },
    { name: 'Colleges', url: 'https://ametseducare.com/colleges-universities' },
    { name: stateData.name, url: `https://ametseducare.com/colleges-universities/${resolvedParams.state}` }
  ];

  // ItemList Schema
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Top Colleges in ${stateData.name}`,
    "itemListElement": displayColleges.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://ametseducare.com/colleges-universities/${resolvedParams.state}/${(c.city || '').toLowerCase().replace(/\s+/g, '-')}/${c.slug}`
    }))
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />
      <Script id="schema-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Header */}
      <div className="bg-primary-950 pt-28 pb-12 border-b-4 border-accent-500">
        <div className="container-premium text-white">
          <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-accent-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/colleges-universities" className="hover:text-accent-500 transition-colors">Colleges</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-200">{stateData.name}</span>
          </nav>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{stateData.name} Medical & Professional Colleges</h1>
          <p className="text-slate-300 max-w-3xl text-lg font-light leading-relaxed">
            Discover premier educational institutions in {stateData.name}. From the bustling campuses in {stateData.capital} to specialized colleges across the state, explore your options for pursuing a world-class professional degree.
          </p>
        </div>
      </div>

      <div className="container-premium py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* City Filter (Horizontal Scroll) */}
            <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-6 hide-scrollbar">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider shrink-0 flex items-center"><Filter className="w-4 h-4 mr-1"/> Filter:</span>
              <button className="bg-primary-900 text-white px-4 py-2 rounded-full text-sm font-medium shrink-0 shadow-sm">All Cities</button>
              {stateData.popularCities.map(city => (
                <button key={city} className="bg-white border border-slate-200 text-slate-600 hover:border-accent-500 hover:text-primary-900 px-4 py-2 rounded-full text-sm font-medium shrink-0 transition-colors shadow-sm">{city}</button>
              ))}
            </div>

            <div className="mb-6 flex justify-between items-center text-sm text-slate-500 font-medium">
              <span>Showing {displayColleges.length} Colleges</span>
              <select className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-accent-500">
                <option>Sort by Rating</option>
                <option>Sort by Fee (Low to High)</option>
              </select>
            </div>

            {/* List */}
            <div className="space-y-6">
              {displayColleges.map((college, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow">
                  {/* Image Placeholder */}
                  <div className="w-full md:w-48 h-40 bg-slate-100 rounded-xl flex items-center justify-center shrink-0 border border-slate-200">
                    <Building className="w-10 h-10 text-slate-300" />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex gap-2 mb-2">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${college.type === 'Government' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'}`}>
                            {college.type}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 px-2 py-0.5 rounded flex items-center">
                            <Star className="w-3 h-3 fill-amber-500 text-amber-500 mr-1" /> {college.rating}
                          </span>
                        </div>
                        <h2 className="font-serif text-2xl font-bold text-primary-900 mb-1">{college.name}</h2>
                        <p className="text-sm text-slate-500 flex items-center"><MapPin className="w-4 h-4 mr-1 text-accent-500" /> {college.city}, {college.state}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {college.courses.map((c, j) => (
                        <span key={j} className="text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200 px-2 py-1 rounded">{c}</span>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
                      <div className="flex gap-6">
                        <div>
                          <p className="text-xs text-slate-400">Est. Year</p>
                          <p className="text-sm font-semibold text-slate-700">{college.established}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400">Annual Fee</p>
                          <p className="text-sm font-bold text-primary-900">{college.annualFee}</p>
                        </div>
                      </div>
                      <Link 
                        href={`/colleges-universities/${resolvedParams.state}/${(college.city || '').toLowerCase().replace(/\s+/g, '-')}/${college.slug}`}
                        className="bg-primary-50 text-primary-900 hover:bg-primary-900 hover:text-white font-bold px-6 py-2.5 rounded-lg transition-colors border border-primary-100 whitespace-nowrap text-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-10 flex justify-center gap-2">
              <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50">&laquo;</button>
              <button className="w-10 h-10 rounded-lg bg-primary-900 text-white font-bold flex items-center justify-center">1</button>
              <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50">2</button>
              <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50">3</button>
              <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50">&raquo;</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-primary-900 mb-4 border-b border-slate-100 pb-2">Admission Process</h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Admissions to professional courses in {stateData.name} are primarily conducted through centralized state counselling (e.g., KEA, CET Cell) based on NEET/JEE ranks.
              </p>
              <Link href={`/admissions/${resolvedParams.state}`} className="text-sm font-bold text-accent-600 hover:text-primary-900 flex items-center group">
                Read State Guidelines <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-primary-900 rounded-2xl p-6 text-white text-center">
              <h3 className="font-serif text-xl font-bold mb-3 text-accent-500">Need Guidance?</h3>
              <p className="text-sm text-slate-300 mb-6">Confused about which college to choose in {stateData.name}? Let our experts help.</p>
              <input type="text" placeholder="Your Name" className="w-full bg-primary-800 border border-primary-700 rounded-lg px-4 py-2 mb-3 text-sm focus:outline-none focus:border-accent-500" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-primary-800 border border-primary-700 rounded-lg px-4 py-2 mb-4 text-sm focus:outline-none focus:border-accent-500" />
              <button className="w-full bg-accent-500 text-primary-900 font-bold py-3 rounded-lg hover:bg-accent-400 transition-colors">Request Call Back</button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
