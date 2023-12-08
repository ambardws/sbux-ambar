"use client";

import assets from "@trex/assets";
import useCart from "@trex/stores/cart";
import Image from "next/image";
import React from "react";

export const CountCart = () => {
  const { carts } = useCart();
  return (
    <div className="flex space-x-3 py-2 my-auto">
      <button className="btn rounded-full h-max p-2 bg-[#242424]">
        <Image
          src={assets.StarbuckIcons.ArrowLeft}
          alt="back"
          className="h-7 w-max"
        />
      </button>
      <div className="bg-[#F1F6FC] min-w-[3px]"></div>
      <button className="btn rounded-full h-max p-2 bg-success relative">
        <div className="px-1 rounded-full absolute top-0 right-0 bg-error text-xs text-white">
          {carts.length}
        </div>
        <Image
          src={assets.StarbuckIcons.Cart2}
          alt="back"
          className="h-7 w-max"
        />
      </button>
      <p className="text-base text-[#EE1B1B80]/50 my-auto">Rp -</p>
    </div>
  );
};
