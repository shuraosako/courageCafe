"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { shopInfo } from "@/data/shopInfo";

export default function InstagramSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0">
        <Image
          src="/images/店内雰囲気.jpg"
          alt="店内"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-bg-dark/70" />
      </div>

      <motion.div
        className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="divider w-full">
          <span className="font-display tracking-widest text-gold text-sm px-4">INSTAGRAM</span>
        </div>

        <p className="font-body text-cream-dim leading-relaxed">
          最新情報・新メニュー・営業カレンダーは
          <br />
          Instagram で随時更新しています。
        </p>

        <a
          href={shopInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3"
        >
          <p className="font-display text-3xl md:text-4xl tracking-widest text-cream group-hover:text-gold transition-colors duration-300">
            {shopInfo.instagramHandle}
          </p>
          <span className="font-display text-xs tracking-[0.3em] border border-gold/50 text-gold px-6 py-3 group-hover:bg-gold group-hover:text-bg-dark transition-all duration-200">
            FOLLOW US ↗
          </span>
        </a>

        <div className="divider w-full">
          <span className="font-display text-gold/40 text-xs px-4">★ ★ ★</span>
        </div>
      </motion.div>
    </section>
  );
}
