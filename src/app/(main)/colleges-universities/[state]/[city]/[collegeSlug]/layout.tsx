import { colleges } from '@/lib/data';

export function generateStaticParams() {
  return colleges.map((college) => ({
    state: (college.state || 'unknown-state').toLowerCase().replace(/\s+/g, '-'),
    city: (college.city || 'unknown-city').toLowerCase().replace(/\s+/g, '-'),
    collegeSlug: college.slug,
  }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
