import { withMicrofrontends } from "@vercel/microfrontends/next/config";
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};


export default withMicrofrontends(nextConfig);
