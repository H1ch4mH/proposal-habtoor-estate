import React from "react";
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
import { Button } from "../ui/button";
function Communities() {
  return (
    <section className="z-20 bg-cream py-16">
      <h2 className="font-serif text-3xl text-center">Communities</h2>
      <CarouselSize />
    </section>
  );
}

function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-screen-lg mx-auto my-16"
    >
      <CarouselContent>
        {communities.map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/2 flex flex-col pl-16"
          >
            <CommunityItem index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden" />
      <CarouselNext className="hidden" />
    </Carousel>
  );
}

const communities = [
  {
    title: "Al Habtoor City",
    description:
      "Experience exclusivity with Al Habtoor Real Estate’s premium properties, located in the most prestigious areas",
    extra: "Dubai city",
    image: "/al-habtoor-city.avif",
  },
  {
    title: "Al Habtoor Polo Resort",
    description:
      "Experience exclusivity with Al Habtoor Real Estate’s premium properties, located in the most prestigious areas",
    extra: "Dubai city",
    image: "/al-habtoor-polo-resort-club-8.webp",
  },
];
function CommunityItem({ index }) {
  return (
    <>
      {/* <Card> */}
      {/* <CardContent className="flex  items-center justify-center p-6"> */}

      <AspectRatio ratio={4 / 5}>
        <Image
          src={communities[index % 2].image}
          width={1200}
          height={1200}
          alt={communities[index % 2].title}
          className="w-full h-full object-cover "
          quality={100}
        />
      </AspectRatio>

      <span className="font-sans text-xs mt-4 uppercase tracking-wider text-slate-500">
        {communities[index % 2].extra}
      </span>

      <span className="font-serif text-2xl mt-4">
        {communities[index % 2].title}
      </span>
      <span className="font-sans text-sm my-2 text-slate-700">
        {communities[index % 2].description}
      </span>

      <Button className="px-12 rounded-none my-4 w-fituppercase text-xs  tracking-wider text-[10px] w-fit uppercase bg-white/10 hover:bg-white text-black hover:text-green-500 hover:border-green-500 border-black/50 border">
        Discover More
      </Button>
      {/* </CardContent> */}
      {/* </Card> */}
    </>
  );
}
export default Communities;
