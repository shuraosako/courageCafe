"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { shopInfo } from "@/data/shopInfo";

export default function AccessSection() {
  return (
    <section id="access" className="py-24 md:py-32 px-6 bg-bg-section">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionTitle en="ACCESS" ja="アクセス" center />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Google Map */}
          <motion.div
            className="relative w-full aspect-video border border-gold/15 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <iframe
              src={shopInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="COURAGE CAFÉ のマップ"
            />
          </motion.div>

          {/* 情報 */}
          <motion.div
            className="flex flex-col gap-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            {/* 住所 */}
            <div className="flex flex-col gap-1 border-l-2 border-gold/40 pl-5">
              <p className="font-display tracking-widest text-gold text-xs">ADDRESS</p>
              <p className="font-body text-cream text-base leading-relaxed">
                {shopInfo.address}
              </p>
              {shopInfo.access.map((a) => (
                <p key={a} className="font-body text-cream-dim text-sm">{a}</p>
              ))}
              <p className="font-body text-cream-dim/60 text-xs mt-1">{shopInfo.parking}</p>
            </div>

            {/* 電話 */}
            <div className="flex flex-col gap-1 border-l-2 border-gold/40 pl-5">
              <p className="font-display tracking-widest text-gold text-xs">TEL</p>
              <a
                href={`tel:${shopInfo.tel}`}
                className="font-display text-cream text-2xl tracking-widest hover:text-gold transition-colors"
              >
                {shopInfo.tel}
              </a>
            </div>

            {/* 営業時間 */}
            <div className="flex flex-col gap-3 border-l-2 border-gold/40 pl-5">
              <p className="font-display tracking-widest text-gold text-xs">HOURS</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-xs tracking-wider text-gold-light w-24 shrink-0">MORNING</span>
                  <span className="font-display text-cream text-xl">9:00 – 11:00</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-xs tracking-wider text-gold-light w-24 shrink-0">LUNCH/DINNER</span>
                  <span className="font-display text-cream text-xl">11:00 – 22:00</span>
                </div>
              </div>
              <p className="font-body text-xs text-cream-dim">{shopInfo.hours.sunday}</p>
              <p className="font-body text-xs text-cream-dim/60">{shopInfo.hours.note}</p>
            </div>

            {/* 定休日 */}
            <div className="flex flex-col gap-1 border-l-2 border-gold/40 pl-5">
              <p className="font-display tracking-widest text-gold text-xs">CLOSED</p>
              <p className="font-body text-cream">{shopInfo.closed}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
