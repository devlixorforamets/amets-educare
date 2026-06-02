import { abroadCountries } from '@/lib/data';

export function generateStaticParams() {
  return abroadCountries.map((country) => ({
    slug: country.slug,
  }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
