import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // klip 15.82 dodao sam ovo iako je radilo i bez toga
  serverExternalPackages: ["pino", "pino-pretty"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
