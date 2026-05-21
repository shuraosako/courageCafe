import Image from "next/image";
import { shopInfo } from "@/data/shopInfo";

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-gold/10 py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">
        <Image
          src="/images/ロゴ.jpg"
          alt="COURAGE CAFÉ"
          width={64}
          height={64}
          className="rounded-full opacity-60"
        />
        <p className="font-display text-2xl tracking-[0.3em] text-cream">
          COURAGE CAFÉ
        </p>
        <p className="font-body text-cream-dim text-sm leading-relaxed">
          {shopInfo.address}
          <br />
          TEL {shopInfo.tel}
          <br />
          定休日：{shopInfo.closed}
        </p>
        <a
          href={shopInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-xs tracking-widest text-gold hover:text-gold-light transition-colors"
        >
          {shopInfo.instagramHandle}
        </a>
        <p className="font-body text-xs text-cream-dim/40 mt-4">
          © {new Date().getFullYear()} COURAGE CAFÉ. Since 2025.
        </p>
      </div>
    </footer>
  );
}
