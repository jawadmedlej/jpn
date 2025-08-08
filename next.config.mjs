/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',                // Incoming path
        destination: '/index.html', // Target path
        permanent: false,           // 307 (temporary) if false, 308 (permanent) if true
      },
    ];
  },
};

export default nextConfig;
