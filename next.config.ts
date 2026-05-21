import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(__dirname),
  // セキュリティヘッダーは static export では無効のため firebase.json で管理
};

export default nextConfig;
