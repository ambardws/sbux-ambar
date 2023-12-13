"use client";

import assets from "@trex/assets";
import { BottomSheet } from "@trex/components/BottomSheet/BottomSheet";
import useCart from "@trex/stores/cart";
import { numberFormat } from "@trex/utils/format";
import Image from "next/image";
import React, { useState } from "react";

export const CountCart = () => {
  const { carts, subtotal } = useCart();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
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
      <button
        className="btn rounded-full h-max p-2 bg-success relative"
        onClick={() => setOpen(!open)}
      >
        <div className="px-1 rounded-full absolute top-0 right-0 bg-error text-xs text-white">
          {carts.length}
        </div>
        <Image
          src={assets.StarbuckIcons.Cart2}
          alt="back"
          className="h-7 w-max"
        />
      </button>

      <BottomSheet open={open} handleClose={handleClose} />
      {subtotal === 0 ? (
        <p className="text-base text-[#EE1B1B80]/50 my-auto">Rp -</p>
      ) : (
        <p className="text-base text-error font-semibold my-auto">
          {numberFormat({
            num: subtotal,
            opt: { style: "currency" },
          })}
        </p>
      )}
    </div>
  );
};
