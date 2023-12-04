"use client";
import assets from "@trex/assets";
import Image from "next/image";
import React from "react";

export default function Sidebar() {
  return (
    <div className=" bg-white w-[30%] py-5">
      <h1 className="text-lg font-bold text-[#3C405F] text-center">Menus</h1>
      <div className="space-y-3 px-2 mt-1">
        <div>
          <h1 className="text-[#3C405F] text-sm font-semibold">
            Beverages (50)
          </h1>
          <div className="space-y-2 mt-1">
            <div className="flex space-x-4 p-2 border border-[#F2F3FF] drop-shadow-sm rounded-xl bg-info cursor-pointer h-[50px]">
              <div className="bg-success w-2 m-[-8px] rounded-tl-xl rounded-bl-xl"></div>
              <div className="bg- rounded-full m-auto p-0.5 h-[90%]">
                <Image
                  src={assets.StarbuckBeverages.BrewedCoffees}
                  alt="espresso"
                  className="w-6 h-6"
                />
              </div>

              <p className="text-xs text-[#3C405F] my-auto font-medium w-[50%] pr-2">
                Brewed Coffees
              </p>
            </div>

            <div className="flex p-2 space-x-4 border border-[#F2F3FF] drop-shadow-sm rounded-xl cursor-pointer h-[50px]">
              <div className="w-2 m-[-8px] rounded-tl-xl rounded-bl-xl"></div>
              <div className="h-[90%] m-auto p-0.5">
                <Image
                  src={assets.StarbuckBeverages.EspressoImage}
                  alt="espresso"
                  className="h-6 w-6"
                />
              </div>
              <p className="text-xs text-[#3C405F] my-auto font-medium w-[50%] pr-2">
                Espresso Beverage
              </p>
            </div>

            <div className="flex p-2 space-x-4 border border-[#F2F3FF] drop-shadow-sm rounded-xl cursor-pointer h-[50px]">
              <div className="w-2 m-[-8px] rounded-tl-xl rounded-bl-xl"></div>
              <div className="h-[90%] p-0.5">
                <Image
                  src={assets.StarbuckBeverages.EspressoImage}
                  alt="espresso"
                  className="h-6 w-6"
                />
              </div>
              <p className="text-xs text-[#3C405F] my-auto font-medium w-[50%] pr-2">
                Blended Coffee
              </p>
            </div>

            <div className="flex p-2 space-x-4 border border-[#F2F3FF] drop-shadow-sm rounded-xl cursor-pointer h-[50px]">
              <div className="w-2 m-[-8px] rounded-tl-xl rounded-bl-xl"></div>
              <div className="h-[90%] p-0.5">
                <Image
                  src={assets.StarbuckBeverages.EspressoImage}
                  alt="espresso"
                  className="h-6 w-6"
                />
              </div>
              <p className="text-xs text-[#3C405F] my-auto font-medium w-[50%] pr-2">
                Blended Cream
              </p>
            </div>

            <div className="flex p-2 space-x-4 border border-[#F2F3FF] drop-shadow-sm rounded-xl cursor-pointer h-[50px]">
              <div className="w-2 m-[-8px] rounded-tl-xl rounded-bl-xl"></div>
              <div className="h-[90%] p-0.5">
                <Image
                  src={assets.StarbuckBeverages.EspressoImage}
                  alt="espresso"
                  className="h-6 w-6"
                />
              </div>
              <p className="text-xs text-[#3C405F] my-auto font-medium w-[50%] pr-2">
                Blended Juice
              </p>
            </div>

            <div className="flex p-2 space-x-4 border border-[#F2F3FF] drop-shadow-sm rounded-xl cursor-pointer h-[50px]">
              <div className="w-2 m-[-8px] rounded-tl-xl rounded-bl-xl"></div>
              <div className="h-[90%] p-0.5">
                <Image
                  src={assets.StarbuckBeverages.EspressoImage}
                  alt="espresso"
                  className="h-6 w-6"
                />
              </div>
              <p className="text-xs text-[#3C405F] my-auto font-medium w-[50%] pr-2">
                Chocolate & Milk
              </p>
            </div>

            <div className="flex p-2 space-x-4 border border-[#F2F3FF] drop-shadow-sm rounded-xl cursor-pointer h-[50px]">
              <div className="w-2 m-[-8px] rounded-tl-xl rounded-bl-xl"></div>
              <div className="h-[90%] p-0.5">
                <Image
                  src={assets.StarbuckBeverages.EspressoImage}
                  alt="espresso"
                  className="h-6 w-6"
                />
              </div>
              <p className="text-xs text-[#3C405F] my-auto font-medium w-[50%] pr-2">
                Tea Beverages
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[#3C405F] text-sm font-semibold">Foods (44)</h1>
          <div className="space-y-2 mt-1">
            <div className="flex p-2 space-x-4 border border-[#F2F3FF] drop-shadow-sm rounded-xl cursor-pointer h-[50px]">
              <div className="w-2 m-[-8px] rounded-tl-xl rounded-bl-xl"></div>
              <div className="h-[90%] p-0.5">
                <Image
                  src={assets.StarbuckFoods.Sandwich}
                  alt="foods"
                  className="h-6 w-6"
                />
              </div>
              <p className="text-xs text-[#3C405F] my-auto font-medium w-[50%] pr-2">
                Sandwich
              </p>
            </div>

            <div className="flex p-2 space-x-4 border border-[#F2F3FF] drop-shadow-sm rounded-xl cursor-pointer h-[50px]">
              <div className="w-2 m-[-8px] rounded-tl-xl rounded-bl-xl"></div>
              <div className="h-[90%] p-0.5">
                <Image
                  src={assets.StarbuckFoods.Sandwich}
                  alt="foods"
                  className="h-6 w-6"
                />
              </div>
              <p className="text-xs text-[#3C405F] my-auto font-medium w-[50%] pr-2">
                Baked
              </p>
            </div>

            <div className="flex p-2 space-x-4 border border-[#F2F3FF] drop-shadow-sm rounded-xl cursor-pointer h-[50px]">
              <div className="w-2 m-[-8px] rounded-tl-xl rounded-bl-xl"></div>
              <div className="h-[90%] p-0.5">
                <Image
                  src={assets.StarbuckFoods.Sandwich}
                  alt="foods"
                  className="h-6 w-6"
                />
              </div>
              <p className="text-xs text-[#3C405F] my-auto font-medium w-[50%] pr-2">
                Cakes
              </p>
            </div>

            <div className="flex p-2 space-x-4 border border-[#F2F3FF] drop-shadow-sm rounded-xl cursor-pointer h-[50px]">
              <div className="w-2 m-[-8px] rounded-tl-xl rounded-bl-xl"></div>
              <div className="h-[90%] p-0.5">
                <Image
                  src={assets.StarbuckFoods.Sandwich}
                  alt="foods"
                  className="h-6 w-6"
                />
              </div>
              <p className="text-xs text-[#3C405F] my-auto font-medium w-[50%] pr-2">
                Sandwich
              </p>
            </div>

            <div className="flex p-2 space-x-4 border border-[#F2F3FF] drop-shadow-sm rounded-xl cursor-pointer h-[50px]">
              <div className="w-2 m-[-8px] rounded-tl-xl rounded-bl-xl"></div>
              <div className="h-[90%] p-0.5">
                <Image
                  src={assets.StarbuckFoods.Sandwich}
                  alt="foods"
                  className="h-6 w-6"
                />
              </div>
              <p className="text-xs text-[#3C405F] my-auto font-medium w-[50%] pr-2">
                Grab & Co
              </p>
            </div>

            <div className="flex p-2 space-x-4 border border-[#F2F3FF] drop-shadow-sm rounded-xl cursor-pointer h-[50px]">
              <div className="w-2 m-[-8px] rounded-tl-xl rounded-bl-xl"></div>
              <div className="h-[90%] p-0.5">
                <Image
                  src={assets.StarbuckFoods.Sandwich}
                  alt="foods"
                  className="h-6 w-6"
                />
              </div>
              <p className="text-xs text-[#3C405F] my-auto font-medium w-[50%] pr-2">
                Hotmeal
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2 py-3  pt-20">
          <div className="flex space-x-2 p-2 border border-[#F2F3FF] drop-shadow-sm rounded-xl cursor-pointer h-[50px]">
            <div className="rounded-full m-auto p-0.5 h-[90%]">
              <Image
                src={assets.StarbuckIcons.ArrowUp}
                alt="espresso"
                className="w-6 h-6"
              />
            </div>

            <p
              className="text-xs text-[#3C405F] my-auto font-medium w-[70%] pr-2"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              Go to top
            </p>
          </div>
          <div className="flex space-x-2 p-2 border border-[#F2F3FF] drop-shadow-sm rounded-xl cursor-pointer h-[50px]">
            <div className="rounded-full m-auto p-0.5 h-[90%]">
              <Image
                src={assets.StarbuckIcons.ArrowDown}
                alt="espresso"
                className="w-6 h-6"
              />
            </div>

            <p className="text-xs text-[#3C405F] my-auto font-medium w-[70%] pr-2">
              Go to bottom
            </p>
          </div>

          <button className="btn text-white bg-[#242424] rounded-[30px] p-2 capitalize w-full text-xs sm:text-base font-semibold mt-1">
            <Image
              src={assets.StarbuckIcons.Search}
              alt="espresso"
              className="w-6 h-6"
            />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
