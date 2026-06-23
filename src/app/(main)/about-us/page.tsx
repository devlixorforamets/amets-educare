import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { generateOrganizationSchema, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schemas';
import { Award, ShieldCheck, Trophy, Users, Star, Target, MapPin, CheckCircle2, Building, Briefcase, Globe2, TrendingUp, HeartHandshake, Compass, Rocket, Gem, CheckCircle, GraduationCap, PhoneCall } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Amets Educare | Premier Educational Consultancy in India',
  description: 'Learn all about Amets Educare Private Limited, India’s most powerful and trusted educational consultancy. We guide thousands to top medical and engineering universities globally.',
  keywords: ['About Amets Educare', 'Amets Educare Private Limited', 'Educational Consultancy in New Delhi', 'Study Abroad Consultants', 'MBBS Admission Guidance', 'Reena Thakur', 'Mukesh Sharma', 'Top Education Consultants in India'],
  openGraph: {
    title: 'About Amets Educare | India’s Leading Educational Consultancy',
    description: 'Discover the legacy of Amets Educare. With thousands of successful admissions, we are a powerhouse in global educational consulting.',
    url: 'https://ametseducare.com/about-us',
    siteName: 'Amets Educare',
    images: [
      {
        url: '/images/hero_success.png',
        width: 1200,
        height: 630,
        alt: 'About Amets Educare - Global Team',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

const AWARDS = [
  {
    icon: Trophy,
    title: "Best Educational Consultancy",
    subtitle: "Excellence Awards 2024",
    desc: "A consecutive winner for our unparalleled contribution to medical and engineering admissions."
  },
  {
    icon: ShieldCheck,
    title: "Trust & Integrity Shield",
    subtitle: "Global Education Council",
    desc: "Awarded for maintaining 100% transparency and ethical standards in the highly competitive industry."
  },
  {
    icon: Star,
    title: "Excellence in Admissions",
    subtitle: "International Healthcare Summit",
    desc: "Honored globally for guiding over 10,000+ students into premier, WHO-recognized institutions."
  },
  {
    icon: TrendingUp,
    title: "Fastest Growing Enterprise",
    subtitle: "National Business Review 2022",
    desc: "Acknowledged as a dominant force and one of the fastest-scaling private educational organizations."
  }
];

const STATS = [
  { label: "Students Counselled", value: "15,000+", icon: Users },
  { label: "University Partners", value: "500+", icon: Building },
  { label: "Countries Covered", value: "35+", icon: Globe2 },
  { label: "Success Rate", value: "98.9%", icon: Target },
];

const CORE_VALUES = [
  {
    title: "Unshakable Integrity 🛡️",
    desc: "We operate with absolute transparency. No hidden fees, no false promises—just honest, data-backed guidance that protects your future.",
    icon: ShieldCheck
  },
  {
    title: "Relentless Excellence 🌟",
    desc: "Good is never enough. We strive to place our students in the top 1% of global institutions, ensuring world-class facilities and education.",
    icon: Gem
  },
  {
    title: "Deep Empathy 🤝",
    desc: "We treat every student's dream as our own. Our counsellors provide emotional and psychological support throughout the stressful admission journey.",
    icon: HeartHandshake
  }
];

const ADVANTAGES = [
  {
    title: "100% Admission Guarantee 🎯",
    desc: "Through our vast network and precise profiling, we secure guaranteed placements for eligible candidates.",
    icon: CheckCircle
  },
  {
    title: "End-to-End Support 🚀",
    desc: "From profile building and visa processing to flight bookings and hostel accommodations—we do it all.",
    icon: Rocket
  },
  {
    title: "Global Scholarships 💰",
    desc: "Our financial experts help you secure massive scholarships and easy educational loans to fund your dreams.",
    icon: Award
  },
  {
    title: "Post-Arrival Assistance 🌍",
    desc: "Our local coordinators in 35+ countries ensure you settle in safely, providing a home away from home.",
    icon: Compass
  }
];

export default function AboutUsPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ametseducare.com' },
    { name: 'About Amets Educare', url: 'https://ametseducare.com/about-us' }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-slate-50">
      
      {/* JSON-LD Schemas */}
      <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }} />
      <Script id="schema-local" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }} />
      <Script id="schema-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-36 lg:pt-60 lg:pb-56 bg-primary-950 text-white overflow-hidden border-b-4 border-accent-500">
        <div className="absolute inset-0 z-0">
          {/* SEO Optimised Eye-catchy image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 to-transparent"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-[150px] mix-blend-screen translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container-premium relative z-10 text-left max-w-6xl mx-auto flex flex-col md:items-start items-center md:text-left text-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
            <span className="text-accent-400 font-bold uppercase tracking-widest text-xs md:text-sm bg-primary-900/80 px-4 py-2 rounded-full border border-accent-500/30 shadow-2xl backdrop-blur-md flex items-center gap-2">
              <Star className="w-4 h-4 text-accent-500 fill-accent-500" /> Top Rated Educational Consultancy
            </span>
            <span className="text-white font-bold uppercase tracking-widest text-xs md:text-sm bg-white/10 px-4 py-2 rounded-full border border-white/20 shadow-2xl backdrop-blur-md flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-400" /> Govt. Approved & NMC Recognized Partners
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 drop-shadow-2xl">
            Empowering Your Global <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500 drop-shadow-lg">Medical & Engineering</span> Careers
          </h1>
          
          <h2 className="text-slate-200 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mb-10 drop-shadow-md">
            Amets Educare is India's premier study abroad consultancy. With a 100% transparent admission process, we have successfully guided over 15,000 students to world-class MBBS and Engineering universities across 35+ countries. Let us build your future, together.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link href="/contact-us" className="w-full sm:w-auto bg-accent-500 text-primary-950 font-black uppercase tracking-widest text-sm px-10 py-4 rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2">
              <PhoneCall className="w-4 h-4" /> Get Expert Guidance
            </Link>
            <Link href="/colleges-universities" className="w-full sm:w-auto bg-primary-800 text-white border border-primary-700 font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-full hover:bg-primary-700 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              <Globe2 className="w-4 h-4" /> Explore Universities
            </Link>
          </div>
        </div>
      </section>

      {/* Massive Stats Bar */}
      <section className="relative z-20 -mt-16 mb-16 px-4">
        <div className="container-premium max-w-6xl">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            {STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center px-4 hover:-translate-y-1 transition-transform duration-300">
                  <Icon className="w-8 h-8 mx-auto text-accent-500 mb-4" />
                  <div className="text-3xl md:text-4xl font-extrabold text-primary-900 mb-2">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-premium max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-accent-600 font-bold tracking-wider uppercase text-sm mb-3 block">🏢 Corporate Identity</span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-900 leading-tight mb-6">
                  An Industry Titan <br/>Since 2018
                </h2>
                <div className="w-20 h-1.5 bg-accent-500 mb-8 rounded-full"></div>
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                Registered officially as <strong>AMETS EDUCARE PRIVATE LIMITED</strong> (CIN: <span className="font-mono text-primary-900 bg-primary-50 px-2 py-0.5 rounded border border-slate-200">U80901DL2018PTC342686</span>), we were incorporated on <strong>06 Dec 2018</strong>. As a formidable Private Non-Government Company registered in Delhi, we have rapidly scaled to become a dominant force in the global education landscape.
              </p>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                Our cutting-edge infrastructure, vast network of partner universities, and an elite team of expert counsellors allow us to process thousands of applications annually with absolute surgical precision. We are the trusted bridge connecting ambitious students to the world's most prestigious medical and engineering institutions. 🏥⚙️
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <Globe2 className="w-8 h-8 text-accent-600 mb-4" />
                  <h4 className="font-bold text-primary-900 mb-2 text-lg">Global Reach 🌍</h4>
                  <p className="text-slate-600 text-sm">Direct tie-ups with elite universities across Europe, Asia, and the Americas.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-8 h-8 text-accent-600 mb-4" />
                  <h4 className="font-bold text-primary-900 mb-2 text-lg">Ironclad Integrity ⚖️</h4>
                  <p className="text-slate-600 text-sm">A highly governed and transparent process ensuring zero friction for parents and students.</p>
                </div>
              </div>
            </div>

            {/* Official Credentials Card */}
            <div className="lg:col-span-5">
              <div className="bg-primary-950 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden border border-primary-800">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-white/10 pb-6 relative z-10">
                  <ShieldCheck className="w-8 h-8 text-accent-500" /> Official Corporate Profile
                </h3>
                
                <ul className="space-y-8 relative z-10">
                  <li className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Building className="w-5 h-5 text-accent-400" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400 uppercase tracking-widest font-bold mb-1.5">Registered Entity</span>
                      <span className="font-bold text-lg text-white">AMETS EDUCARE PRIVATE LIMITED</span>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Briefcase className="w-5 h-5 text-accent-400" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400 uppercase tracking-widest font-bold mb-1.5">Corporate Identity (CIN)</span>
                      <span className="font-mono text-accent-300 bg-black/30 px-3 py-1.5 rounded-md text-sm border border-white/5 tracking-wider font-bold">U80901DL2018PTC342686</span>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <MapPin className="w-5 h-5 text-accent-400" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400 uppercase tracking-widest font-bold mb-1.5">Office Address</span>
                      <span className="font-medium text-slate-300 text-sm leading-loose block">
                        108, Vishwasadan Building, Near Inox Cinemas,<br/>
                        Janakpuri District Center, Janakpuri,<br />
                        Delhi, 110058
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: The Amets Advantage (Why Choose Us) */}
      <section className="section-padding bg-white relative">
        <div className="container-premium max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-600 font-bold tracking-wider uppercase text-sm mb-3 block">🔥 The Amets Advantage</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-900 leading-tight mb-6">
              Why We Are #1 In India
            </h2>
            <p className="text-slate-600 text-lg">
              We don't leave anything to chance. When you sign up with Amets Educare, you unlock an elite suite of services designed to guarantee your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ADVANTAGES.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-accent-300 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:bg-accent-50 transition-all duration-300">
                    <Icon className="w-8 h-8 text-accent-600" />
                  </div>
                  <h3 className="font-bold text-xl text-primary-900 mb-3">{adv.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{adv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Our Core Values */}
      <section className="section-padding bg-primary-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container-premium relative z-10 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent-400 font-bold tracking-wider uppercase text-sm mb-3 block">💎 Our Philosophy</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                The Core Values That Drive Us
              </h2>
              <div className="w-20 h-1.5 bg-accent-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-primary-900/50 backdrop-blur-sm border border-primary-800 rounded-2xl p-8 hover:bg-primary-800 hover:-translate-y-2 transition-all duration-300">
                  <Icon className="w-12 h-12 text-accent-400 mb-6" />
                  <h3 className="font-bold text-2xl text-white mb-4">{val.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white section-padding border-y border-slate-100 relative">
        <div className="absolute left-0 top-0 w-1/4 h-full bg-slate-50 -skew-x-12 -translate-x-20 z-0 hidden lg:block"></div>
        <div className="container-premium max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-600 font-bold tracking-wider uppercase text-sm mb-3 block">👑 Board of Directors</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-900 leading-tight">
              Visionary Leadership
            </h2>
            <div className="w-20 h-1.5 bg-accent-500 mx-auto mt-6 mb-6 rounded-full"></div>
            <p className="text-slate-600 text-lg leading-relaxed">
              At the helm of our massive operation are industry veterans whose strategic foresight continues to disrupt and elevate the global education sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Director 1 */}
            <div className="group bg-white border border-slate-200 rounded-3xl p-10 hover:shadow-2xl hover:bg-primary-950 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="w-32 h-32 rounded-full bg-primary-50 overflow-hidden mb-8 border-4 border-slate-100 shadow-xl group-hover:scale-110 group-hover:border-accent-500 transition-all duration-500 relative z-10 flex-shrink-0">
                <Image src="/images/reena.jpg" alt="Reena Thakur" width={128} height={128} className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-primary-900 mb-2 group-hover:text-white transition-colors duration-500 relative z-10">Reena Thakur</h3>
              <p className="text-accent-600 font-bold text-sm uppercase tracking-widest mb-6 relative z-10">Founder & Director</p>
              <div className="inline-flex items-center gap-2 bg-slate-50 group-hover:bg-primary-900 border border-slate-200 group-hover:border-primary-700 px-5 py-2 rounded-lg text-sm font-bold text-slate-700 group-hover:text-accent-400 shadow-sm font-mono mb-6 transition-colors duration-500 relative z-10 tracking-widest">
                <ShieldCheck className="w-4 h-4" /> DIN: 08296797
              </div>
              <p className="text-slate-600 group-hover:text-slate-300 text-base leading-relaxed transition-colors duration-500 relative z-10 italic">
                "Education is not just about placing a student; it's about securing a family's legacy. We command our expansion with uncompromising ethical standards."
              </p>
            </div>

            {/* Director 2 */}
            <div className="group bg-white border border-slate-200 rounded-3xl p-10 hover:shadow-2xl hover:bg-primary-950 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="w-32 h-32 rounded-full bg-primary-50 overflow-hidden mb-8 border-4 border-slate-100 shadow-xl group-hover:scale-110 group-hover:border-accent-500 transition-all duration-500 relative z-10 flex-shrink-0">
                <Image src="/images/mukesh.jpg" alt="Mukesh Sharma" width={128} height={128} className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-primary-900 mb-2 group-hover:text-white transition-colors duration-500 relative z-10">Mukesh Sharma</h3>
              <p className="text-accent-600 font-bold text-sm uppercase tracking-widest mb-6 relative z-10">Executive Director</p>
              <div className="inline-flex items-center gap-2 bg-slate-50 group-hover:bg-primary-900 border border-slate-200 group-hover:border-primary-700 px-5 py-2 rounded-lg text-sm font-bold text-slate-700 group-hover:text-accent-400 shadow-sm font-mono mb-6 transition-colors duration-500 relative z-10 tracking-widest">
                <ShieldCheck className="w-4 h-4" /> DIN: 10627206
              </div>
              <p className="text-slate-600 group-hover:text-slate-300 text-base leading-relaxed transition-colors duration-500 relative z-10 italic">
                "Our phenomenal 98.9% success rate isn't luck—it's the result of powerful global alliances, massive logistical frameworks, and brilliant operational acumen."
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Awards & Recognition */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary-50 -skew-x-12 translate-x-20 z-0"></div>
        <div className="container-premium relative z-10 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent-600 font-bold tracking-wider uppercase text-sm mb-3 block">🥇 Excellence Recognized</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-900 leading-tight mb-6">
                A Legacy of Awards & <br/>Industry Dominance
              </h2>
              <p className="text-slate-600 text-lg">
                Our relentless drive to dominate the educational consulting space has not gone unnoticed. We have been consistently decorated by the world's most prestigious educational panels. 🌟
              </p>
            </div>
            <div className="hidden md:block">
              <Trophy className="w-32 h-32 text-slate-200" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AWARDS.map((award, idx) => {
              const Icon = award.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent-50 rounded-bl-full -z-0 group-hover:bg-accent-500/10 transition-colors"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-900 to-primary-800 rounded-xl flex items-center justify-center mb-8 shadow-md relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-accent-400" />
                  </div>
                  <h3 className="font-bold text-xl text-primary-900 mb-3 leading-tight relative z-10">{award.title}</h3>
                  <p className="text-xs text-accent-600 font-extrabold uppercase tracking-widest mb-4 relative z-10">{award.subtitle}</p>
                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">{award.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-primary-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
        <div className="container-premium relative z-10 max-w-4xl mx-auto px-4">
          <span className="text-accent-400 font-bold uppercase tracking-widest text-sm mb-4 block">🚀 Take The Next Step</span>
          <h2 className="font-serif text-4xl md:text-6xl font-extrabold text-white mb-8">
            Leverage The Power Of <br/><span className="text-accent-400">Amets Educare</span>
          </h2>
          <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Don't leave your future to chance. Partner with India's most powerful educational consultancy and secure your admission today. 🎓
          </p>
          <a href="/contact-us" className="inline-block bg-accent-500 text-primary-950 font-black uppercase tracking-widest text-sm px-12 py-5 rounded-full hover:bg-white transition-all shadow-[0_0_40px_rgba(250,204,21,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105">
            Schedule a Strategy Session
          </a>
        </div>
      </section>

    </main>
  );
}
