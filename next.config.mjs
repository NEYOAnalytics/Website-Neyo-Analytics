/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    'snowbird-flashily-dizziness.ngrok-free.dev',
    '*.ngrok-free.dev',
    '*.ngrok.io',
    'localhost:3000',
  ],
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: '*' },
          { key: 'ngrok-skip-browser-warning', value: 'true' },
        ],
      },
    ];
  },
};

export default nextConfig;
