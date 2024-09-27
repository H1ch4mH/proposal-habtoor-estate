import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const news = [
  {
    title:
      "Al Habtoor Real Estate Honours Top Performing Brokers at Brokers' Performance Awards 2024",
  },
  {
    title:
      "Al Habtoor Group Unveils the Epitome of Luxury Living with the Launch of Habtoor Grand Residences",
  },
  {
    title:
      "Al Habtoor Group Redefines Opulence with the Launch of Ultra Residences & Sky Villas at Al Habtoor Tower",
  },
];

const NewsSection = () => {
  return (
    <section className="z-20 bg-cream py-32">
      <div className="max-w-screen-xl mx-auto flex flex-row">
        <div className="basis-1/2 items-center justify-center flex">
          <div className="flex flex-col gap-2">
            <h2 className="text-6xl font-serif">News</h2>
            <p className="font-sans text-sm tracking-wide text-slate-800">
              Discover firsthand the exclusive events, and special offers.
            </p>
          </div>
        </div>
        <div className="basis-1/2 ">
          <CarouselOrientation />
        </div>
      </div>
    </section>
  );
};
export default NewsSection;

function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full "
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2 w-full">
            <div className="p-1">
              <div className=" flex items-center space-x-4 rounded-md  p-4 select-none bg-white/90">
                {/* <span className="text-3xl font-semibold">{index + 1}</span>
                 */}
                <Link
                  href=""
                  className="text-sm font-sans  tracking-wide text-slate-800 leading-normal"
                >
                  {news[index % 3].title}
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
