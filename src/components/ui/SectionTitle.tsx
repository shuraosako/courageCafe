"use client";

import { motion } from "framer-motion";

type Props = {
  en: string;
  ja: string;
  center?: boolean;
};

export default function SectionTitle({ en, ja, center = false }: Props) {
  return (
    <motion.div
      className={center ? "text-center" : ""}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="font-display text-gold tracking-[0.25em] text-sm mb-1">
        {en}
      </p>
      <h2 className="font-serif text-cream text-3xl md:text-4xl font-light leading-snug">
        {ja}
      </h2>
      <div className="mt-4 h-px w-12 bg-gold" style={center ? { margin: "1rem auto 0" } : {}} />
    </motion.div>
  );
}
