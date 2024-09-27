import React from "react";
import { Button } from "../ui/button";

function Cta1() {
  return (
    <section className="z-20 bg-white py-16">
      <div className="max-w-screen-lg bg-black py-8 px-16 mx-auto flex justify-between items-center">
        <span className="text-white uppercase tracking-widest text-xs font-semibold">
          Find your perfect home
        </span>
        <Button className="text-[10px] font-sans bg-white uppercase rounded-none text-black px-8 hover:bg-white hover:text-green-500 ">
          Contact us
        </Button>
      </div>
    </section>
  );
}

export default Cta1;
