import type { Metadata } from "next";
import { Bebas_Neue, Noto_Serif_JP } from "next/font/google";
import Analytics from "@/components/ui/Analytics";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const noto = Noto_Serif_JP({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://courage-cafe.web.app"),
  title: "COURAGE CAFÉ | クラージュカフェ",
  description:
    "福岡市東区青葉の隠れ家カフェ。アメリカのヴィンテージ食器 Fire King でコーヒーをどうぞ。モーニング〜深夜まで営業。",
  openGraph: {
    title: "COURAGE CAFÉ | クラージュカフェ",
    description:
      "福岡市東区青葉の隠れ家カフェ。Fire King のヴィンテージ食器でコーヒーを。",
    url: "https://courage-cafe.web.app",
    siteName: "COURAGE CAFÉ",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${bebas.variable} ${noto.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
