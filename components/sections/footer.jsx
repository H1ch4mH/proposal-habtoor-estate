import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <div className="z-20 bg-white w-full flex justify-center pb-16">
        <Image src="/logo.png" width={180} height={32} alt="logo" />
      </div>
      <footer className="z-20 bg-black flex flex-col text-white pt-8">
        <div className="container max-w-screen-lg mx-auto  flex flex-row justify-between">
          <div className="flex flex-col basis-1/3 font-sans text-xs tracking-wider">
            <span className="font-sans  text-zinc-500 uppercase text-xs tracking-wider mb-4">
              Contact
            </span>
            <Link href="" className="mb-1">
              +971 4584 1087
            </Link>
            <Link href="">customercare@alhabtoorrealestate.com</Link>
          </div>
          <div className="flex flex-col">
            <span className="font-sans  text-zinc-500 uppercase text-xs tracking-wider mb-4">
              More
            </span>
            <div className="grid grid-cols-2 gap-2 gap-x-8 font-sans text-xs tracking-wider uppercase">
              <Link href="">Communities</Link>
              <Link href="">Projects</Link>
              <Link href="">Properties</Link>
              <Link href="">Listing</Link>
              <Link href="">Media</Link>
              <Link href="">Contact</Link>
              <Link href="">Careers</Link>
            </div>
          </div>
        </div>
        <div className="mt-auto w-full  max-w-screen-lg  mx-auto font-sans text-xs text-white flex flex-row   py-2">
          <div className="flex flex-row space-x-4 items-center">
            <span className="cursor-pointer">
              <svg
                className="h-4 w-4 fill-white"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1168.737 487.897c44.672-41.401 113.824-36.889 118.9-36.663l289.354-.113 6.317-417.504L1539.65 22.9C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l62.045-451.233H1126.66v-69.152c0-54.937 14.214-96.112 42.078-122.058"
                  fillRule="evenodd"
                />
              </svg>
            </span>
            <span className="cursor-pointer">
              <svg
                className="h-8 w-8 fill-white"
                viewBox="0 -0.5 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="15.5"
                  y="9"
                  width="2"
                  height="2"
                  rx="1"
                  transform="rotate(-90 15.5 9)"
                  fill="#000000"
                />
                <rect
                  x="16"
                  y="8.5"
                  width="1"
                  height="1"
                  rx="0.5"
                  transform="rotate(-90 16 8.5)"
                  stroke="#000000"
                  stroke-linecap="round"
                />
              </svg>
            </span>

            <span className="cursor-pointer">
              <svg
                className="h-8 w-8 fill-white"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="  w-full  max-w-screen-lg  mx-auto font-sans text-xs text-white flex flex-row border-t border-gray-500 py-2 ">
          <span className="cursor-pointer text-zinc-400">
            Copyright © 2024 Al Habtoor Real Estate. All Right Reserved.
          </span>
          <span className="cursor-pointer ml-auto text-zinc-200">
            Legal Notice
          </span>
          <span className="cursor-pointer ml-2 text-zinc-200">
            Privacy Notice
          </span>
          <span className="cursor-pointer ml-2 text-zinc-200">Sitemap</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
