"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  morningDrinks,
  morningToast,
  pastaItems,
  setAddons,
  alcoholCategories,
  type MenuItem,
} from "@/data/menu";

type Tab = "morning" | "lunch" | "alcohol";

function DrinkGrid({ items }: { items: MenuItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {items.map((item) => (
        <div key={item.name} className="flex justify-between items-baseline px-3 py-2 bg-bg-card/50 border border-gold/10">
          <span className="font-body text-cream-dim text-sm">{item.name}</span>
          {item.price && (
            <span className="font-display text-gold text-sm ml-2 shrink-0">{item.price}</span>
          )}
        </div>
      ))}
    </div>
  );
}

function PastaGrid({ items }: { items: MenuItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item) => (
        <motion.div
          key={item.name}
          className="group relative overflow-hidden bg-bg-card border border-gold/10"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {item.image ? (
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 font-body text-cream text-sm leading-snug">
                {item.name}
              </p>
            </div>
          ) : (
            <div className="px-4 py-5 flex items-center justify-between">
              <p className="font-body text-cream-dim text-sm">{item.name}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function CategoryBlock({ label, items }: { label: string; items: MenuItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-display tracking-widest text-gold text-sm border-b border-gold/20 pb-2">
        {label}
      </p>
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <div key={item.name} className="flex justify-between items-baseline py-1.5 border-b border-gold/5">
            <span className="font-body text-cream-dim text-sm">{item.name}</span>
            {item.price && (
              <span className="font-display text-gold text-sm ml-4 shrink-0">{item.price}<span className="text-xs text-cream-dim/60 ml-0.5">yen</span></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenuSection() {
  const [tab, setTab] = useState<Tab>("morning");

  const tabs: { id: Tab; label: string; sub: string }[] = [
    { id: "morning", label: "MORNING",        sub: "open – 11:00" },
    { id: "lunch",   label: "LUNCH & DINNER", sub: "11:00 – close" },
    { id: "alcohol", label: "ALCOHOL",        sub: "夜もゆっくり" },
  ];

  return (
    <section id="menu" className="py-24 md:py-32 px-6 bg-bg-section">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <SectionTitle en="MENU" ja="メニュー" center />

        {/* タブ */}
        <div className="flex flex-col sm:flex-row gap-1 border border-gold/20">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 py-4 px-4 flex flex-col items-center gap-1 transition-all duration-200 ${
                tab === t.id
                  ? "bg-gold text-bg-dark"
                  : "bg-transparent text-cream-dim hover:text-cream"
              }`}
            >
              <span className="font-display tracking-widest text-sm">{t.label}</span>
              <span className={`text-xs font-body ${tab === t.id ? "text-bg-dark/70" : "text-cream-dim/50"}`}>{t.sub}</span>
            </button>
          ))}
        </div>

        {/* タブコンテンツ */}
        <AnimatePresence mode="wait">
          {tab === "morning" && (
            <motion.div
              key="morning"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-10"
            >
              <div className="flex flex-col gap-4">
                <p className="font-display tracking-widest text-gold text-sm border-b border-gold/20 pb-2">
                  DRINK MENU
                </p>
                <DrinkGrid items={morningDrinks} />
                <p className="font-body text-xs text-cream-dim/50">☆ はホット・アイス対応</p>
              </div>
              {morningToast.map((cat) => (
                <CategoryBlock key={cat.label} label={cat.label} items={cat.items} />
              ))}
            </motion.div>
          )}

          {tab === "lunch" && (
            <motion.div
              key="lunch"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-10"
            >
              <div className="flex flex-col gap-4">
                <p className="font-display tracking-widest text-gold text-sm border-b border-gold/20 pb-2">
                  PASTA & MAIN
                </p>
                <PastaGrid items={pastaItems} />
              </div>
              <div className="bg-bg-card border border-gold/15 p-5">
                <p className="font-body text-xs text-cream-dim/60 mb-5">
                  ※ パスタ・オムライスご注文のお客様限定セットメニュー
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  {setAddons.map((cat) => (
                    <CategoryBlock key={cat.label} label={cat.label} items={cat.items} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {tab === "alcohol" && (
            <motion.div
              key="alcohol"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid sm:grid-cols-2 gap-8"
            >
              {alcoholCategories.map((cat) => (
                <CategoryBlock key={cat.label} label={cat.label} items={cat.items} />
              ))}
              <p className="sm:col-span-2 font-body text-xs text-cream-dim/50">
                ※ ハイボール・サワー・焼酎はメガジョッキ・キングジョッキあり。詳しくはスタッフまで。
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
