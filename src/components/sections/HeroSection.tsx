"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} id="top" className="relative h-screen overflow-hidden">
      {/* パララックス背景 */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="/images/店内雰囲気2.jpg"
          alt="COURAGE CAFÉ 店内"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* 暗めのオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/60 via-bg-dark/40 to-bg-dark/80" />
      </motion.div>

      {/* コンテンツ */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <Image
            src="/images/ロゴ.jpg"
            alt="COURAGE CAFÉ logo"
            width={120}
            height={120}
            className="rounded-full border border-gold/30"
          />

          <div>
            <p className="font-display text-gold tracking-[0.4em] text-sm mb-2">
              SINCE 2025 — 福岡市東区青葉
            </p>
            <h1 className="font-display text-6xl md:text-8xl tracking-widest text-cream">
              COURAGE
            </h1>
            <h1 className="font-display text-6xl md:text-8xl tracking-widest text-cream">
              CAFÉ
            </h1>
          </div>

          <p className="font-body text-cream-dim text-sm md:text-base leading-relaxed max-w-sm">
            アメリカ Fire King のヴィンテージ食器で楽しむコーヒー。
            <br />
            ミッドセンチュリーの空間で、ゆっくりとした時間を。
          </p>

          {/* スクロール誘導 */}
          <motion.div
            className="mt-8 flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="font-display text-xs tracking-[0.3em] text-gold/60">SCROLL</span>
            <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
