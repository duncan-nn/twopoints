import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost:8085",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
        {
        protocol: "https",
        hostname: "twopointsstudio.com",
      },
        {
        protocol: "http",
        hostname: "twopointsstudio.com",
      },
      {
        protocol: "https",
        hostname: "olive-aardvark-768094.hostingersite.com",
      },
      {
        protocol: "http",
        hostname: "olive-aardvark-768094.hostingersite.com",
      },
    ],
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig;
