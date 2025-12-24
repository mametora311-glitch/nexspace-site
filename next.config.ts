// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // ← これが「ガッチガチ」に重要です！
  images: {
    unoptimized: true, // GitHub Pagesで画像を表示するために必要
  },
};

//export default nextConfig;