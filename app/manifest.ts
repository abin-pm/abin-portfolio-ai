import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Abin P M Portfolio',
    short_name: 'Abin PM',
    description:
      'Senior Full Stack Developer portfolio for Abin PM featuring React, Next.js, Node.js, and AI-powered web engineering projects.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b1020',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/logo.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  };
}
