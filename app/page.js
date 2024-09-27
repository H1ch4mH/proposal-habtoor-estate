import Image from "next/image";
import Menu from "@/components/sections/menu";
import HomeHeroSection from "@/components/sections/home-hero";
import MiscSection1 from "@/components/sections/home-misc-section-1";
import Communities from "@/components/sections/communities";
import Cta1 from "@/components/sections/cta-1";
import Properties from "@/components/sections/properties";
import FeaturedProject from "@/components/sections/featured-project";
import Stories from "@/components/sections/stories";
import NewsSection from "@/components/sections/news-section";
import Subscribe from "@/components/sections/subscribe";
import Footer from "@/components/sections/footer";
export default function Home() {
  return (
    <>
      <div className="xl:hidden flex flex-col w-full min-h-screen  items-center justify-center">
        Desktop Only
        <br /> Mobile Not Supported Yet
      </div>
      <div className="hidden xl:flex flex-col min-h-screen h-screen">
        <Menu />
        <HomeHeroSection />

        <MiscSection1 />
        <Communities />
        <Cta1 />
        <Properties />
        <FeaturedProject />
        <Stories />
        <NewsSection />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}

const LatestProjects = () => {
  return (
    <section className="bg-white z-20 min-h-screen w-full">
      LatesProjects
    </section>
  );
};

const ContactUs = () => {
  return <section className="min-h-screen w-full">Contact US</section>;
};
