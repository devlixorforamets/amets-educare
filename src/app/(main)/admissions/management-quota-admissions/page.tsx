import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Building, ShieldCheck, GraduationCap, Banknote, HelpCircle, ArrowRight } from 'lucide-react';
import Script from 'next/script';
import { generateBreadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: "Management Quota Admissions 2026: Direct Admission Support | Amets Educare",
  description: "Secure guaranteed direct admission through Management Quota for MBBS, BDS, B.Tech, and MBA in top private colleges in India. Learn about fees and eligibility.",
};

const BREADCRUMBS = [
  { name: 'Home', url: 'https://ametseducare.com' },
  { name: 'Admissions', url: 'https://ametseducare.com/admissions' },
  { name: 'Management Quota Admissions', url: 'https://ametseducare.com/admissions/management-quota-admissions' }
];

export default function ManagementQuotaPage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(BREADCRUMBS)) }} />

      {/* Hero Section */}
      <section className="bg-primary-950 pt-32 pb-20 text-white relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container-premium relative z-10">
          <div className="max-w-3xl">
            <span className="bg-accent-500 text-primary-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6 inline-block">Direct Admission Pathway</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Management Quota Admissions 2026
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-light mb-8 leading-relaxed">
              Didn't score high enough in entrance exams? Secure a guaranteed seat in top private medical, engineering, and management colleges across India through the legally approved institutional quota.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#apply" className="bg-accent-500 text-primary-900 font-bold px-8 py-4 rounded-full hover:bg-white hover:text-primary-900 transition-colors shadow-lg">
                Check Seat Availability
              </a>
              <Link href="/courses" className="bg-transparent border border-slate-600 text-white font-bold px-8 py-4 rounded-full hover:bg-primary-800 transition-colors">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container-premium mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* 1. What is Management Quota */}
            <section className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-primary-900">
              <h2 className="text-3xl font-bold flex items-center border-b border-slate-200 pb-4">
                What is Management Quota?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mt-6">
                Management Quota refers to a specific percentage of seats (usually 15% to 20%) in private and deemed universities reserved for the management to allocate. This system is officially recognized by government bodies including the NMC, AICTE, and UGC.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                It provides an alternative, legal pathway for students who possess the financial capability but missed the rigorous merit cutoffs by a slight margin. While the tuition fees are comparatively higher than merit seats, the degree, classes, and placements remain 100% identical.
              </p>
            </section>

            {/* 2. Available Courses */}
            <section>
              <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6 border-b border-slate-200 pb-4">Courses Available via Direct Admission</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/courses/mbbs" className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-accent-500 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4"><ShieldCheck className="w-6 h-6"/></div>
                  <h3 className="font-bold text-xl text-primary-900 mb-2">MBBS Direct Admission</h3>
                  <p className="text-sm text-slate-500 mb-4">Secure management seats in top Deemed & Private medical colleges. NEET qualifying score mandatory.</p>
                  <span className="text-accent-600 font-bold text-sm flex items-center group-hover:text-primary-900 transition-colors">View Details <ArrowRight className="w-4 h-4 ml-1" /></span>
                </Link>
                <Link href="/courses/btech" className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-accent-500 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4"><Building className="w-6 h-6"/></div>
                  <h3 className="font-bold text-xl text-primary-900 mb-2">B.Tech Direct Admission</h3>
                  <p className="text-sm text-slate-500 mb-4">Admissions in top institutes like VIT, SRM, RVCE, BMSCE without relying on JEE Main/CET scores.</p>
                  <span className="text-accent-600 font-bold text-sm flex items-center group-hover:text-primary-900 transition-colors">View Details <ArrowRight className="w-4 h-4 ml-1" /></span>
                </Link>
                <Link href="/courses/mba" className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-accent-500 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-4"><GraduationCap className="w-6 h-6"/></div>
                  <h3 className="font-bold text-xl text-primary-900 mb-2">MBA Direct Admission</h3>
                  <p className="text-sm text-slate-500 mb-4">Admissions in premier B-Schools. Ideal for students with poor CAT/MAT percentiles but strong profiles.</p>
                  <span className="text-accent-600 font-bold text-sm flex items-center group-hover:text-primary-900 transition-colors">View Details <ArrowRight className="w-4 h-4 ml-1" /></span>
                </Link>
                <Link href="/courses/bds" className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-accent-500 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4"><ShieldCheck className="w-6 h-6"/></div>
                  <h3 className="font-bold text-xl text-primary-900 mb-2">BDS Direct Admission</h3>
                  <p className="text-sm text-slate-500 mb-4">Guaranteed seats in the best dental colleges across Maharashtra, Karnataka, and Delhi NCR.</p>
                  <span className="text-accent-600 font-bold text-sm flex items-center group-hover:text-primary-900 transition-colors">View Details <ArrowRight className="w-4 h-4 ml-1" /></span>
                </Link>
              </div>
            </section>

            {/* 3. Fee Comparison Table */}
            <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6 flex items-center border-b border-slate-100 pb-4">
                <Banknote className="w-6 h-6 mr-2 text-accent-500" /> Fee Structure Overview
              </h2>
              <div className="overflow-x-auto hide-scrollbar -mx-8 px-8">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-slate-50 border-y border-slate-200">
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase">Course</th>
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase">Avg Merit Fee (Per Year)</th>
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase">Avg Management Fee (Per Year)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 font-semibold text-slate-700">MBBS</td>
                      <td className="py-4 px-4 text-slate-600">₹8 Lakhs - ₹12 Lakhs</td>
                      <td className="py-4 px-4 font-bold text-primary-900">₹18 Lakhs - ₹25 Lakhs</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 font-semibold text-slate-700">B.Tech (CSE)</td>
                      <td className="py-4 px-4 text-slate-600">₹1 Lakh - ₹2 Lakhs</td>
                      <td className="py-4 px-4 font-bold text-primary-900">₹3 Lakhs - ₹6 Lakhs</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-slate-700">MBA</td>
                      <td className="py-4 px-4 text-slate-600">₹4 Lakhs - ₹8 Lakhs</td>
                      <td className="py-4 px-4 font-bold text-primary-900">₹8 Lakhs - ₹15 Lakhs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400 mt-4 italic">* Exact fees vary heavily depending on the university's ranking, location, and the specific branch chosen. Capitation fees (if any) are evaluated directly with the college.</p>
            </section>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1" id="apply">
            {/* Sticky Lead Form */}
            <div className="bg-primary-900 rounded-2xl p-6 shadow-xl sticky top-24 text-white">
              <h3 className="font-serif text-2xl font-bold mb-2 text-accent-500">Apply for Management Quota</h3>
              <p className="text-sm text-slate-300 mb-6">Management seats are extremely limited and fill up months before standard counselling begins. Act fast.</p>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" required className="w-full bg-primary-800 border border-primary-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500 text-white placeholder:text-slate-400" />
                <input type="tel" placeholder="Phone Number" required className="w-full bg-primary-800 border border-primary-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500 text-white placeholder:text-slate-400" />
                <select className="w-full bg-primary-800 border border-primary-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500 text-slate-300">
                  <option value="">Select Target Course</option>
                  <option value="mbbs">MBBS</option>
                  <option value="bds">BDS</option>
                  <option value="btech">B.Tech / Engineering</option>
                  <option value="mba">MBA / PGDM</option>
                  <option value="law">LLB / BA LLB</option>
                </select>
                <input type="text" placeholder="Desired College (Optional)" className="w-full bg-primary-800 border border-primary-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500 text-white placeholder:text-slate-400" />
                <div className="pt-2">
                  <button type="button" className="w-full bg-accent-500 text-primary-900 font-bold py-4 rounded-lg hover:bg-white transition-colors shadow-md text-lg">
                    Request Call Back
                  </button>
                </div>
              </form>
              
              <div className="mt-6 flex items-start bg-primary-800/50 p-4 rounded-xl border border-primary-700/50">
                <HelpCircle className="w-5 h-5 text-accent-500 mr-3 shrink-0" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  Amets Educare provides 100% transparent and legal admission assistance directly with college administration. Beware of fraudulent agents promising seats via backdoors.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
