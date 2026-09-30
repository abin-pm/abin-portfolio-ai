import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Abin P M Portfolio',
    short_name: 'Abin PM',
    description:
      'Senior Full Stack Developer portfolio for Abin PM featuring React, Next.js, Node.js, and AI-powered web engineering projects.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f6f3',
    theme_color: '#6f7f63',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
