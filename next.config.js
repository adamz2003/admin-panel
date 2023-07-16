// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bube-dev-1.s3.eu-west-2.amazonaws.com',
        port: '',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/api/portraits/**',
      },
    ],
  },
  env: {
    FRONTEND_URL: process.env.FRONTEND_URL,
    BACKEND_URL: process.env.BACKEND_URL,
    NEXT_JWT_SECRET: process.env.NEXT_JWT_SECRET,
    NEXT_PUBLIC_TOKEN: process.env.NEXT_PUBLIC_TOKEN,
    GOOGLE_CLIENTID: process.env.GOOGLE_CLIENTID,
    GOOGLE_CLIENTSECRET: process.env.GOOGLE_CLIENTSECRET,
    FACEBOOK_CLIENTID: process.env.FACEBOOK_CLIENTID,
    FACEBOOK_CLIENTSECRET: process.env.FACEBOOK_CLIENTSECRET,
    NEXT_PUBLIC_PUSHER_APP_KEY: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
    NEXT_PUBLIC_PUSHER_CLUSTER: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
    PUSHER_APP_ID: process.env.PUSHER_APP_ID,
    PUSHER_SECRET: process.env.PUSHER_SECRET
  },
  // pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};

module.exports = nextConfig;
