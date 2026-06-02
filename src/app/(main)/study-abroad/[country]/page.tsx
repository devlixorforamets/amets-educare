import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Globe, CheckCircle2, ChevronDown, Banknote, Clock, FileText, Send, ChevronRight } from 'lucide-react';
import { abroadCountries } from '@/lib/data';
import { generateBreadcrumbSchema } from '@/lib/schemas';
import Script from 'next/script';

export async function generateStaticParams() {
  return abroadCountries.map((country) => ({
    country: country.slug,
  }));
}

type Props = {
  params: Promise<{ country: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const countryData = abroadCountries.find(c => c.slug === resolvedParams.country);
  const name = countryData?.name || resolvedParams.country;
  return {
    title: `Study MBBS in ${name} 2026 | Fees & Top Medical Universities`,
    description: `Complete guide for Indian students to study MBBS in ${name}. Explore top NMC approved universities, detailed fee structures, climate, and direct admission processes.`,
  };
}

export default async function CountryDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const country = abroadCountries.find(c => c.slug === resolvedParams.country) || abroadCountries[0];

  const breadcrumbs = [
    { name: 'Home', url: 'https://ametseducare.com' },
    { name: 'Study Abroad', url: 'https://ametseducare.com/study-abroad' },
    { name: `MBBS in ${country.name}`, url: `https://ametseducare.com/study-abroad/${country.slug}` }
  ];

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />

      {/* Hero Section */}
      <section className="bg-primary-900 pt-32 pb-20 text-white relative border-b-4 border-accent-500">
        <div className="container-premium text-center">
          <span className="text-6xl mb-6 block drop-shadow-lg">{country.flag}</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Study MBBS in {country.name}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
            Top NMC-approved universities, affordable fees, and exceptional FMGE passing rates. A perfect destination for Indian medical aspirants.
          </p>
          <a href="#universities" className="bg-white text-primary-900 hover:bg-accent-500 font-bold px-8 py-3 rounded-full transition-colors inline-flex">
            View Universities
          </a>
        </div>
      </section>

      <div className="container-premium mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* 1. Country Overview */}
            <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-accent-500" /> Country Overview
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Capital City</p>
                  <p className="font-semibold text-slate-700">{country.capital}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Currency</p>
                  <p className="font-semibold text-slate-700">{country.currency}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Language</p>
                  <p className="font-semibold text-slate-700">{country.language}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Climate</p>
                  <p className="font-semibold text-slate-700">{country.climate}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Indian Food</p>
                  <p className="font-semibold text-slate-700">{country.indianFood ? 'Widely Available' : 'Limited'}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Course Duration</p>
                  <p className="font-semibold text-slate-700">{country.duration}</p>
                </div>
              </div>
            </section>

            {/* 2. Why Choose Country */}
            <section className="bg-primary-950 text-white rounded-2xl p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold mb-6 text-accent-500">Why Study MBBS in {country.name}?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded bg-primary-800 text-accent-500 flex items-center justify-center shrink-0 mr-4 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Affordable Excellence</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Fees start at just {country.startingFee}, significantly lower than private Indian colleges.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded bg-primary-800 text-accent-500 flex items-center justify-center shrink-0 mr-4 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">100% English Medium</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">The entire medical curriculum is taught in English by highly experienced international faculties.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded bg-primary-800 text-accent-500 flex items-center justify-center shrink-0 mr-4 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Global Recognition</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Degrees are universally recognized by {country.recognition}.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded bg-primary-800 text-accent-500 flex items-center justify-center shrink-0 mr-4 font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">High FMGE Pass Rate</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Graduates from {country.name} boast a {country.fmgePassRate} success rate in the Indian screening test.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Top Universities Table */}
            <section id="universities" className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm overflow-hidden">
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-accent-500" /> Top Universities in {country.name}
              </h2>
              <div className="overflow-x-auto hide-scrollbar -mx-8 px-8">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-50 border-y border-slate-200">
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase">University Name</th>
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase">Duration</th>
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase">Medium</th>
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {country.topUniversities.map((uni, idx) => (
                      <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                        <td className="py-4 px-4 font-semibold text-slate-700">{uni}</td>
                        <td className="py-4 px-4 text-slate-600 text-sm">{country.duration}</td>
                        <td className="py-4 px-4 text-slate-600 text-sm">{country.medium}</td>
                        <td className="py-4 px-4 text-right">
                          <button className="text-accent-600 font-bold hover:text-primary-900 text-sm whitespace-nowrap">Check Fees</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4. Eligibility & Fee Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-primary-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-accent-500" /> Eligibility
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Minimum 50% in 10+2 (PCB) for General category.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Minimum 40% for Reserved categories.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Qualifying NEET score is mandatory.</li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Must be 17 years old by Dec 31st of admission year.</li>
                </ul>
              </section>

              <section className="bg-amber-50 rounded-2xl border border-amber-100 p-8 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-primary-900 mb-4 flex items-center">
                  <Banknote className="w-5 h-5 mr-2 text-amber-600" /> Expected Expenses
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-amber-200 pb-2">
                    <span className="text-slate-600">Avg Tuition Fee</span>
                    <span className="font-semibold text-primary-900">{country.startingFee}</span>
                  </div>
                  <div className="flex justify-between border-b border-amber-200 pb-2">
                    <span className="text-slate-600">Hostel & Mess</span>
                    <span className="font-semibold text-primary-900">₹80,000 - ₹1.5L / year</span>
                  </div>
                  <div className="flex justify-between border-b border-amber-200 pb-2">
                    <span className="text-slate-600">Living Expenses</span>
                    <span className="font-semibold text-primary-900">₹10,000 / month approx</span>
                  </div>
                </div>
              </section>
            </div>

            {/* 5. FAQs */}
            <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group border border-slate-200 rounded-xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-primary-900 bg-slate-50 rounded-xl">
                    Is the degree from {country.name} valid in India?
                    <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform text-accent-500" />
                  </summary>
                  <div className="px-4 pb-4 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    Yes, absolutely. Once you complete your degree from an NMC-approved university in {country.name}, you just need to clear the FMGE (or upcoming NExT) exam in India to get your permanent practicing license.
                  </div>
                </details>
                <details className="group border border-slate-200 rounded-xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-primary-900 bg-slate-50 rounded-xl">
                    Do I need to learn {country.language}?
                    <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform text-accent-500" />
                  </summary>
                  <div className="px-4 pb-4 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    The entire medical curriculum is taught in {country.medium}. However, basic knowledge of the local language is taught in the first year to help you communicate with patients during clinical rotations.
                  </div>
                </details>
              </div>
            </section>

          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-1">
            <div className="bg-primary-900 rounded-2xl p-6 shadow-xl sticky top-24 text-white">
              <h3 className="font-serif text-xl font-bold mb-2">Apply for {country.name}</h3>
              <p className="text-sm text-slate-300 mb-6">Secure your seat before the intake closes. 100% Visa success rate.</p>
              
              <form className="space-y-4">
                <input type="text" placeholder="Student Name" required className="w-full bg-primary-800 border border-primary-700 text-white placeholder:text-slate-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500" />
                <input type="tel" placeholder="Phone Number" required className="w-full bg-primary-800 border border-primary-700 text-white placeholder:text-slate-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500" />
                <input type="text" placeholder="NEET Score" required className="w-full bg-primary-800 border border-primary-700 text-white placeholder:text-slate-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500" />
                <select className="w-full bg-primary-800 border border-primary-700 text-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500">
                  <option value="">Preferred University</option>
                  {country.topUniversities.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
                <button type="button" className="w-full bg-accent-500 text-primary-900 font-bold py-4 rounded-lg hover:bg-white transition-colors mt-2 shadow-md flex justify-center items-center gap-2">
                  Submit Application <Send className="w-4 h-4" />
                </button>
              </form>
              <p className="text-xs text-center text-slate-400 mt-4">Safe & Secure processing by Amets Educare.</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
