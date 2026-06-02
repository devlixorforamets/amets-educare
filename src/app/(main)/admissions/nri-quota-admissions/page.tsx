import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Plane, CheckCircle2, Globe, Building2, BadgeCheck, AlertCircle, PhoneCall } from 'lucide-react';
import Script from 'next/script';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: "NRI Quota Admissions 2026: Eligibility, Fees & Process | Amets Educare",
  description: "Complete guidance for NRI/PIO/OCI students and NRI-sponsored candidates for MBBS and B.Tech admissions in India. Understand documentation and fee structures.",
};

const BREADCRUMBS = [
  { name: 'Home', url: 'https://ametseducare.com' },
  { name: 'Admissions', url: 'https://ametseducare.com/admissions' },
  { name: 'NRI Quota Admissions', url: 'https://ametseducare.com/admissions/nri-quota-admissions' }
];

const FAQS = [
  { question: "Who qualifies as an NRI sponsor?", answer: "Blood relatives such as Parents, Grandparents, Real Brothers/Sisters, and Real Uncles/Aunts residing abroad can act as NRI sponsors subject to strict document verification (embassy certificates)." },
  { question: "Is NEET required for NRI seats in MBBS?", answer: "Yes, clearing NEET UG with minimum qualifying marks is strictly mandatory for all medical admissions in India, including the NRI quota." },
  { question: "Do Govt Colleges have NRI quota?", answer: "A few states (like Rajasthan, Himachal Pradesh, and Punjab) do offer NRI quota seats in Government Medical Colleges, but the fees are significantly higher than general category seats." },
  { question: "What is the fee structure for NRI MBBS seats?", answer: "In top Deemed Universities, the NRI fee usually ranges from $35,000 to $50,000 per annum, paid strictly in foreign currency from an NRE/NRO account." }
];

export default function NRIQuotaPage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(BREADCRUMBS)) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      {/* Hero Section */}
      <section className="bg-primary-900 pt-32 pb-20 text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')]"></div>
        <div className="container-premium relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Plane className="w-16 h-16 text-accent-500 mx-auto mb-6 opacity-80" />
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              NRI Quota Admissions 2026
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
              Expert documentation and counselling guidance for Non-Resident Indians, PIOs, OCIs, and NRI-Sponsored candidates seeking admission in premium Indian institutes.
            </p>
            <a href="#consultation" className="bg-accent-500 text-primary-900 font-bold px-10 py-4 rounded-full hover:bg-white transition-colors shadow-lg text-lg">
              Check Eligibility Criteria
            </a>
          </div>
        </div>
      </section>

      <div className="container-premium mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Definition */}
            <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6 flex items-center">
                <Globe className="w-8 h-8 mr-3 text-accent-500" /> What is NRI Quota?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                The Supreme Court of India has mandated that <strong>15% of the total intake</strong> in Deemed Universities and unaided private institutions be reserved under the NRI category. This ensures global Indians can access top-tier domestic education.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 mb-4">Eligible Categories:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0" /> <span className="text-slate-700"><strong>Actual NRIs:</strong> Students residing abroad or holding foreign passports.</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0" /> <span className="text-slate-700"><strong>PIO / OCI Card Holders:</strong> Persons of Indian Origin / Overseas Citizens of India.</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0" /> <span className="text-slate-700"><strong>NRI Sponsored:</strong> Indian students whose blood relatives (residing abroad) agree to sponsor their education.</span></li>
                </ul>
              </div>
            </section>

            {/* 2. Documents Required */}
            <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6 flex items-center">
                <BadgeCheck className="w-8 h-8 mr-3 text-accent-500" /> Critical Document Checklist
              </h2>
              <p className="text-sm text-slate-500 mb-6 border-b border-slate-100 pb-4">
                The rejection rate for NRI quota applications is high due to improper documentation. Ensure you have these verified documents ready:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
                <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-accent-500 mr-3"></div> Valid Passport & Visa of Sponsor
                </div>
                <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-accent-500 mr-3"></div> Embassy Certificate / Consulate Letter
                </div>
                <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-accent-500 mr-3"></div> Relationship Affidavit (Court Stamped)
                </div>
                <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-accent-500 mr-3"></div> Sponsor's NRE/NRO Bank Statements
                </div>
                <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-accent-500 mr-3"></div> Candidate's NEET Admit & Score Card
                </div>
                <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-accent-500 mr-3"></div> Equivalence Certificate (for foreign boards)
                </div>
              </div>
              <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start">
                <AlertCircle className="w-5 h-5 text-red-500 mr-3 shrink-0" />
                <p className="text-xs text-red-800">
                  <strong>Warning:</strong> The Embassy Certificate usually takes weeks to process. Do not wait until the counselling dates are announced to initiate this process.
                </p>
              </div>
            </section>

            {/* FAQs */}
            <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {FAQS.map((faq, i) => (
                  <details key={i} className="group border border-slate-200 rounded-xl [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-primary-900 bg-slate-50 rounded-xl">
                      {faq.question}
                      <span className="relative ml-1.5 h-5 w-5 shrink-0">
                        <div className="absolute inset-0 w-full h-full bg-accent-500 rounded-full flex items-center justify-center text-primary-900 group-open:rotate-180 transition-transform">↓</div>
                      </span>
                    </summary>
                    <div className="px-5 pb-5 pt-3 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4" id="consultation">
            
            <div className="bg-primary-900 rounded-2xl p-8 shadow-2xl sticky top-24 text-white">
              <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-accent-500/30">
                <PhoneCall className="w-6 h-6 text-primary-900" />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-3">Check Your Eligibility</h3>
              <p className="text-sm text-slate-300 mb-8 leading-relaxed">
                Connect with our specialized NRI admission division. We evaluate sponsor documents and assist with complex banking requirements.
              </p>
              
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Candidate Name" required className="w-full bg-white border-0 text-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent-500 transition-all" />
                </div>
                <div className="flex gap-2">
                  <select className="w-1/3 bg-white border-0 text-slate-800 rounded-xl px-2 py-3.5 focus:ring-2 focus:ring-accent-500 transition-all text-sm">
                    <option>+91 (IND)</option>
                    <option>+1 (USA)</option>
                    <option>+971 (UAE)</option>
                    <option>+44 (UK)</option>
                  </select>
                  <input type="tel" placeholder="Phone Number" required className="w-2/3 bg-white border-0 text-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent-500 transition-all" />
                </div>
                <div>
                  <select className="w-full bg-white border-0 text-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent-500 transition-all text-sm">
                    <option value="">Sponsor Relation</option>
                    <option value="parent">Parent</option>
                    <option value="sibling">Brother / Sister</option>
                    <option value="uncle_aunt">Uncle / Aunt</option>
                    <option value="grandparent">Grandparent</option>
                  </select>
                </div>
                <div className="pt-4">
                  <button type="button" className="w-full bg-accent-500 text-primary-900 font-bold py-4 rounded-xl hover:bg-accent-400 transition-colors text-lg shadow-md">
                    Request Document Review
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-primary-900 mb-4 flex items-center"><Building2 className="w-5 h-5 mr-2 text-slate-400"/> Top NRI Destinations</h4>
              <div className="space-y-3">
                <Link href="/colleges-universities/karnataka/manipal/kmc-manipal" className="block p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-sm font-semibold text-slate-700">KMC Manipal, Karnataka</Link>
                <Link href="/colleges-universities/maharashtra/pune/dy-patil-pune" className="block p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-sm font-semibold text-slate-700">Dr. D.Y. Patil, Pune</Link>
                <Link href="/colleges-universities/tamil-nadu/chennai/srm-chennai" className="block p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-sm font-semibold text-slate-700">SRM Institute, Chennai</Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
