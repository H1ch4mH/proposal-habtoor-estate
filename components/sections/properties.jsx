import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import FeaturedProperties from "./featured-properties";

function Properties() {
  return (
    <section className="z-20 pb-16 bg-white">
      <div className="container  flex flex-col  max-w-screen-xl mx-auto justify-center items-center">
        <h2 className="font-serif text-3xl text-center">Properties</h2>
        <p className="max-w-prose text-center text-sm text-slate-700 mt-8 tracking-wider  leading-relaxed">
          Dive into the world of elegance with Al Habtoor Real Estate. Our
          carefully curated portfolio showcases a variety of properties that
          blend luxurious living with modern amenities.
        </p>

        <Button className="mt-16 text-[10px] font-sans   uppercase bg-black rounded-none text-white px-8 hover:bg-white hover:text-green-500 ">
          View Portfolio Map
        </Button>
      </div>

      <FeaturedProperties />
    </section>
  );
}

export default Properties;
