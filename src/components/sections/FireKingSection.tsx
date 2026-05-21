"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FireKingSection() {
  return (
    <section id="fireking" className="py-24 md:py-32 px-6 bg-bg-dark overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* 写真グループ — ずらし配置 */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* メイン写真 */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/Fireking.jpg"
                alt="Fire King コレクション"
                fill
                className="object-cover"
              />
            </div>
            {/* サブ写真 — 右下にはみ出す */}
            <div className="absolute -bottom-8 -right-6 w-2/5 aspect-square overflow-hidden border-2 border-bg-dark">
              <Image
                src="/images/なんか皿.jpg"
                alt="Fire King の器"
                fill
                className="object-cover"
              />
            </div>
            {/* ステンドランプ写真 — 左上 */}
            <div className="absolute -top-6 -left-6 w-1/3 aspect-square overflow-hidden border-2 border-bg-dark">
              <Image
                src="/images/ステンドランプ.jpg"
                alt="ステンドグラスランプ"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* テキスト */}
          <div className="flex flex-col gap-8 md:pl-8">
            <SectionTitle en="FIRE KING" ja="Fire Kingとは" />

            <motion.div
              className="flex flex-col gap-5 font-body text-cream-dim leading-[2] text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <p>
                Fire King が誕生したのは 1940 年代のこと。当時は一般家庭向けの
                キッチンウェアとして、またレストランやダイナーの業務用食器として
                大量に生産されました。
              </p>
              <p>
                ぽってりとしたミルクガラスは肉厚で頑丈。かわいい見た目とは裏腹に、
                ちょっとぶつけたぐらいでは割れない。もともと家庭用として作られているから、
                シーンを作り込まなくても、自然と空間に溶け込む。
              </p>
              <p>
                色やフォルム、デザインのバリエーションは何千と存在し、
                誕生から 80 年経った今でも、時代を超えて人を惹きつける
                不思議なパワーがあります。
              </p>
            </motion.div>

            {/* ハイライト */}
            <motion.div
              className="bg-bg-card border border-gold/20 px-6 py-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="font-display text-gold tracking-widest text-sm mb-2">
                ★ COURAGE CAFÉ のこだわり
              </p>
              <p className="font-body text-cream-dim text-sm leading-relaxed">
                Hot コーヒーをご注文のお客様は、豊富に揃えた Fire King のマグから
                お好きなデザインをお選びいただけます。
                ご希望の際はご注文時にお申し付けください。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
