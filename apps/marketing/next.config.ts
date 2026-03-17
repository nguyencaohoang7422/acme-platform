import { withMicrofrontends } from "@vercel/microfrontends/next/config";
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  redirects: async () => [
    {
      source: "/documentation",
      destination: "/docs",
      permanent: true,
    },
  ],
};


export default withMicrofrontends(nextConfig);
