"use client";
import assets from "@trex/assets";
import Image from "next/image";
import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";
import { MenusBeverages, MenusFoods } from "@trex/stores/DataTemp/menus";
import { useProductStore } from "@trex/stores/products";

export default function Sidebar() {
  const { products } = useProductStore();
  const [active, setActive] = useState("");
  const [countBeverages, setCountBeverages] = useState(0);
  const [countFoods, setCountFoods] = useState(0);

  const countMenus = () => {
    const data: any = products[0];
    let countB = 0;
    let countF = 0;
    data?.forEach((item: Products) => {
      if (item.menus === "Beverages") {
        countB += 1;
        setCountBeverages(countB);
      } else {
        countF += 1;
        setCountFoods(countF);
      }
    });
  };

  const handleActive = (name: string) => {
    setActive(name);
  };

  useEffect(() => {
    countMenus();
  }, []);

  return (
    <div className=" bg-white w-[25%] py-5 relative min-h-[1200px] max-h-max">
      <h1 className="text-lg font-bold text-[#3C405F] text-center">Menus</h1>

      <div className="space-y-3 px-2 mt-1">
        <div>
          <h1 className="text-[#3C405F] text-sm font-semibold">
            Beverages ({countBeverages})
          </h1>

          <div className="space-y-2 mt-1">
            {MenusBeverages.map((menu, index) => (
              <div key={index}>
                <Link
                  to={menu.name}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-80}
                  duration={500}
                  onClick={() => handleActive(menu.name)}
                >
                  <div
                    className={`flex p-2 space-x-4 border border-[#F2F3FF] drop-shadow-sm rounded-xl cursor-pointer h-[50px] ${
                      active === menu.name ? "bg-info" : "bg-white"
                    }`}
                  >
                    <div
                      className={`w-2 m-[-8px] rounded-tl-xl rounded-bl-xl ${
                        active === menu.name ? "bg-success" : ""
                      }`}
                    ></div>
                    <div
                      className={`h-[90%] m-auto p-0.5 ${
                        active === menu.name ? "rounded-full" : ""
                      }`}
                    >
                      <Image
                        src={menu.image}
                        alt={menu.name}
                        className="h-6 w-6"
                      />
                    </div>
                    <p className="text-xs text-[#3C405F] my-auto font-medium w-[50%] pr-2">
                      {menu.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-[#3C405F] text-sm font-semibold">
            Foods ({countFoods})
          </h1>
          <div className="space-y-2 mt-1">
            {MenusFoods.map((menu, index) => (
              <div key={index}>
                <Link
                  to={menu.name}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-80}
                  duration={500}
                  onClick={() => handleActive(menu.name)}
                >
                  <div
                    className={`flex p-2 space-x-4 border border-[#F2F3FF] drop-shadow-sm rounded-xl cursor-pointer h-[50px] ${
                      active === menu.name ? "bg-info" : ""
                    }`}
                  >
                    <div
                      className={`w-2 m-[-8px] rounded-tl-xl rounded-bl-xl ${
                        active === menu.name ? "bg-success" : ""
                      }`}
                    ></div>
                    <div
                      className={`h-[90%] m-auto p-0.5${
                        active === menu.name ? "rounded-full" : ""
                      }`}
                    >
                      <Image
                        src={menu.image}
                        alt={menu.name}
                        className="h-6 w-6"
                      />
                    </div>
                    <p className="text-xs text-[#3C405F] my-auto font-medium w-[50%] pr-2">
                      {menu.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-2 py-3 px-2 absolute bottom-0 w-full">
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
  );
}
