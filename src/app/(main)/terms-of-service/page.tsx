import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Amets Educare',
  description: 'Read the Terms of Service for Amets Educare to understand the rules and guidelines for using our website and services.',
  alternates: {
    canonical: 'https://ametseducare.com/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 mt-20">
      <div className="container-premium max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-2xl shadow-premium border border-slate-100">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-8 relative inline-block">
          Terms of Service
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-accent-500 rounded-full"></span>
        </h1>
        
        <div className="space-y-8 text-slate-600 leading-relaxed mt-12">
          <section>
            <p className="text-sm text-slate-400 mb-6 font-medium tracking-wide">EFFECTIVE DATE: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase()}</p>
            <p>
              Welcome to Amets Educare! These terms and conditions outline the rules and regulations for the use of 
              Amets Educare&apos;s Website, located at ametseducare.com.
            </p>
            <p className="mt-4">
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Amets Educare 
              if you do not agree to take all of the terms and conditions stated on this page. If you have any questions, 
              please <Link href="/contact-us" className="text-accent-600 font-semibold hover:text-primary-900 transition-colors">contact us</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">Cookies</h2>
            <p>
              We employ the use of cookies. By accessing Amets Educare, you agreed to use cookies in agreement with 
              the Amets Educare&apos;s <Link href="/privacy-policy" className="text-accent-600 font-semibold hover:text-primary-900 transition-colors">Privacy Policy</Link>.
            </p>
            <p className="mt-4">
              Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit. Cookies are used 
              by our website to enable the functionality of certain areas to make it easier for people visiting our website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">License</h2>
            <p>
              Unless otherwise stated, Amets Educare and/or its licensors own the intellectual property rights for all 
              material on Amets Educare. All intellectual property rights are reserved. You may access this from 
              Amets Educare for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-accent-500">
              <li>Republish material from Amets Educare</li>
              <li>Sell, rent or sub-license material from Amets Educare</li>
              <li>Reproduce, duplicate or copy material from Amets Educare</li>
              <li>Redistribute content from Amets Educare</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">Educational Consultancy Services</h2>
            <p>
              Amets Educare provides guidance and consultancy for university admissions. While we strive to provide accurate 
              and up-to-date information regarding courses, universities, and admission processes, we cannot guarantee 
              admission to any specific institution. The final decision rests solely with the respective educational 
              institutions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">User Comments and Submissions</h2>
            <p>
              Certain parts of this website may offer the opportunity for users to post and exchange opinions and 
              information. Amets Educare does not filter, edit, publish or review Comments prior to their presence on 
              the website. Comments do not reflect the views and opinions of Amets Educare, its agents, and/or affiliates.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">Disclaimer</h2>
            <p>
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions 
              relating to our website and the use of this website. Nothing in this disclaimer will limit or exclude our 
              or your liability for death or personal injury, fraud, or fraudulent misrepresentation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
