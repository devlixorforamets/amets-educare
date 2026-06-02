import { colleges, courses } from '@/lib/data';

// Mock Blog Data for Search (In a real app, this would come from a CMS or database)
const blogs = [
  { title: 'How to Crack NEET 2026: A Complete Strategy', slug: 'how-to-crack-neet', excerpt: 'Discover the best tips and tricks to score 650+ in NEET UG.', tags: ['NEET', 'MBBS', 'Preparation'] },
  { title: 'Top 10 Engineering Colleges in Karnataka', slug: 'top-engineering-colleges-karnataka', excerpt: 'A comprehensive guide to the best B.Tech colleges in Karnataka based on placements.', tags: ['B.Tech', 'Karnataka', 'Engineering'] },
  { title: 'MBA vs PGDM: Which is better?', slug: 'mba-vs-pgdm', excerpt: 'Understanding the core differences between an MBA degree and a PGDM diploma.', tags: ['MBA', 'Management', 'PGDM'] },
  { title: 'MBBS Abroad: Russia vs Philippines', slug: 'mbbs-abroad-russia-vs-philippines', excerpt: 'Compare the fee structures, climate, and FMGE pass rates for Indian medical students.', tags: ['MBBS Abroad', 'Russia', 'Philippines'] }
];

export interface SearchResult {
  type: 'college' | 'course' | 'blog';
  title: string;
  url: string;
  excerpt: string;
  meta: string;
}

export function performSearch(queryString: string): SearchResult[] {
  const query = queryString.toLowerCase().trim();
  if (!query) return [];

  const results: SearchResult[] = [];

  // Search Colleges
  colleges.forEach(college => {
    if (
      college.name.toLowerCase().includes(query) || 
      college.city.toLowerCase().includes(query) || 
      college.state.toLowerCase().includes(query) ||
      college.courses.some(c => c.toLowerCase().includes(query))
    ) {
      results.push({
        type: 'college',
        title: college.name,
        url: `/colleges-universities/${college.state.toLowerCase().replace(/\s+/g, '-')}/${college.city.toLowerCase().replace(/\s+/g, '-')}/${college.slug}`,
        excerpt: `${college.type} Institution located in ${college.city}, ${college.state}.`,
        meta: `Fee: ${college.annualFee} | Rating: ${college.rating}★`
      });
    }
  });

  // Search Courses
  courses.forEach(course => {
    if (
      course.name.toLowerCase().includes(query) || 
      course.category.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query)
    ) {
      results.push({
        type: 'course',
        title: `${course.name} Admission`,
        url: `/courses/${course.slug}`,
        excerpt: course.description.substring(0, 100) + '...',
        meta: `Duration: ${course.duration} | Exam: ${course.entranceExam}`
      });
    }
  });

  // Search Blogs
  blogs.forEach(blog => {
    if (
      blog.title.toLowerCase().includes(query) || 
      blog.excerpt.toLowerCase().includes(query) ||
      blog.tags.some(tag => tag.toLowerCase().includes(query))
    ) {
      results.push({
        type: 'blog',
        title: blog.title,
        url: `/blog/${blog.slug}`,
        excerpt: blog.excerpt,
        meta: `Tags: ${blog.tags.join(', ')}`
      });
    }
  });

  return results;
}
