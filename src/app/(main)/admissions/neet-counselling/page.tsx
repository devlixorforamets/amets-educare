import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, FileText, Download, CheckCircle2, ShieldCheck, ChevronRight, BarChart3, AlertCircle } from 'lucide-react';
import Script from 'next/script';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: "NEET Counselling 2026: AIQ & State Quota Guidance | Amets Educare",
  description: "Complete guide to NEET UG Counselling 2026. Get expert help for AIQ, State Quota, Deemed Universities, cutoffs, and document checklists.",
};

const BREADCRUMBS = [
  { name: 'Home', url: 'https://ametseducare.com' },
  { name: 'Admissions', url: 'https://ametseducare.com/admissions' },
  { name: 'NEET Counselling', url: 'https://ametseducare.com/admissions/neet-counselling' }
];

const FAQS = [
  { question: "What is the difference between AIQ and State Quota?", answer: "All India Quota (AIQ) comprises 15% of all government medical seats across India, open to students from any state. State Quota comprises the remaining 85% seats, reserved only for students holding domicile of that specific state." },
  { question: "Who conducts the counselling for Deemed Universities?", answer: "The Medical Counselling Committee (MCC) under DGHS conducts the centralized counselling for 100% of seats in Deemed Universities." },
  { question: "Can I participate in both AIQ and State counselling simultaneously?", answer: "Yes, you can register and participate in both counselling processes simultaneously. However, once you join a seat in round 2 of AIQ, you may be restricted from participating further in state counselling as per NMC rules." },
  { question: "Is the security deposit refundable?", answer: "Yes, the security deposit paid during MCC registration is refundable if you do not get any seat during the counselling process, or if you join the allotted seat." }
];

export default function NeetCounsellingPage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(BREADCRUMBS)) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      {/* Hero Section */}
      <section className="bg-primary-900 pt-32 pb-20 text-white relative">
        <div className="absolute inset-0 bg-blue-500/5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
        <div className="container-premium relative z-10 text-center max-w-4xl mx-auto">
          <span className="bg-accent-500 text-primary-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6 inline-block">Admission Guidance</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            NEET Counselling 2026:<br />AIQ & State Quota Guidance
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light mb-10">
            Navigate the complex medical admission process with confidence. Amets Educare provides complete handholding from registration to seat allotment for MBBS and BDS.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-accent-500 text-primary-900 font-bold px-8 py-4 rounded-full hover:bg-accent-400 transition-colors">
              Talk to a Counsellor
            </a>
            <a href="#documents" className="bg-primary-800 text-white font-bold px-8 py-4 rounded-full hover:bg-primary-700 transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" /> Download Checklist
            </a>
          </div>
        </div>
      </section>

      <div className="container-premium mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* 1. Overview */}
            <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6 flex items-center">
                <ShieldCheck className="w-6 h-6 mr-2 text-accent-500" /> Counselling Authorities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-blue-900 mb-2 text-lg">MCC (All India Quota)</h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">Conducts counselling for 15% AIQ seats in Govt Colleges, 100% in Deemed/Central Universities, ESIC, and AFMC.</p>
                  <a href="https://mcc.nic.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-bold flex items-center hover:underline">Official Portal <ChevronRight className="w-4 h-4 ml-1" /></a>
                </div>
                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                  <h3 className="font-bold text-emerald-900 mb-2 text-lg">State Authorities</h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">Conducts counselling for 85% State Quota seats in Govt Colleges and 100% seats in Private Medical Colleges.</p>
                  <Link href="/admissions/state-authorities" className="text-emerald-600 text-sm font-bold flex items-center hover:underline">View State Portals <ChevronRight className="w-4 h-4 ml-1" /></Link>
                </div>
              </div>
            </section>

            {/* 2. Important Dates */}
            <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-accent-500" /> Tentative Schedule 2026
              </h2>
              <div className="overflow-x-auto hide-scrollbar -mx-8 px-8">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-slate-50 border-y border-slate-200">
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase">Event</th>
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase">MCC (AIQ) Date</th>
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase">State Quota Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 font-semibold text-slate-700">Online Registration</td>
                      <td className="py-4 px-4 text-slate-600">3rd Week of July</td>
                      <td className="py-4 px-4 text-slate-600">4th Week of July</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 font-semibold text-slate-700">Choice Filling & Locking</td>
                      <td className="py-4 px-4 text-slate-600">Last Week of July</td>
                      <td className="py-4 px-4 text-slate-600">1st Week of Aug</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 font-semibold text-slate-700">Round 1 Allotment Result</td>
                      <td className="py-4 px-4 text-slate-600">1st Week of Aug</td>
                      <td className="py-4 px-4 text-slate-600">2nd Week of Aug</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-slate-700">Reporting to College</td>
                      <td className="py-4 px-4 text-slate-600">Mid August</td>
                      <td className="py-4 px-4 text-slate-600">Late August</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-lg flex items-start text-sm">
                <AlertCircle className="w-5 h-5 text-amber-500 mr-2 shrink-0" />
                <p className="text-amber-800">Note: These dates are tentative. Always refer to the official MCC and respective state portals for final schedules.</p>
              </div>
            </section>

            {/* 3. Document Checklist */}
            <section id="documents" className="bg-primary-900 text-white rounded-2xl p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h2 className="font-serif text-2xl font-bold mb-4 flex items-center text-accent-500">
                    <FileText className="w-6 h-6 mr-2" /> Document Checklist
                  </h2>
                  <p className="text-slate-300 text-sm mb-6">Keep original and 3 sets of self-attested photocopies ready for physical verification at the allotted college.</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 shrink-0" /> NEET Admit Card & Scorecard</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 shrink-0" /> 10th & 12th Marksheets</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 shrink-0" /> Domicile Certificate</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 shrink-0" /> Category Certificate (if applicable)</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 shrink-0" /> ID Proof (Aadhaar/PAN)</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-accent-500 mr-2 shrink-0" /> 8 Passport Size Photos</li>
                  </ul>
                </div>
                <button className="bg-white text-primary-900 font-bold px-6 py-4 rounded-xl shadow-lg hover:bg-accent-500 transition-colors shrink-0 flex items-center flex-col">
                  <Download className="w-6 h-6 mb-2" />
                  <span className="text-sm">Download PDF</span>
                </button>
              </div>
            </section>

            {/* 4. Cutoff Trends */}
            <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 mr-2 text-accent-500" /> AIQ Cutoff Trends (Govt. MBBS)
              </h2>
              <div className="overflow-x-auto hide-scrollbar -mx-8 px-8">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-slate-50 border-y border-slate-200">
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase">Category</th>
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase">2023 Cutoff</th>
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase">2024 Cutoff</th>
                      <th className="py-4 px-4 font-bold text-primary-900 text-sm uppercase">2025 Cutoff</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 font-semibold text-slate-700">General (UR)</td>
                      <td className="py-4 px-4 text-slate-600">610</td>
                      <td className="py-4 px-4 text-slate-600">618</td>
                      <td className="py-4 px-4 text-slate-600">622</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 font-semibold text-slate-700">OBC</td>
                      <td className="py-4 px-4 text-slate-600">608</td>
                      <td className="py-4 px-4 text-slate-600">615</td>
                      <td className="py-4 px-4 text-slate-600">619</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 font-semibold text-slate-700">SC</td>
                      <td className="py-4 px-4 text-slate-600">492</td>
                      <td className="py-4 px-4 text-slate-600">505</td>
                      <td className="py-4 px-4 text-slate-600">512</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-slate-700">ST</td>
                      <td className="py-4 px-4 text-slate-600">453</td>
                      <td className="py-4 px-4 text-slate-600">468</td>
                      <td className="py-4 px-4 text-slate-600">475</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQs */}
            <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">Counselling FAQs</h2>
              <div className="space-y-4">
                {FAQS.map((faq, i) => (
                  <details key={i} className="group border border-slate-200 rounded-xl [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-primary-900 bg-slate-50 rounded-xl">
                      {faq.question}
                      <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform text-accent-500" />
                    </summary>
                    <div className="px-4 pb-4 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1" id="contact">
            {/* Sticky Lead Form */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xl sticky top-24">
              <h3 className="font-serif text-2xl font-bold text-primary-900 mb-2">Need Expert Help?</h3>
              <p className="text-sm text-slate-500 mb-6">Our experts help you fill your preference list to maximize your chances of securing a seat.</p>
              
              <form className="space-y-4">
                <input type="text" placeholder="Student Name" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500" />
                <input type="tel" placeholder="Phone Number" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500" />
                <input type="number" placeholder="NEET Score" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500" />
                <input type="text" placeholder="NEET AIR (Rank)" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500" />
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-500 text-slate-600">
                  <option value="">Select Domicile State</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="up">Uttar Pradesh</option>
                  <option value="delhi">Delhi</option>
                  <option value="other">Other</option>
                </select>
                <button type="button" className="w-full bg-primary-900 text-accent-500 font-bold py-4 rounded-lg hover:bg-primary-800 transition-colors mt-2 shadow-md">
                  Get Free Profile Evaluation
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
