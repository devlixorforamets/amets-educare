import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Amets Educare',
  description: 'Read the Privacy Policy of Amets Educare to understand how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://ametseducare.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 mt-20">
      <div className="container-premium max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-2xl shadow-premium border border-slate-100">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-8 relative inline-block">
          Privacy Policy
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-accent-500 rounded-full"></span>
        </h1>
        
        <div className="space-y-8 text-slate-600 leading-relaxed mt-12">
          <section>
            <p className="text-sm text-slate-400 mb-6 font-medium tracking-wide">LAST UPDATED: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase()}</p>
            <p>
              At Amets Educare, accessible from ametseducare.com, one of our main priorities is the privacy of our visitors. 
              This Privacy Policy document contains types of information that is collected and recorded by Amets Educare 
              and how we use it. If you have additional questions or require more information about our Privacy Policy, 
              do not hesitate to <Link href="/contact-us" className="text-accent-600 font-semibold hover:text-primary-900 transition-colors">contact us</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, 
              will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-accent-500">
              <li>When you register for an account or fill out a form, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</li>
              <li>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-accent-500">
              <li>Provide, operate, and maintain our website and educational services</li>
              <li>Improve, personalize, and expand our website offerings</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails related to your course inquiries or university applications</li>
              <li>Find and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">Cookies and Web Beacons</h2>
            <p>
              Like any other website, Amets Educare uses &quot;cookies&quot;. These cookies are used to store information 
              including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. 
              The information is used to optimize the users&apos; experience by customizing our web page content based 
              on visitors&apos; browser type and/or other information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">Third Party Privacy Policies</h2>
            <p>
              Amets Educare&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising 
              you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. 
              It may include their practices and instructions about how to opt-out of certain options.
            </p>
            <p className="mt-4">
              Please review our <Link href="/terms-of-service" className="text-accent-600 font-semibold hover:text-primary-900 transition-colors">Terms of Service</Link> for additional information regarding the use of our website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically 
              for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. 
              These changes are effective immediately, after they are posted on this page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
