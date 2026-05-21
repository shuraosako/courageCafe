"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-bg-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <Image
              src="/images/ロゴ.jpg"
              alt="COURAGE CAFÉ"
              width={160}
              height={160}
              className="rounded-full opacity-90"
              priority
            />
            <p
              className="font-display text-2xl tracking-[0.3em] text-gold"
              style={{ letterSpacing: "0.3em" }}
            >
              COURAGE CAFÉ
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
