import React from "react";
import Image from "next/image";
function MiscSection1() {
  return (
    <section className="z-20 bg-white flex py-16">
      <div className="container mx-auto px-4 py-8 max-w-screen-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-12">
            <h2 className="text-3xl mb-3 mt-6 font-serif font-light leading-normal">
              For those who seek a lifestyle of luxury and comfort, Al Habtoor
              Real Estate is your gateway.
            </h2>
            <p className="pre-title text-sm mb-4 text-zinc-500 pl-16 mt-4 font-sans leading-relaxed">
              Experience exclusivity with Al Habtoor Real Estate’s premium
              properties, located in the most prestigious areas. Each home is a
              masterpiece of design and craftsmanship, offering unmatched luxury
              and privacy.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-16 mt-4 md:-mt-16 ">
            <Image
              src="/al-wasl.jpg"
              alt="Luxury House"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiscSection1;
