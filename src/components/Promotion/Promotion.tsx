import assets from "@trex/assets";
import Image from "next/image";
import React from "react";

export default function Promotion() {
  return (
    <div className="space-y-3">
      <h1 className="text-[#3C405F] font-medium text-base">
        Package & Promotion
      </h1>
      <div className="flex space-x-3 overflow-x-auto no-scrollbar -mr-5 pb-2">
        <Image
          src={assets.StarbuckBanners.Banner1}
          alt="banner-1"
          className="h-32 w-64 rounded-[10px] drop-shadow-md"
        />
        <Image
          src={assets.StarbuckBanners.Banner2}
          alt="banner-2"
          className="h-32 w-64 rounded-[10px] drop-shadow-md"
        />
        <Image
          src={assets.StarbuckBanners.Banner3}
          alt="banner-3"
          className="h-32 w-64 rounded-[10px] !mr-5 drop-shadow-md"
        />
      </div>
    </div>
  );
}
