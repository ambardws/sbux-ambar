"use client";
import assets from "@trex/assets";
import { useOnboardingStore } from "@trex/stores/onboarding";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeaderHome() {
  const router = useRouter();
  const handleCancel = () => {
    router.push("/");
    setOnboarding();
  };
  const { setOnboarding } = useOnboardingStore();
  return (
    <header className="flex h-[70px] bg-white shadow-[0_5px_3px_-3px_#7090B026] items-center sticky w-full top-0 z-10">
      <div className="flex flex-1 justify-between px-5">
        <Image
          src={assets.StarbuckIcons.StarbuckLogo}
          alt="starbuck-logo"
          className="h-8 sm:h-10 w-max"
        />
        <h1 className="text-sm sm:text-lg font-medium my-auto text-[#3C405F]">
          Choose Menu
        </h1>
        <button
          onClick={() => handleCancel()}
          className="bg-[#FCC8CE] h-max py-2 px-5 text-primary text-sm font-medium rounded-[50px]"
        >
          Cancel
        </button>
      </div>
    </header>
  );
}
