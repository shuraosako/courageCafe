"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "ABOUT",    href: "#about"    },
  { label: "FIREKING", href: "#fireking" },
  { label: "MENU",     href: "#menu"     },
  { label: "GALLERY",  href: "#gallery"  },
  { label: "ACCESS",   href: "#access"   },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bg-dark/95 backdrop-blur-sm border-b border-gold/10" : ""
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.9, duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <Image
            src="/images/ロゴ.jpg"
            alt="COURAGE CAFÉ"
            width={36}
            height={36}
            className="rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <span className="font-display text-cream tracking-widest text-lg hidden sm:block">
            COURAGE CAFÉ
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-sm tracking-widest text-cream-dim hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Instagram link */}
        <a
          href="https://www.instagram.com/courage_cafe_fukuoka/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block font-display text-xs tracking-widest border border-gold/40 text-gold px-4 py-2 hover:bg-gold hover:text-bg-dark transition-all duration-200"
        >
          INSTAGRAM
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.nav
          className="md:hidden bg-bg-dark border-t border-gold/10 px-6 py-6 flex flex-col gap-5"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-lg tracking-widest text-cream-dim hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/courage_cafe_fukuoka/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm tracking-widest text-gold"
          >
            INSTAGRAM ↗
          </a>
        </motion.nav>
      )}
    </motion.header>
  );
}
