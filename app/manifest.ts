import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Abin P M Portfolio',
    short_name: 'Abin PM',
    description:
      'Senior Full Stack AI Developer with 10+ years building AI web applications, scalable MERN products, and high-performance React + Node.js systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050508',
    theme_color: '#050508',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
