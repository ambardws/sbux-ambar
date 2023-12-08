"use client";
import assets from "@trex/assets";
import useCart from "@trex/stores/cart";
import { numberFormat } from "@trex/utils/format";
import Image from "next/image";
import React, { useState } from "react";

export default function ModalCart(props: any) {
  const { data }: { data: Products } = props;
  const { showModal, handleCloseModal } = props;
  const [notes, setNote] = useState<string>("");
  const { addToCart } = useCart();
  const [qty, setQty] = useState(0);

  const handleClick = (data: Products) => {
    addToCart({ product: data, qty: qty, notes: notes });
    setQty(0);
    setNote("");
  };
  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative flex justify-center w-full">
              {/*content*/}
              <div className="modal-box overflow-hidden">
                <div className="flex min-h-48 max-h-max">
                  <div className="w-1/2">
                    <Image
                      src={assets.StarbuckBeverages.BrewedCoffees}
                      alt="coffess"
                      className="h-max w-28 m-auto"
                    />
                  </div>

                  <div className="w-1/2 px-2">
                    <div className="space-y-2 ">
                      {data?.price && (
                        <div className="flex flex-col pt-5">
                          {data.discount !== 0 ? (
                            <>
                              <h1 className="font-semibold text-base text-[#BEC9E0] line-through">
                                {" "}
                                {numberFormat({
                                  num: Number(data?.price),
                                  opt: { style: "currency" },
                                })}
                              </h1>
                              <h1 className="font-semibold text-2xl text-error">
                                {" "}
                                {numberFormat({
                                  num: Number(
                                    data?.price -
                                      data?.price * (data.discount / 100)
                                  ),
                                  opt: { style: "currency" },
                                })}
                              </h1>
                            </>
                          ) : (
                            <h1 className="font-semibold text-2xl text-error">
                              {" "}
                              {numberFormat({
                                num: Number(data?.price),
                                opt: { style: "currency" },
                              })}
                            </h1>
                          )}
                        </div>
                      )}

                      <h1 className="font-semibold text-xl text-[#2E324F]">
                        {data?.coffee}
                      </h1>
                      <p className="font-medium text-xs text-[#2E324F]">
                        {data?.description}
                      </p>
                    </div>

                    <div className="flex space-x-3 mt-5">
                      <button
                        disabled={qty === 0}
                        className="btn btn-sm bg-[#007042] rounded-full flex justify-center items-center"
                        onClick={() => setQty(qty - 1)}
                      >
                        <p className="text-white text-lg font-bold">-</p>
                      </button>
                      <input
                        type="number"
                        className="input input-sm input-bordered w-20 text-center"
                        value={qty}
                        onChange={(e) => setQty(parseInt(e.target.value))}
                      />
                      <button
                        className="btn btn-sm bg-[#007042] rounded-full flex justify-center items-center"
                        onClick={() => setQty(qty + 1)}
                      >
                        <p className="text-white text-lg font-bold">+</p>
                      </button>
                    </div>
                  </div>
                </div>

                <textarea
                  className="textarea textarea-bordered mt-10 w-full"
                  placeholder={`Add note here \nExample: Please add more whip cream`}
                  value={notes}
                  onChange={(x) => {
                    setNote(x.target.value);
                  }}
                ></textarea>

                <hr className="border-t-[#CBD4E2] border-dashed w-full mt-5 mx-2" />

                {qty === 0 && (
                  <div className="flex justify-center items-center p-3 bg-[#FFD9D9] w-3/4 text-xs font-medium text-[#3C405F] rounded-[10px] mx-auto mt-5">
                    <span className="rounded-full text-[#FFD9D9] bg-[#E87878] h-5 w-5 flex justify-center items-center mr-1">
                      !
                    </span>
                    Add minimal 1 item menu to save order
                  </div>
                )}

                <div className="pt-5">
                  {qty !== 0 ? (
                    <button
                      className="btn w-full bg-success text-white font-bold normal-case rounded-[50px]"
                      onClick={() => handleClick(props.data)}
                    >
                      <Image
                        src={assets.StarbuckIcons.SaveOrder}
                        alt="save-order"
                        className="h-6 w-6"
                      />{" "}
                      Save Order
                    </button>
                  ) : (
                    <button
                      className="btn w-full bg-[#242424] text-white font-bold normal-case rounded-[50px]"
                      onClick={() => handleCloseModal()}
                    >
                      Back to Menu
                    </button>
                  )}

                  <br />
                  <button
                    className="btn w-full bg-white text-[#E87878] font-bold normal-case rounded-[50px] border border-[#E87878] mt-2"
                    onClick={() => handleCloseModal()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
