"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "Where is Amets Educare located?",
    answer: "We are proudly located at 108, Vishwasadan Building, Near Inox Cinemas, Janakpuri District Center, Janakpuri, Delhi, 110058."
  },
  {
    question: "What are your office hours?",
    answer: "Our counselors are available from Monday to Saturday, between 9:30 AM and 6:30 PM. We remain closed on Sundays."
  },
  {
    question: "Do you provide counseling for studying abroad?",
    answer: "Absolutely! We specialize in overseas admission guidance, particularly for MBBS in countries like Russia, Georgia, Kazakhstan, and the Philippines."
  },
  {
    question: "How can I book a counseling session?",
    answer: "Booking is easy. You can fill out the contact form above, give us a call at our helpline, or simply walk into our Janakpuri office during working hours."
  }
];

export default function ContactClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-200">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Soft Background Gradients for Premium Look */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] max-w-7xl">
            <div className="absolute top-0 -left-48 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] opacity-70"></div>
            <div className="absolute top-20 -right-48 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px] opacity-70"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-medium text-sm mb-6 shadow-sm border border-blue-100">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              <span>We're Here For You 🤝</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-slate-900 tracking-tight leading-tight">
              Let's Shape Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Future Together</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Have questions about college admissions? Our expert counselors are here to guide you every step of the way. Reach out today!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 relative z-10 -mt-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Information Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <h2 className="text-2xl font-bold mb-8 text-slate-900">Get in Touch Directly</h2>
                
                <div className="space-y-8">
                  <div className="group flex items-start space-x-5">
                    <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm border border-blue-100 group-hover:border-blue-600">
                      <MapPin size={26} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Our Headquarters</h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        108, Vishwasadan Building,<br />
                        Near Inox Cinemas, Janakpuri District Center,<br />
                        Janakpuri, Delhi, 110058
                      </p>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  <div className="group flex items-start space-x-5">
                    <div className="bg-violet-50 p-4 rounded-2xl text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-sm border border-violet-100 group-hover:border-violet-600">
                      <Phone size={26} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-1">
                        <span className="font-semibold text-slate-700">Counseling:</span> +91-9876543210
                      </p>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        <span className="font-semibold text-slate-700">Support:</span> +91-9876543211
                      </p>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="group">
                      <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600 inline-flex mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 border border-emerald-100">
                        <Mail size={20} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">Email</h3>
                      <a href="mailto:info@ametseducare.com" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium">info@ametseducare.com</a>
                    </div>

                    <div className="group">
                      <div className="bg-amber-50 p-3 rounded-xl text-amber-600 inline-flex mb-3 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 border border-amber-100">
                        <Clock size={20} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">Working Hours</h3>
                      <p className="text-sm text-slate-600 font-medium">Mon - Sat<br/>9:30 AM - 6:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-7"
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-blue-900/5 border border-slate-100 relative overflow-hidden h-full">
                {/* Decorative blob inside form */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>
                
                <h2 className="text-3xl font-extrabold mb-3 text-slate-900">Send an Inquiry 📨</h2>
                <p className="text-slate-500 mb-8 font-medium">Fill out the form below and our dedicated counselors will get back to you quickly.</p>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center h-[400px] flex flex-col items-center justify-center"
                  >
                    <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mb-6 shadow-sm">
                      <CheckCircle2 size={40} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-900 mb-3">Message Sent Successfully!</h3>
                    <p className="text-emerald-700 mb-8 max-w-sm mx-auto">Thank you for reaching out. A dedicated counselor will contact you shortly.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3 bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 rounded-xl transition-all font-bold shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-slate-700 uppercase tracking-wide">Full Name *</label>
                        <input required type="text" id="name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm font-medium" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-slate-700 uppercase tracking-wide">Phone Number *</label>
                        <input required type="tel" id="phone" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm font-medium" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-slate-700 uppercase tracking-wide">Email Address</label>
                        <input type="email" id="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm font-medium" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="course" className="text-sm font-bold text-slate-700 uppercase tracking-wide">Course of Interest</label>
                        <select id="course" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm font-medium appearance-none cursor-pointer">
                          <option value="">Select a Course...</option>
                          <option value="mbbs">MBBS (India & Abroad)</option>
                          <option value="bams">BAMS</option>
                          <option value="engineering">B.Tech / M.Tech</option>
                          <option value="management">MBA / BBA</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-slate-700 uppercase tracking-wide">Your Message</label>
                      <textarea id="message" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm font-medium resize-none" placeholder="Tell us how we can help you..."></textarea>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center space-x-2 group mt-4">
                      <span>Send Message Securely</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Google Maps Embed (GEO) */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-8 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Find Us on the Map 🗺️</h2>
                <p className="text-slate-600 font-medium">Easily locate our headquarters in Janakpuri District Center for walk-in counseling.</p>
            </div>
          <div className="bg-slate-50 p-2 rounded-3xl border border-slate-200 overflow-hidden shadow-lg shadow-slate-200/50">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.164390059346!2d77.0784968!3d28.6248357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c7c8800001%3A0xc61bc3d2bb0aeb5a!2sJanakpuri%20District%20Centre!5e0!3m2!1sen!2sin!4v1708453482705!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '1.25rem' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Amets Educare Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section (AEO) */}
      <section className="py-24 relative z-10 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">Frequently Asked Questions 💡</h2>
            <p className="text-slate-600 font-medium text-lg">Quick answers to help you get started on your journey.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-lg text-slate-800 pr-4">{faq.question}</span>
                  <ChevronDown 
                    size={24} 
                    className={`text-slate-400 transition-transform duration-300 shrink-0 ${openFaqIndex === index ? 'rotate-180 text-blue-600' : ''}`} 
                  />
                </button>
                
                {/* Expandable Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0 text-slate-600 font-medium leading-relaxed border-t border-slate-100 mt-2 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
