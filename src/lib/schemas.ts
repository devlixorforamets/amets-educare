export const BASE_URL = 'https://ametseducare.com';

// --- TYPES & INTERFACES ---

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface AggregateRating {
  ratingValue: string;
  reviewCount: string;
}

export interface CourseData {
  name: string;
  description: string;
  educationalLevel: string;
  timeToComplete: string; // e.g., "P4Y" for 4 years
  occupationalCredentialAwarded: string;
  price?: string;
  priceCurrency?: string;
  category?: string;
  courseInstanceName?: string;
  aggregateRating?: AggregateRating;
}

export interface CollegeReview {
  authorName: string;
  reviewBody: string;
  reviewRating: string;
  datePublished: string;
}

export interface CollegeData {
  name: string;
  description: string;
  url: string;
  logo: string;
  image: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string; // ISO 3166-1 alpha-2 code, e.g., "IN"
  };
  foundingDate?: string;
  alumni?: string[];
  aggregateRating?: AggregateRating;
  reviews?: CollegeReview[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleData {
  headline: string;
  image: string[];
  datePublished: string; // ISO 8601 date, e.g., "2026-05-04T08:00:00+08:00"
  dateModified: string;
  description?: string;
}

// --- SCHEMA GENERATORS ---

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Amets Educare',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    foundingDate: '2010-01-01', // Example date
    areaServed: 'India',
    founder: [
      {
        '@type': 'Person',
        name: 'Reena Thakur',
        jobTitle: 'Director',
      },
      {
        '@type': 'Person',
        name: 'Mukesh Sharma',
        jobTitle: 'Director',
      }
    ],
    sameAs: [
      'https://facebook.com/ametseducare',
      'https://twitter.com/ametseducare',
      'https://www.linkedin.com/company/amets-educare/',
      'https://instagram.com/ametseducare',
    ],
    description: 'Premier educational consultancy led by Reena Thakur, providing expert admission guidance across India and abroad.',
    offers: [
      {
        '@type': 'Offer',
        name: 'MBBS Admission Guidance',
        category: 'Educational Service',
      },
      {
        '@type': 'Offer',
        name: 'Study Abroad Consulting',
        category: 'Educational Service',
      },
      {
        '@type': 'Offer',
        name: 'B.Tech & MBA Admission Support',
        category: 'Educational Service',
      },
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Amets Educare',
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/search/?q={search_term_string}`,
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
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateCourseSchema(course: CourseData) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Amets Educare',
      url: BASE_URL,
    },
    educationalLevel: course.educationalLevel,
    timeToComplete: course.timeToComplete,
    occupationalCredentialAwarded: course.occupationalCredentialAwarded,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      name: course.courseInstanceName || course.name,
      courseMode: 'full-time',
    },
    offers: {
      '@type': 'Offer',
      category: course.category || 'Educational Program',
      price: course.price || 'Contact for pricing',
      priceCurrency: course.priceCurrency || 'INR',
    },
  };

  if (course.aggregateRating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: course.aggregateRating.ratingValue,
      reviewCount: course.aggregateRating.reviewCount,
    };
  }

  return schema;
}

export function generateCollegeSchema(college: CollegeData) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name: college.name,
    description: college.description,
    url: college.url,
    logo: college.logo,
    image: college.image,
    address: {
      '@type': 'PostalAddress',
      streetAddress: college.address.streetAddress,
      addressLocality: college.address.addressLocality,
      addressRegion: college.address.addressRegion,
      postalCode: college.address.postalCode,
      addressCountry: college.address.addressCountry,
    },
  };

  if (college.foundingDate) {
    schema.foundingDate = college.foundingDate;
  }

  if (college.alumni && college.alumni.length > 0) {
    schema.alumni = college.alumni.map((name) => ({
      '@type': 'Person',
      name: name,
    }));
  }

  if (college.aggregateRating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: college.aggregateRating.ratingValue,
      reviewCount: college.aggregateRating.reviewCount,
    };
  }

  if (college.reviews && college.reviews.length > 0) {
    schema.review = college.reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.authorName,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.reviewRating,
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    }));
  }

  return schema;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: ArticleData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    description: article.description,
    author: {
      '@type': 'Person',
      name: 'Reena Thakur',
      url: `${BASE_URL}/about-us/reena-thakur`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Amets Educare',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    name: 'Amets Educare',
    image: `${BASE_URL}/logo.png`,
    '@id:': BASE_URL,
    url: BASE_URL,
    telephone: '+91-XXXXXXXXXX', // Update with actual number
    email: 'info@ametseducare.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'OLD H NO.-9/23, NEW H. NO.-S-113, GALI NO.-9, VIKAS NAGAR, UTTAM NAGAR',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110059',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.6190',
      longitude: '77.0543',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
  };
}
