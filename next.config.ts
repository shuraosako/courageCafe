import type { NextConfig } from "next";

const securityHeaders = [
  // クリックジャッキング防止
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // MIMEスニッフィング防止
  { key: "X-Content-Type-Options", value: "nosniff" },
  // リファラー情報を最小限に
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // HTTPS強制 (1年間)
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  // 不要なブラウザ機能を無効化
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // XSS保護 (Content Security Policy)
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",  // Next.js のインラインスクリプトに必要
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "frame-src https://maps.google.com https://www.google.com",  // Google Maps
      "connect-src 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // 静的エクスポートではheadersは効かないが、Firebase Hostingで設定できる
  // ここに書いておくことで意図を明示する
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
