"use client";

import assets from "@trex/assets";
import Image from "next/image";
import { CountCart } from "./components/CountCart";
import useCart from "@trex/stores/cart";
import clsx from "clsx";

export default function Footer() {
  const { carts } = useCart();
  return (
    <footer className="sticky bottom-0 bg-white w-full h-[80px] border-t-[1.5px] border-[#F1F6FC] shadow-[0_-5px_3px_-3px_#F1F6FC] flex justify-between px-5 z-40">
      <CountCart />
      <button
        disabled={carts.length === 0}
        className={clsx(
          `btn !text-white font-semibold my-auto capitalize rounded-[50px] px-5`,
          carts.length === 0 ? "!bg-[#DAE1EE]" : "!bg-success"
        )}
      >
        Checkout{" "}
        <Image
          src={assets.StarbuckIcons.ArrowRight}
          alt="checkout-arrow"
          className="h-7 w-7"
        />
      </button>
    </footer>
  );
}
