"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

const photos = [
  { src: "/images/自家製バジルのジェノベーゼパスタ.jpg", alt: "自家製バジルのジェノベーゼパスタ" },
  { src: "/images/カルボナーラ.jpg",                      alt: "カルボナーラ" },
  { src: "/images/ティラミス.jpg",                        alt: "ティラミス" },
  { src: "/images/タラコのカルボナーラ.jpg",              alt: "タラコのカルボナーラ" },
  { src: "/images/たらことしらすのバター風味.jpg",        alt: "たらことしらすのバター風味" },
  { src: "/images/イカとタコのペペロンチーノ.jpg",        alt: "イカとタコのペペロンチーノ" },
  { src: "/images/コンビーフトースト.jpg",                alt: "コンビーフトースト" },
  { src: "/images/チョコマシュマロトースト.jpg",          alt: "チョコマシュマロトースト" },
  { src: "/images/アイスウインナーコーヒー.jpg",          alt: "アイスウインナーコーヒー" },
  { src: "/images/レンチトースト.jpg",                    alt: "フレンチトースト" },
  { src: "/images/カラスミのペペロンチーノ.jpg",          alt: "カラスミのペペロンチーノ" },
  { src: "/images/モッツァレアと温泉卵のミートソースパスタ.jpg", alt: "ミートソースパスタ" },
  { src: "/images/トマトバジルトースト.jpg",              alt: "トマトバジルトースト" },
  { src: "/images/旬野菜とベーコンを味わうバター醤油.jpg", alt: "旬野菜とベーコンのバター醤油パスタ" },
  { src: "/images/ベーコンステーキ ナポリタン.jpg",       alt: "ベーコンステーキナポリタン" },
  { src: "/images/和素材七種の 和風月見とろろパスタ.jpg", alt: "和風月見とろろパスタ" },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % photos.length : null));

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 bg-bg-dark">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionTitle en="GALLERY" ja="フォトギャラリー" center />

        {/* グリッド */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              className="group relative aspect-square overflow-hidden cursor-pointer"
              onClick={() => setLightbox(i)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              whileHover={{ zIndex: 1 }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-bg-dark/0 group-hover:bg-bg-dark/30 transition-all duration-300 flex items-center justify-center">
                <span className="font-display text-xs tracking-widest text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  VIEW
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-bg-dark/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full aspect-square"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                fill
                className="object-contain"
              />
              <p className="absolute bottom-0 left-0 right-0 text-center font-body text-cream-dim text-sm py-3 bg-bg-dark/60">
                {photos[lightbox].alt}
              </p>
            </motion.div>

            {/* 前後ボタン */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-2xl text-gold hover:text-gold-light transition-colors px-4 py-2"
            >
              ←
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 font-display text-2xl text-gold hover:text-gold-light transition-colors px-4 py-2"
            >
              →
            </button>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 font-display text-xl text-cream-dim hover:text-cream transition-colors px-3 py-1"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
