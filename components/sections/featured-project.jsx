"use client";
import React from "react";
import { Button } from "../ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const property = {
  location: "dubai",
  title: "Al Habtoor Tower",
  description:
    "As the latest addition to Al Habtoor City, Al Habtoor Tower offers 82 stories of exquisite, spacious apartment homes and all-inclusive luxury amenities to those longing to live in opulence.",
  image: "/be_view.jpg",
};
function FeaturedProject() {
  const { location, title, description, image } = property;
  return (
    <section className="z-20 bg-cream py-16">
      <h2 className="font-serif text-3xl text-center mb-8">Featured Project</h2>
      <div className="flex max-w-screen-lg mx-auto gap-8">
        <div className="basis-2/3 h-full ">
          <AspectRatio ratio={16 / 9} className="overflow-hidden">
            <Image
              src={image}
              width={1024}
              height={768}
              className="w-full h-full object-cover "
              alt={title}
            />
          </AspectRatio>
        </div>
        <div className="basis-1/3 flex flex-col ">
          <span className="uppercase text-sm tracking-wider text-slate-500 mb-2">
            {location}
          </span>
          <span className="font-serif text-2xl">{title}</span>
          <span className="font-sans text-sm my-2 text-slate-700 leading">
            {description}
          </span>
          <Button className="mt-auto px-12 rounded-none w-fituppercase text-xs  tracking-wider text-[10px] w-fit uppercase bg-white/10 hover:bg-white text-black hover:text-green-500 hover:border-green-500 border-black/50 border">
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
}

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 500, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="bg-green-400">
            <AspectRatio ratio={16 / 9} className="overflow-hidden">
              <div className="p-1">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </div>
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
/*

 <AspectRatio ratio={16 / 9} className="overflow-hidden">
            <Image
              src={image}
              width={1024}
              height={768}
              className="w-full h-full object-cover "
            />
          </AspectRatio>

          */
export default FeaturedProject;
