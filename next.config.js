/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['@/components/ui'],
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/profile',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/publications',
        destination: '/research',
        permanent: true,
      },
      {
        source: '/links',
        destination: '/connect',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
