"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-bg-section">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* テキスト */}
        <div className="flex flex-col gap-8">
          <SectionTitle en="ABOUT" ja="クラージュカフェについて" />

          <motion.div
            className="flex flex-col gap-5 font-body text-cream-dim leading-[2] text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <p>
              福岡市東区青葉に、小さな隠れ家カフェがあります。
              ミッドセンチュリーな空間に広がるのは、アメリカの
              ヴィンテージ食器 <span className="text-gold">Fire King</span> の世界。
            </p>
            <p>
              1940年代に生まれた Fire King の器は、ぽってりとした
              ミルクガラスの肌触りと、時代を超えた温かさを持っています。
              置いてあるだけで、アメリカのダイナーの空気が漂う。
              そんな空間で、ゆっくりとしたコーヒーの時間を。
            </p>
            <p>
              Hot コーヒーをご注文のお客様は、豊富に揃えた Fire King のマグから
              お好きなデザインをお選びいただけます。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col gap-2 border-l-2 border-gold/40 pl-5"
          >
            <p className="font-display text-gold tracking-widest text-sm">MORNING</p>
            <p className="font-display text-3xl text-cream">9:00 – 11:00</p>
            <p className="font-display text-gold tracking-widest text-sm mt-2">LUNCH & DINNER</p>
            <p className="font-display text-3xl text-cream">11:00 – 22:00</p>
            <p className="font-body text-xs text-cream-dim mt-1">定休日：水曜日　日曜は16:00まで</p>
          </motion.div>
        </div>

        {/* 写真 — わざと少し大きくはみ出させる */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/店内雰囲気.jpg"
              alt="店内の雰囲気"
              fill
              className="object-cover"
            />
            {/* ゴールドのフレームライン */}
            <div className="absolute inset-0 border border-gold/20" />
          </div>
          {/* ラベル */}
          <div className="absolute -bottom-4 -left-4 bg-bg-dark border border-gold/30 px-4 py-2">
            <p className="font-display text-xs tracking-widest text-gold">FUKUOKA, AOBA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
