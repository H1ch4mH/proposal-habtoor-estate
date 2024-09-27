import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";
function Subscribe() {
  return (
    <section className="z-20 bg-white py-32">
      <div className="container max-w-prose mx-auto">
        <h2 className="font-serif text-3xl text-center">Looking for a House</h2>

        <p className="font-sans text-sm max-w-prose mt-8 tracking-wide">
          Leave us your contact details and we’ll get back to you soon.
        </p>

        <div className="flex flex-row space-x-8 mt-8">
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
        </div>
        <div className="flex flex-col space-y-4 mt-4">
          <Input type="email" placeholder="Email" />
        </div>
        <div className="flex items-start space-x-4 mt-8 px-8">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-xs font-sans -mt-1 tracking-wide leading-relaxed text-slate-700 "
          >
            I consent to Al Habtoor Real Estate sending me electronic
            communications so that Al Habtoor Real Estate can keep me informed
            of upcoming promotions and exclusive offers and to conduct marketing
            research.
          </label>
        </div>

        <div className="mt-8 justify-end flex">
          <Button className="px-12 rounded-none my-4 w-fituppercase text-xs  tracking-wider text-[10px] w-fit uppercase bg-white/10 hover:bg-white text-black hover:text-green-500 hover:border-green-500 border-black/50 border">
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
