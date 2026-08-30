import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow ngrok tunnel origins to access Next.js dev server and assets
  allowedDevOrigins: [
    "breach-sterling-fernlike.ngrok-free.dev",
    "*.ngrok-free.dev",
    "*.ngrok-free.app",
    "*.ngrok.app",
    "*.ngrok.io",
  ],
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "breach-sterling-fernlike.ngrok-free.dev",
      },
      {
        protocol: "https",
        hostname: "*.ngrok-free.dev",
      },
      {
        protocol: "https",
        hostname: "*.ngrok-free.app",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Authorization, ngrok-skip-browser-warning",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
