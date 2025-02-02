import { iHeroBanner } from "@/assets";
import Image from "next/image";
import React from "react";

function HeroBanner() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1920px] w-full px-[116px] flex">
        <div className="w-1/2 pr-[99px] flex flex-col justify-center">
          <h1 className="text-primary text-[90px] leading-[90px] font-medium bg-gray-50">
            Good Food Us Good Mood
          </h1>
          <div className="text-[28px] pt-[32px] text-gray">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </div>
          <div className="flex mt-[70px]">
            <button
              onClick={() => alert("click daftar sekaranng")}
              className="bg-primary px-[18px] py-[10px] rounded-full text-white cursor-pointer "
            >
              Daftar Sekarang
            </button>
            <button
              onClick={() => alert("click daftar sekaranng")}
              className="px-[18px] py-[10px] rounded-full text-black font-medium cursor-pointer bg-lightgray ml-[16px]"
            >
              About Us
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <Image
            className="w-full h-auto"
            src={iHeroBanner}
            alt="hero banner"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
