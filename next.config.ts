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
    ],
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig;
