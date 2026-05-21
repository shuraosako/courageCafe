import Loader from "@/components/ui/Loader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FireKingSection from "@/components/sections/FireKingSection";
import MenuSection from "@/components/sections/MenuSection";
import GallerySection from "@/components/sections/GallerySection";
import MerchandiseSection from "@/components/sections/MerchandiseSection";
import AccessSection from "@/components/sections/AccessSection";
import InstagramSection from "@/components/sections/InstagramSection";

export default function Home() {
  return (
    <>
      <Loader />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FireKingSection />
        <MenuSection />
        <GallerySection />
        <MerchandiseSection />
        <AccessSection />
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}
