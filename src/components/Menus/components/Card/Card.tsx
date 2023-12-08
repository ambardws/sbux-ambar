"use client";

import assets from "@trex/assets";
import ModalCart from "@trex/components/Modal/ModalCart";
import { useProductStore } from "@trex/stores/products";
import { numberFormat } from "@trex/utils/format";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type OrdersCard = {
  index: number;
  order: Products;
};

export const Card = (props: any) => {
  const [dataByCategory, setDataByCategory] = useState<Products[]>([]);
  const { products, loading } = useProductStore();

  const getByCategory = (category: string) => {
    const filterData =
      products[0]?.filter((item: Products) => item.category === category) || [];
    setDataByCategory(filterData);
  };

  const CustomCard = (props: OrdersCard) => {
    const [modalData, setModalData] = useState<Products>();
    const [showModal, setShowModal] = useState<boolean>(false);
    const handleCart = (data: Products) => {
      setModalData(data);
      setShowModal(true);
    };
    const handleCloseModal = () => {
      // Close the modal
      setShowModal(false);
    };
    return (
      <div
        className={`card bg-base-100 shadow-md p-4 w-[170px] relative inline-block mt-[10px] ml-[10px] ${
          products[0].length - 1 === props.index ? "!mr-5" : ""
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
                  num: Number(
                    props.order.price -
                      props.order.price * (props.order.discount / 100)
                  ),
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

          <button
            className="btn btn-sm bg-gradient-to-r from-[#008950] to-[#007042] capitalize text-white text-xs w-full rounded-[50px] mt-2"
            onClick={() => handleCart(props.order)}
          >
            <Image
              src={assets.StarbuckMostOrders.ShoppingCart}
              alt="add-to-cart"
            />
            Add to Cart
          </button>

          <ModalCart
            data={modalData}
            showModal={showModal}
            handleCloseModal={handleCloseModal}
          />
        </div>
      </div>
    );
  };

  useEffect(() => {
    getByCategory(props.name);
  }, [products]);
  return (
    <div className="space-y-2" id={props.name}>
      <div className="flex justify-between">
        <h1 className="text-[#3C405F] font-medium text-base min-w-max">
          {props.name}
        </h1>
        <hr className="bg-[#CBD4E2] h-[2px] w-full my-auto mx-2" />
      </div>
      <div className=" flex-wrap space-x-3 -mr-5 pb-1 -ml-2 \">
        {dataByCategory?.map((order, index) => (
          <CustomCard order={order} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};
