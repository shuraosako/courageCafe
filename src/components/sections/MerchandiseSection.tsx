"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

const items = [
  { name: "ステッカー",   desc: "普段使いしやすいオリジナルデザイン" },
  { name: "トートバッグ", desc: "ブラック・ナチュラルの2カラー展開" },
  { name: "Tシャツ",      desc: "ロゴマスコット入り、普段使いできるシンプルなデザイン" },
];

export default function MerchandiseSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-bg-section">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <SectionTitle en="MERCHANDISE" ja="物販" center />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* 写真 */}
          <motion.div
            className="relative aspect-square overflow-hidden border border-gold/15"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/物販.jpg"
              alt="COURAGE CAFÉ オリジナルグッズ"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* テキスト */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <p className="font-body text-cream-dim leading-[2] text-sm md:text-base">
              COURAGE CAFÉ のオリジナルグッズを販売しています。
              ちょっとしたお土産や普段使いのアイテムとしてもどうぞ。
            </p>

            <div className="flex flex-col gap-4">
              {items.map((item, i) => (
                <motion.div
                  key={item.name}
                  className="flex items-start gap-4 border-b border-gold/10 pb-4"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <span className="font-display text-gold text-lg mt-0.5">★</span>
                  <div>
                    <p className="font-display tracking-widest text-cream text-sm">{item.name}</p>
                    <p className="font-body text-cream-dim text-xs mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="font-body text-xs text-cream-dim/60">
              ※ 在庫状況はInstagramまたは店頭にてご確認ください。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
