import { courses } from '@/lib/data';

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
