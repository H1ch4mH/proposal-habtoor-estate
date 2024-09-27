"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Button } from "../ui/button";
import { ScanIcon, Share2Icon } from "lucide-react";

function HomeHeroSection() {
  return (
    <>
      <section className="heros w-full fixed z-0">
        <video
          className="hero-video min-h-screen w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/home-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <HeroOverlay />
    </>
  );
}

const HeroOverlay = () => {
  const refRoot = useRef(null);
  const refH2One = useRef(null);
  const refH2Two = useRef(null);
  const refP2 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(refRoot.current, {
        opacity: 0,
        duration: 1,
        y: 20,
        scrollTrigger: {
          trigger: refRoot.current,
          start: "top bottom",
          toggleActions: "restart none none reverse",
        },
        ease: "power4.inAndOut",
      });
      gsap.from(refH2One.current, {
        opacity: 0,
        // duration: 1,
        xPercent: 120,
        scrollTrigger: {
          trigger: refRoot.current,
          start: "top bottom",
          toggleActions: "restart none none reverse",
        },
        ease: "power4.inAndOut",
      });
      gsap.from(refH2Two.current, {
        opacity: 0,
        // duration: 1,
        xPercent: -120,
        scrollTrigger: {
          trigger: refRoot.current,
          start: "top bottom",
          toggleActions: "restart none none reverse",
        },
        ease: "power4.inAndOut",
      });
      gsap.from(refP2.current, {
        opacity: 0,
        // duration: 1,
        y: -120,
        scrollTrigger: {
          trigger: refP2.current,
          start: "top bottom",
          toggleActions: "restart none none reverse",
        },
        ease: "power4.inAndOut",
      });
    }, refRoot);
    return () => ctx.revert();
  }, [refRoot, refH2One]);
  return (
    <div className="w-full min-h-screen flex items-center justify-center text-center bg-from-black z-20 bg-gradient-to-t from-black  to-transparent text-white relative">
      <div className="flex flex-col gap-16">
        <p
          className="font-sans text-xs uppercase leading-6 tracking-widest"
          ref={refRoot}
        >
          Welcome to Al Habtoor Real Estate
        </p>
        <div>
          <h2 className="text-8xl font-serif" ref={refH2One}>
            Unmatched dedication.
          </h2>
          <h2 className="text-8xl  font-serif" ref={refH2Two}>
            Exceptional value.
          </h2>
        </div>
        <p
          className="max-w-sm mt-8 mx-auto font-sans color-1 text-xs uppercase leading-6 tracking-widest"
          ref={refP2}
        >
          Al Habtoor Real Estate offers a diverse range of properties, from
          modern offices to luxury villas. Since 1993, Al Habtoor Real Estate
          has provided expert service across the UAE and beyond as part of the
          Al Habtoor Group.
        </p>
      </div>

      <div className="absolute bottom-32 right-32 space-x-4">
        <Button className="bg-white text-black text-[10px] uppercase tracking-wider rounded-none space-x-2 hover:bg-white hover:text-green-500 ">
          <span>View Gallery</span>
          <ScanIcon size={12} />
        </Button>
        <Button className="bg-white text-black text-[10px] uppercase tracking-wider rounded-none space-x-2 hover:bg-white hover:text-green-500 ">
          <span>Share</span>
          <Share2Icon size={12} />
        </Button>
      </div>
    </div>
  );
};
export default HomeHeroSection;
