import { blogPosts } from '@/lib/blog-data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
