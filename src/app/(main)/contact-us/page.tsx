import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Amets Educare - Admission Guidance in Janakpuri, Delhi",
  description: "Get in touch with Amets Educare for expert admission counseling. Visit our office at Janakpuri District Center, Delhi or contact us via phone or email.",
  keywords: "Contact Amets Educare, Admission Counseling Delhi, Janakpuri Education Consultant, MBBS Admission Help, Engineering Admission Guidance",
  alternates: {
    canonical: "/contact-us"
  }
};

export default function ContactUsPage() {
  // JSON-LD for Local Business (GEO) & FAQ (AEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "name": "Amets Educare",
        "url": "https://ametseducare.com",
        "logo": "https://ametseducare.com/logo.png",
        "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "description": "Expert admission counseling and guidance for medical, engineering, and management courses in India and abroad.",
        "telephone": "+91-9876543210",
        "email": "info@ametseducare.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "108, Vishwasadan Building, Near Inox Cinemas, Janakpuri District Center",
          "addressLocality": "Janakpuri, Delhi",
          "postalCode": "110058",
          "addressCountry": "IN"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:30",
          "closes": "18:30"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is Amets Educare located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are located at 108, Vishwasadan Building, Near Inox Cinemas, Janakpuri District Center, Janakpuri, Delhi, 110058."
            }
          },
          {
            "@type": "Question",
            "name": "What are your office hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our office is open from Monday to Saturday, 9:30 AM to 6:30 PM. We are closed on Sundays."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide counseling for studying abroad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We provide complete admission guidance for top universities in countries like Russia, Georgia, Kazakhstan, and more for courses like MBBS."
            }
          },
          {
            "@type": "Question",
            "name": "How can I book a counseling session?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book a session by filling out the contact form on our website, calling our helpline, or directly visiting our Janakpuri office."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
