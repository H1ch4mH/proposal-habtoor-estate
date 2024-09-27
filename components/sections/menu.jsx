import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, SearchIcon, VideoIcon } from "lucide-react";

function Menu() {
  return (
    <nav className="z-40  p-1 shadow-sm bg-white fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={180} height={90} />
        </Link>
        <div className="flex items-center space-x-8 text-xs">
          <span className="text-xs uppercase  tracking-wider hover:text-green-600 cursor-pointer">
            EN
          </span>
          <Link
            href=""
            className="flex gap-2 items-center hover:text-green-600"
          >
            <VideoIcon size={16} />
            <span className="text-xs uppercase tracking-wider">
              Instant video call
            </span>
          </Link>
          <Link
            href=""
            className="flex gap-2 items-center text-black  hover:text-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 800"
              className="w-3 h-3 fill-current"
            >
              <path
                strokeWidth={0}
                d="M591.96,459.69c-1.56-.75-59.88-29.47-70.24-33.2-4.23-1.52-8.76-3-13.58-3-7.88,0-14.49,3.92-19.64,11.63-5.83,8.66-23.46,29.28-28.91,35.43-.71.81-1.68,1.78-2.26,1.78-.52,0-9.55-3.72-12.28-4.9-62.56-27.18-110.05-92.53-116.56-103.55-.93-1.58-.97-2.3-.98-2.3.23-.84,2.33-2.95,3.42-4.04,3.18-3.14,6.62-7.29,9.95-11.29,1.58-1.9,3.16-3.8,4.71-5.59,4.83-5.62,6.98-9.98,9.48-15.04l1.31-2.63c6.09-12.1.89-22.3-.79-25.6-1.38-2.76-26.01-62.19-28.62-68.44-6.3-15.07-14.62-22.08-26.18-22.08-1.07,0,0,0-4.5.19-5.48.23-35.31,4.16-48.5,12.47-13.99,8.82-37.65,36.93-37.65,86.36,0,44.49,28.23,86.5,40.36,102.48.3.4.85,1.22,1.66,2.39,46.42,67.8,104.3,118.04,162.96,141.48,56.48,22.56,83.23,25.17,98.43,25.17h0c6.39,0,11.5-.5,16.02-.95l2.86-.27c19.51-1.73,62.39-23.95,72.14-51.05,7.68-21.35,9.71-44.67,4.6-53.14-3.5-5.76-9.54-8.65-17.17-12.32Z"
              />
              <path
                strokeWidth={0}
                d="M407.1,0C190.44,0,14.17,174.95,14.17,389.98c0,69.55,18.61,137.63,53.87,197.22L.55,786.28c-1.26,3.71-.32,7.82,2.42,10.61,1.98,2.02,4.67,3.11,7.42,3.11,1.05,0,2.11-.16,3.15-.49l207.58-65.96c56.81,30.35,121.01,46.37,185.98,46.37,216.64,0,392.9-174.92,392.9-389.94S623.75,0,407.1,0ZM407.1,698.69c-61.14,0-120.36-17.65-171.26-51.06-1.71-1.12-3.7-1.7-5.7-1.7-1.06,0-2.12.16-3.15.49l-103.99,33.05,33.57-99.04c1.09-3.21.54-6.74-1.46-9.47-38.76-52.97-59.25-115.55-59.25-180.98,0-170.24,139.62-308.75,311.24-308.75s311.2,138.5,311.2,308.75c0,170.22-139.6,308.7-311.2,308.7Z"
              />
            </svg>
            <span className="text-xs uppercase tracking-wider">Whatsapp</span>
          </Link>
          <Link href="/" className="rounded  hover:text-green-600">
            <SearchIcon size={16} />
          </Link>
          <Link href="/" className="rounded  hover:text-green-600">
            <MenuIcon size={16} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
