"use client";
import assets from "@trex/assets";
import { useOnboardingStore } from "@trex/stores/onboarding";
import Image from "next/image";
import React from "react";

export const Onboarding = () => {
  const { setOnboarding } = useOnboardingStore();
  document.body.style.overflow = "hidden";
  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <Image
        src={assets.StarbuckImages.Onboarding1}
        alt="onboarding"
        className="h-[85vh] fade-out-image"
      />
      <button
        onClick={() => setOnboarding()}
        className="btn bg-success text-white font-medium rounded-[50px] capitalize w-1/4 -mt-10 z-10"
      >
        Order Now
      </button>
      <div className="flex mt-5 w-full px-10">
        <div className="space-x-5 flex">
          <Image
            src={assets.StarbuckImages.LogoStarbuck}
            alt="logo"
            className="w-[50px] h-[50px] my-auto"
          />
          <div className="bg-[#3C405F] min-w-[2px] my-2"></div>
          <div>
            <h6 className="font-medium">STARBUCKS</h6>
            <p className="text-xs">
              Jl. Gading Serpong Boulevard Blok B4, Curug Sangereng, Kec. Klp.
              Dua, Kabupaten Tangerang, Banten 15810
            </p>
            <p className="text-xs">Buka : Senin - Minggu 10.00 s/d 20.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
