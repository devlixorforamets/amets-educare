import { states } from '@/lib/data';

export function generateStaticParams() {
  return states.map((state) => ({
    state: state.slug,
  }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
