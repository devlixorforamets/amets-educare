import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Globe, Plane, FileText, CheckCircle2, ChevronRight, AlertTriangle, ShieldCheck, GraduationCap, MapPin, Send, Building2 } from 'lucide-react';
import { abroadCountries } from '@/lib/data';
import Script from 'next/script';
import { generateBreadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: "MBBS Abroad 2026 — Top Medical Universities | Amets Educare",
  description: "Study MBBS abroad in NMC-approved universities. Compare fees, duration, and admission processes for Russia, Philippines, Georgia, Kazakhstan & more.",
};

export default function StudyAbroadHubPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ametseducare.com' },
    { name: 'Study Abroad', url: 'https://ametseducare.com/study-abroad' }
  ];

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      <Script id="schema-breadcrumb-abroad" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />
      
      {/* Hero Section */}
      <section className="bg-primary-900 pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container-premium relative z-10 text-center max-w-4xl mx-auto px-4">
          <span className="bg-accent-500 text-primary-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6 inline-block">
            Global Opportunities
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            MBBS Abroad {new Date().getFullYear() + 1} — Top Medical Universities for Indian Students
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light mb-10 max-w-3xl mx-auto">
            Direct admission to NMC/WHO-approved universities in Russia, Philippines, Georgia, Kazakhstan & more. High FMGE pass rates at a fraction of Indian private college fees.
          </p>
          <a href="#counselling" className="inline-flex items-center gap-2 bg-accent-500 text-primary-900 font-bold px-8 py-4 rounded-full hover:bg-accent-400 hover:shadow-gold transition-all">
            <Globe className="w-5 h-5" /> Evaluate My Profile Free
          </a>
        </div>
      </section>

      <div className="container-premium py-16 space-y-24">
        
        {/* 1. Country Cards Grid */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">Popular Study Destinations</h2>
            <p className="text-slate-600">Explore the most trusted countries chosen by thousands of Indian medical aspirants every year.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {abroadCountries.map((country, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:border-accent-500 transition-all group flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{country.flag}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-primary-900 group-hover:text-accent-600 transition-colors">{country.name}</h3>
                    <p className="text-sm text-slate-500">{country.capital}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <span className="text-sm text-slate-500">Starting Fee</span>
                    <span className="font-bold text-primary-900">{country.startingFee}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <span className="text-sm text-slate-500">Duration</span>
                    <span className="font-semibold text-slate-700">{country.duration}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <span className="text-sm text-slate-500">FMGE Pass Rate</span>
                    <span className="font-semibold text-slate-700">{country.fmgePassRate}</span>
                  </div>
                </div>

                <Link href={`/study-abroad/${country.slug}`} className="w-full bg-slate-50 group-hover:bg-primary-900 text-primary-900 group-hover:text-white font-semibold py-3 rounded-xl flex items-center justify-center transition-colors text-sm border border-slate-200 group-hover:border-primary-900">
                  Explore Universities <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Why MBBS Abroad (Comparison Table) */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 md:p-12 text-center bg-primary-950 text-white">
            <h2 className="font-serif text-3xl font-bold mb-4">India vs Abroad: Why Look Beyond?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">Compare the realities of securing a medical seat in India versus choosing an international pathway.</p>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="py-5 px-6 font-bold text-primary-900 uppercase text-sm w-1/3">Parameter</th>
                  <th className="py-5 px-6 font-bold text-primary-900 uppercase text-sm w-1/3 border-l border-white">Private Colleges (India)</th>
                  <th className="py-5 px-6 font-bold text-primary-900 uppercase text-sm w-1/3 border-l border-white bg-accent-50 text-accent-800">Study Abroad</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-6 font-semibold text-slate-700">Total Course Cost</td>
                  <td className="py-4 px-6 text-slate-600 border-l border-slate-100">₹60 Lakhs - ₹1.5 Crore</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold border-l border-slate-100 bg-emerald-50/30">₹15 Lakhs - ₹40 Lakhs</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-6 font-semibold text-slate-700">NEET Requirement</td>
                  <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Very High Score (500+)</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold border-l border-slate-100 bg-emerald-50/30">Only Qualifying Marks (130-150)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-6 font-semibold text-slate-700">Donation / Capitation Fee</td>
                  <td className="py-4 px-6 text-slate-600 border-l border-slate-100">Often Demanded</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold border-l border-slate-100 bg-emerald-50/30">Zero Donation</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-6 font-semibold text-slate-700">Medium of Instruction</td>
                  <td className="py-4 px-6 text-slate-600 border-l border-slate-100">English</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold border-l border-slate-100 bg-emerald-50/30">100% English</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-700">Global Recognition</td>
                  <td className="py-4 px-6 text-slate-600 border-l border-slate-100">NMC Approved</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold border-l border-slate-100 bg-emerald-50/30">NMC, WHO, ECFMG (USA) Approved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Admission Process */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-500 font-bold tracking-wider uppercase text-sm mb-3 block">Seamless Transition</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900">5-Step Admission Process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-slate-200 -z-10"></div>
            {[
              { icon: FileText, title: "Counselling", desc: "Profile evaluation & country selection based on budget." },
              { icon: Building2, title: "University Selection", desc: "Choosing the right NMC-approved medical university." },
              { icon: ShieldCheck, title: "Documentation", desc: "Apostille, translation, and admission letter procurement." },
              { icon: MapPin, title: "Visa Processing", desc: "100% assistance with embassy interviews and visa stamping." },
              { icon: Plane, title: "Departure", desc: "Flight booking, foreign currency, and campus drop-off." },
            ].map((step, i) => (
              <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-sm relative group">
                <div className="w-16 h-16 mx-auto bg-primary-900 text-accent-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg border-4 border-white">
                  <step.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-primary-900 mb-2">{i+1}. {step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 4. NMC Recognition Guide */}
          <section className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-10">
            <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-serif text-2xl font-bold text-primary-900 mb-4">NMC (MCI) Guidelines Update</h3>
            <p className="text-slate-700 text-sm mb-6 leading-relaxed">
              According to the latest National Medical Commission (NMC) Gazette, students must ensure the foreign university meets strict criteria:
            </p>
            <ul className="space-y-3 mb-6 text-sm text-slate-700">
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Minimum course duration of 54 months.</li>
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Mandatory 12 months clinical internship in the same institution.</li>
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> English as the official medium of instruction.</li>
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Registration to practice medicine in the host country must be granted.</li>
            </ul>
            <div className="flex items-start bg-blue-100/50 p-4 rounded-xl">
              <AlertTriangle className="w-5 h-5 text-amber-600 mr-3 shrink-0" />
              <p className="text-xs text-slate-600">Amets Educare exclusively partners with universities that 100% comply with all new NMC regulations, ensuring your degree is valid in India.</p>
            </div>
          </section>

          {/* 5. FMGE / NEXT Preparation */}
          <section className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 md:p-10">
            <GraduationCap className="w-10 h-10 text-emerald-600 mb-4" />
            <h3 className="font-serif text-2xl font-bold text-primary-900 mb-4">FMGE / NExT Preparation</h3>
            <p className="text-slate-700 text-sm mb-6 leading-relaxed">
              Upon returning to India, foreign medical graduates must clear the screening test to acquire a practicing license. Starting soon, this will be replaced by the NExT exam (common for Indian and Foreign graduates).
            </p>
            <p className="text-slate-700 text-sm mb-6 leading-relaxed">
              Our partner universities recognize the importance of this exam and provide:
            </p>
            <ul className="space-y-3 mb-6 text-sm text-slate-700">
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Indian professors flown in for specialized MCI coaching.</li>
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Curriculum synchronized with Indian medical standards.</li>
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> High historical passing ratios for our selected institutions.</li>
            </ul>
            <Link href="/admissions" className="text-emerald-700 font-bold text-sm hover:underline flex items-center">
              View Highest FMGE Passing Universities <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </section>
        </div>

        {/* 6. CTA Form */}
        <section id="counselling" className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-5/12 bg-primary-900 p-10 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
            <h2 className="font-serif text-3xl font-bold mb-4 relative z-10">Get Free Abroad Counselling</h2>
            <p className="text-slate-300 mb-8 relative z-10 text-sm leading-relaxed">
              Not sure which country fits your budget and NEET score? Fill out the form and Reena Thakur's expert team will provide a personalized roadmap.
            </p>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-center text-sm"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-3" /> Zero Consultation Fee</li>
              <li className="flex items-center text-sm"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-3" /> Transparent Pricing structure</li>
              <li className="flex items-center text-sm"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-3" /> Guaranteed Admission to Top Varsities</li>
            </ul>
          </div>
          <div className="lg:w-7/12 p-10 md:p-12 bg-slate-50">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                <input type="text" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">NEET Score (Expected/Actual)</label>
                <input type="number" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Preferred Country</label>
                <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all text-slate-700">
                  <option value="">I need guidance choosing</option>
                  {abroadCountries.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                </select>
              </div>
              <div className="md:col-span-2 mt-2">
                <button type="submit" className="w-full bg-primary-900 text-white hover:bg-accent-500 hover:text-primary-900 font-bold py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
                  Submit Request <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </section>

      </div>
    </main>
  );
}
