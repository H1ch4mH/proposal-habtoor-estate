"use client";
import React, { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Button } from "../ui/button";
import { Properties } from "@/components/sections/properties";
import { ArrowRightIcon } from "lucide-react";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function FeaturedProperties() {
  return (
    <>
      <h2 className="font-serif text-3xl text-center mt-32 mb-8">
        Featured Properties
      </h2>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
}

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [active, setActiveIndex] = useState(0);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const activeIndex = emblaApi.selectedScrollSnap();
      setActiveIndex(activeIndex);
      console.log("Active Slide Index:", activeIndex);
      // You can add additional logic here based on the active index
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect); // Clean up listener on unmount
    };
  }, [emblaApi]);
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <PropertyItem
              index={index}
              isActive={active !== index}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className="embla__controls max-w-screen-lg mx-auto flex flex-row justify-between items-center w-full">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <Button className="ml-auto  rounded-none  text-xs  tracking-wider text-[10px] w-fit uppercase bg-white/10 hover:bg-white text-black hover:text-green-500 hover:border-green-500 border-black/50 border-b px-2  shadow-none space-x-2 flex">
          <span>More Properties</span>
          <ArrowRightIcon size={12} />
        </Button>
        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

const properties = [
  {
    title: "The Residences, Al Habtoor Grand",
    location: "Dubai, UAE",
    image: "/ahc-residence-3.avif",
    description:
      "The Al Habtoor Polo Resort & Club is a new exclusive equestrian haven in the heart of Dubailand, offering unrivaled facilities for residents",
  },
  {
    title: "Emirates Oasis Villas - Jumeirah",
    location: "Dubai, UAE",
    image: "/jumeirah.jpg",
    description:
      "The Al Habtoor Polo Resort & Club is a new exclusive equestrian haven in the heart of Dubailand, offering unrivaled facilities for residents",
  },
  {
    title: "Al Habtoor Tower",
    location: "Dubai, UAE",
    image: "/al-habtoor-city.avif",
    description:
      "The Al Habtoor Polo Resort & Club is a new exclusive equestrian haven in the heart of Dubailand, offering unrivaled facilities for residents",
  },
];
function PropertyItem({ isActive, index }) {
  const { title, location, image, description } = properties[index % 3];
  return (
    <div
      className={cn(
        `embla__slide px-2 transition-opacity duration-300`,
        isActive ? "opacity-15" : "opacity-100"
      )}
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          src={image}
          width={1024}
          height={768}
          alt="title"
          className={cn("object-cover w-full h-full")}
        />
      </AspectRatio>
      <div
        className={cn(
          ` transition-opacity duration-300 flex flex-col max-w-prose`,
          isActive ? "opacity-15" : "opacity-100"
        )}
      >
        <span className="font-sans text-xs mt-4 uppercase tracking-wider text-slate-500">
          {location}
        </span>

        <span className="font-serif text-2xl mt-4">{title}</span>
        <span className="font-sans text-sm my-2 text-slate-700">
          {description}
          {/* {communities[index % 2].description} */}
        </span>

        <Button className="px-12 rounded-none my-4 w-fituppercase text-xs  tracking-wider text-[10px] w-fit uppercase bg-white/10 hover:bg-white text-black hover:text-green-500 hover:border-green-500 border-black/50 border">
          Discover More
        </Button>
      </div>
      {/* <div
        className={cn(
          `embla__slide__number border`,
          isActive ? "border border-red-500/50" : ""
        )}
      ></div> */}
    </div>
  );
}
export default FeaturedProperties;

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  );
};

/*
=-----------
*/

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

export const DotButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};
