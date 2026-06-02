/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  // NOTE: When using `output: 'export'`, Next.js does not support `headers()` or `redirects()` 
  // because there is no Node.js server to process them at runtime. 
  // If you deploy to Vercel/Node, you can remove `output: 'export'` and uncomment the below:
  
  /*
  async headers() {
    return [
      {
        source: '/(.*).(js|css|woff2|png|jpg|jpeg|svg|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/mbbs',
        destination: '/courses/mbbs',
        permanent: true,
      },
      {
        source: '/btech',
        destination: '/courses/btech',
        permanent: true,
      }
    ];
  },
  */
};

module.exports = nextConfig;
