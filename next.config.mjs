/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['geist'],
  async redirects() {
    return [
      { source: '/experience/ocuiz', destination: '/experience/ociuz', permanent: true },
      { source: '/projects/ultrasonic-imagine', destination: '/projects/supersonic-imagine', permanent: true },
    ];
  },
};

export default nextConfig;
