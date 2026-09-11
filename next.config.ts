import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    // Serve the files in public/ as they are. Vercel bills every optimized
    // image, and these few PNGs are already small.
    unoptimized: true,
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
