import assets from "@trex/assets";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 bg-white w-full h-[80px] border-t-[1.5px] border-[#F1F6FC] shadow-[0_-5px_3px_-3px_#F1F6FC] flex justify-between px-5">
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
            0
          </div>
          <Image
            src={assets.StarbuckIcons.Cart2}
            alt="back"
            className="h-7 w-max"
          />
        </button>
        <p className="text-base text-[#EE1B1B80]/50 my-auto">Rp -</p>
      </div>
      <button className="btn bg-[#DAE1EE] text-white font-semibold my-auto  capitalize rounded-[50px] px-5">
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
