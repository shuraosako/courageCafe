import Loader from "@/components/ui/Loader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FireKingSection from "@/components/sections/FireKingSection";
import MenuSection from "@/components/sections/MenuSection";
import GallerySection from "@/components/sections/GallerySection";
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
        <AccessSection />
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}
