"use client";

import assets from "@trex/assets";
import { numberFormat } from "@trex/utils/format";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type OrdersCard = {
  index: number;
  order: MostOrdersInterface;
};

export default function MostOrders() {
  const [orders, setOrders] = useState<MostOrdersInterface[]>([]);

  const getMostOrders = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/most-orders");
      const res = await response.json();
      setOrders(res.data);
      console.log(orders);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const CardMostOrder = (props: OrdersCard) => {
    return (
      <div
        className={`card bg-base-100 shadow-md p-4 min-w-[170px] relative inline-block mt-[10px] ml-[10px] ${
          orders.length - 1 === props.index ? "!mr-5" : ""
        }`}
      >
        {props.order.discount !== 0 && (
          <div className="stack-top left font-semibold text-sm">
            {props.order.discount}%
          </div>
        )}

        <div className="px-5 py-1 relative">
          <img
            src={`${props.order.image}`}
            alt={props.order.coffee}
            className="h-20 w-max m-auto"
          />
          {props.order.new === true && (
            <div>
              <Image
                src={assets.StarbuckIcons.New}
                alt="new"
                className="h-14 w-14 absolute right-0 bottom-[-30px]"
              />
              <p className="absolute text-xs font-medium right-1 bottom-[-20px] rotate-[-45deg] text-white">
                NEW!
              </p>
            </div>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-sm font-normal line-clamp-2 h-10">
            {props.order.coffee}
          </h2>
          {props.order.discount !== 0 ? (
            <div className="flex space-x-2">
              <p className="mt-2 text-xs font-light text-[#BEC9E0] line-through">
                {numberFormat({
                  num: Number(props.order.price),
                  opt: { style: "currency" },
                })}
              </p>
              <p className="mt-2 text-xs font-bold">
                {numberFormat({
                  num: Number(props.order.price - props.order.price * 0.1),
                  opt: { style: "currency" },
                })}
              </p>
            </div>
          ) : (
            <p className="mt-2 text-xs font-bold">
              {numberFormat({
                num: Number(props.order.price),
                opt: { style: "currency" },
              })}
            </p>
          )}

          <button className="btn btn-sm bg-gradient-to-r from-[#008950] to-[#007042] capitalize text-white text-xs w-full rounded-[50px] mt-2">
            <Image
              src={assets.StarbuckMostOrders.ShoppingCart}
              alt="add-to-cart"
            />
            Add to Cart
          </button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getMostOrders();
  }, []);
  return (
    <div className="space-y-2">
      <h1 className="text-[#3C405F] font-medium text-base">Most Orders</h1>
      <div className="flex space-x-3 overflow-x-auto no-scrollbar -mr-5 pb-1 h-[270px] \">
        {orders?.map((order, index) => (
          <CardMostOrder order={order} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}
