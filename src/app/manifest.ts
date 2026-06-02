import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Amets Educare - Premier Medical & Professional Education Consultants',
    short_name: 'Amets',
    description: 'Expert admission guidance for MBBS, BDS, B.Tech, MBA, LLB, Nursing and professional courses across India and abroad.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A192F',
    theme_color: '#FFD700',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
