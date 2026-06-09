import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

// Font loading
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

// Metadata template
export const metadata: Metadata = {
  title: {
    template: '%s | Amets Educare',
    default: 'Amets Educare - Premier Medical & Professional Education Consultants',
  },
  description: 'Amets Educare, led by Reena Thakur, provides expert admission guidance for MBBS, MS/MD, BDS, BAMS, BHMS, BUMS, B.Tech, MBA, PGDM, LLB, BA LLB, Nursing, B.Ed, M.Ed and professional courses across India and abroad. Digital solutions by Devlixor Technologies.',
  keywords: 'MBBS admission, MS MD admission, medical colleges India, study abroad MBBS, BDS, BAMS, BHMS, BUMS, BVSC, B.Tech admission, MBA admission, PGDM, BA LLB, LLB, B.Ed, M.Ed, educational consultancy India, Reena Thakur, Amets Educare',
  authors: [{ name: 'Reena Thakur', url: 'https://ametseducare.com/about-us/reena-thakur' }],
  creator: 'Devlixor Technologies',
  publisher: 'Devlixor Technologies',
  metadataBase: new URL('https://ametseducare.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Amets Educare',
    title: 'Amets Educare - Premier Medical & Professional Education Consultants',
    description: 'Expert admission guidance for MBBS, BDS, B.Tech, MBA, PGDM, LLB, Nursing & more. Trusted by 5000+ students. Led by Reena Thakur.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Amets Educare - Premier Education Consultants' }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ametseducare',
    title: 'Amets Educare - Premier Medical & Professional Education Consultants',
    description: 'Expert admission guidance for MBBS, BDS, B.Tech, MBA, LLB, Nursing & more. 5000+ students placed.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GSC_CODE',
    yandex: 'YOUR_YANDEX_CODE',
    yahoo: 'YOUR_YAHOO_CODE',
  },
  alternates: {
    canonical: 'https://ametseducare.com',
  },
  category: 'education',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Schemas
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Amets Educare',
    url: 'https://ametseducare.com',
    logo: 'https://ametseducare.com/logo.png',
    founder: {
      '@type': 'Person',
      name: 'Reena Thakur',
      jobTitle: 'Director',
    },
    sameAs: [
      'https://facebook.com/ametseducare',
      'https://twitter.com/ametseducare',
      'https://www.linkedin.com/company/amets-educare/',
      'https://instagram.com/ametseducare',
    ],
    description: 'Premier educational consultancy led by Reena Thakur, providing expert admission guidance across India and abroad.',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Amets Educare',
    url: 'https://ametseducare.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ametseducare.com/search/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    creator: {
      '@type': 'Organization',
      name: 'Devlixor Technologies',
      url: 'https://devlixor.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Devlixor Technologies',
      url: 'https://devlixor.com',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Amets Educare',
    image: 'https://ametseducare.com/logo.png',
    '@id': 'https://ametseducare.com',
    url: 'https://ametseducare.com',
    telephone: '+91-9711290783', // Update with real phone number
    email: 'info@ametseducare.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'Janakpuri', // Update with actual locality
      addressRegion: 'Delhi', // Update with actual region
      postalCode: '110058',
      streetAddress: 'OFFICE NUMBER 505, DDA-5, near MCDONALDS, Janakpuri District Center',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.6139', // Update with actual lat
      longitude: '77.2090', // Update with actual lng
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    priceRange: '$$',
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        {/* Mobile viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0A192F" />
        <meta name="msapplication-TileColor" content="#0A192F" />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="schema-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased font-sans selection:bg-accent-500 selection:text-primary-900">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" // Replace with actual G-tag
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        
        {children}
      </body>
    </html>
  );
}
