import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const stories = [
  {
    title: " Living the Dream at Marina Promenade",
    description:
      "Julia and Mark share their experiences moving to Marina Promenade, where they’ve embraced a lifestyle upgrade with stunning waterfront views and a bustling community at their doorstep.",
    image: "/dubai-marina-promenade.jpg",
  },
  {
    title: "Family First in Al Habtoor City",
    description:
      "The Ali family details their journey to finding the perfect family-oriented environment in Al Habtoor City, praising the child-friendly spaces and exceptional amenities that enrich their daily lives.",
    image: "/winter-garden-6.avif",
  },
  {
    title: "A Haven of Peace in Oasis Villas",
    description:
      "Emma recounts finding her serene sanctuary at Oasis Villas, where the blend of tranquility and luxury amid lush greenery offers a daily dose of rejuvenation.",
    image: "/stories-2-crop.jpg",
  },
];

function Stories() {
  return (
    <section className="z-20 bg-white py-16">
      <h2 className="font-serif text-3xl text-center">
        Stories From Our Residents
      </h2>
      <div className="flex flex-row w-full mx-auto max-w-screen-lg gap-8 mt-8">
        <div className="basis-1/2 flex flex-col">
          <AspectRatio ratio={1 / 1.4}>
            <Image
              src={stories[0].image}
              width={1024}
              height={768}
              alt={stories[0].title}
              className="w-full h-full object-cover"
            />
          </AspectRatio>
          <span className="font-serif text-xl mt-4 mb-2 cursor-pointe flex items-center cursor-pointer">
            {stories[0].title}
            <ArrowRightIcon size={18} className="ml-auto" />
          </span>
          <span className="font-sans text-sm leading-relaxed text-slate-700 tracking-wide cursor-pointer">
            {stories[0].description}
          </span>
        </div>
        <div className="basis-1/2 flex flex-col gap-4 ">
          <div className="flex flex-col">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={stories[1].image}
                width={1024}
                height={768}
                alt={stories[1].title}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
            <span className="font-serif text-xl mt-4 mb-2 cursor-pointer flex items-center">
              {stories[1].title}
              <ArrowRightIcon size={18} className="ml-auto" />
            </span>
            <span className="font-sans text-sm leading-relaxed text-slate-700 tracking-wide cursor-pointer">
              {stories[1].description}
            </span>
          </div>
          <div className="flex flex-col">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={stories[2].image}
                width={1024}
                height={768}
                alt={stories[2].title}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
            <span className="font-serif text-xl mt-4 mb-2 cursor-pointer flex items-center ">
              {stories[2].title}
              <ArrowRightIcon size={18} className="ml-auto" />
            </span>
            <span className="font-sans text-sm leading-relaxed text-slate-700 tracking-wide cursor-pointer">
              {stories[2].description}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;
