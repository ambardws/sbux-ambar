"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useCart from "@trex/stores/cart";
import clsx from "clsx";
import Image from "next/image";
import assets from "@trex/assets";
import { numberFormat } from "@trex/utils/format";
import { ModalDelete } from "../Modal/ModalDelete";

export const BottomSheet = (props: any) => {
  const { open, handleClose } = props;
  const bottomSheetRef = useRef(null);
  const outsideReF = useRef(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [id, setId] = useState<number>();
  const handleDelete = (id?: number) => {
    setShowModal(true);
    setId(id);
  };

  const handleCloseModal = () => {
    // Close the modal
    setShowModal(false);
  };

  const { carts, subtotal } = useCart();

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          outsideReF.current === event.target
        ) {
          handleClose();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(bottomSheetRef);

  const CardCart = (props: any) => {
    const { updateQty, updateNotes } = useCart();
    const [editableNote, setEditableNote] = useState<boolean>(false);
    const [notes, setNotes] = useState<string>("");
    const item: CardInterface = props.item;

    const handleEdit = () => {
      setEditableNote(true);
    };

    const handleSaveNotes = (id: number, notes: string) => {
      if (notes) {
        updateNotes(id, notes);
      }
      setEditableNote(false);
    };
    return (
      <div className="card bg-white rounded-[20px] drop-shadow-md h-40 w-full mt-3 flex flex-row">
        <div className="w-1/4 h-full flex items-center justify-center">
          <Image src={item.image} alt="image-cart" width={60} height={100} />
        </div>

        <div className="w-3/4 h-full">
          <div className="font-normal mt-5">
            <div className="flex justify-between">
              <div className="w-2/4">
                <p className="text-[#242424]">{item.name}</p>
                <div className="flex space-x-2">
                  {item.discount !== 0 ? (
                    <p className="text-[#BEC9E0] line-through text-xs my-auto">
                      {numberFormat({
                        num: Number(item.price),
                        opt: { style: "currency" },
                      })}
                    </p>
                  ) : (
                    ""
                  )}
                  <p className="text-[#3C405F]">
                    {numberFormat({
                      num: Number(item.total),
                      opt: { style: "currency" },
                    })}
                  </p>
                </div>
              </div>
              <button className="text-[#82BC3F] text-sm h-max py-1 px-3 font-normal rounded-[50px] border border-[#82BC3F] mr-5">
                Edit Menu
              </button>
            </div>

            <div className="flex justify-between">
              <div className="flex w-2/4">
                <div className="w-full">
                  <p className="text-[#888A9B] text-sm mt-5">Notes</p>
                  {editableNote ? (
                    <div className="flex justify-between items-end">
                      <input
                        type="text"
                        className="input input-sm input-bordered"
                        onChange={(x) => setNotes(x.target.value)}
                        defaultValue={item.notes}
                      />
                      <button
                        className="h-8 w-14 cursor-pointer border border-[#82BC3F] text-[#82BC3F] rounded-[10px]"
                        onClick={() => handleSaveNotes(item.id, notes)}
                      >
                        <p className="m-auto">Save</p>
                      </button>
                    </div>
                  ) : (
                    <div>
                      {item.notes !== "" ? (
                        <div className="flex justify-between items-end">
                          {/* <p className="text-[#3C405F] text-xs">{item.notes}</p> */}
                          <input
                            disabled={true}
                            type="text"
                            className="input input-sm input-ghost pl-0 text-[#3C405F] text-xs !bg-white !border-none !cursor-default"
                            defaultValue={item.notes}
                          />
                          <div
                            className="cursor-pointer border border-[#82BC3F] rounded-[10px] h-8 w-8 flex items-center justify-center"
                            onClick={() => handleEdit()}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5 text-[#82BC3F]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                              />
                            </svg>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-end">
                          {/* <p className="text-[#BEC9E0] italic text-xs">
                            No Notes
                          </p> */}
                          <input
                            disabled={true}
                            type="text"
                            className="input input-sm input-ghost pl-0 text-[#3C405F] italic text-xs !bg-white !border-none !cursor-default"
                            defaultValue={"No Notes"}
                          />
                          <div
                            className="cursor-pointer border border-[#82BC3F] rounded-[10px] h-8 w-8 flex items-center justify-center"
                            onClick={() => handleEdit()}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5 text-[#82BC3F]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex space-x-3 pr-5 items-end">
                <div
                  className="cursor-pointer border border-[#3C405F] rounded-[10px] h-8 w-8 flex items-center justify-center"
                  onClick={() => handleDelete(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-[#3C405F]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
                <button
                  disabled={item.qty === 1}
                  className={clsx(
                    "h-8 w-8 bg-[#007042] rounded-full flex justify-center items-center",
                    item.qty === 1 ? "bg-[#B0B8C8]" : ""
                  )}
                  onClick={() => updateQty("DECREASE", item.id)}
                >
                  <p className="text-white text-lg font-bold">-</p>
                </button>
                <input
                  type="number"
                  defaultValue={item.qty}
                  className="input input-sm input-bordered w-20 text-center rounded-[20px]"
                />
                <button
                  className="h-8 w-8 bg-[#007042] rounded-full flex justify-center items-center"
                  onClick={() => updateQty("INCREASE", item.id)}
                >
                  <p className="text-white text-lg font-bold">+</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <motion.div
        animate={
          open ? { opacity: 0.6, zIndex: 30 } : { opacity: 0, display: "none" }
        }
        initial={{ opacity: 0 }}
        className="fixed top-0 left-0 right-0 bottom-0 z-20 bg-black"
        ref={outsideReF}
      />
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { y: 0, height: "auto" },
              collapsed: { y: "100%", height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="fixed bottom-0 right-0 left-0 z-30 max-w-3xl mx-auto rounded-t-[20px] bg-info shadow-[0px_-8px_20px_-6px_rgba(0,0,0,0.3)]"
            style={{ zIndex: 30, position: "absolute" }}
          >
            <div ref={bottomSheetRef}>
              <div className="h-full flex flex-col justify-between">
                {carts.length > 0 ? (
                  <div className="h-[80vh] overflow-y-auto no-scrollbar">
                    <div className="p-4">
                      <div className="flex my-auto space-x-10 text-sm">
                        <p className="my-auto font-medium text-base">Cart</p>
                        <div className="flex space-x-3">
                          <p className="flex items-center justify-center text-white h-8 w-8 bg-success rounded-xl">
                            {carts.length}
                          </p>
                          <div className="bg-[#B0B8C8] min-w-[1px] my-3"></div>
                          <button
                            className="bg-[#FCC8CE] text-primary py-2 px-5 font-normal rounded-[50px]"
                            onClick={() => handleDelete()}
                          >
                            Delete All
                          </button>
                        </div>
                      </div>
                      {carts.map((item, index) => (
                        <CardCart item={item} key={index} />
                      ))}
                      <ModalDelete
                        id={id}
                        showModal={showModal}
                        handleCloseModal={handleCloseModal}
                      />
                    </div>
                    <button
                      className="btn btn-sm capitalize w-1/4 bg-black text-white flex mx-auto"
                      onClick={() => handleClose()}
                    >
                      <div className="h-4 w-4 p-1 bg-white rounded-full flex justify-center items-center">
                        <p className="text-black text-lg font-bold">+</p>
                      </div>
                      Add Menu
                    </button>
                  </div>
                ) : (
                  <div className="min-h-max p-14 bg-white rounded-t-[20px] flex flex-col justify-center items-center">
                    <Image
                      src={assets.StarbuckCart.CartEmpty}
                      alt="empty-order"
                      className="h-1/2 w-1/2"
                    />
                    <p className="text-center font-medium text-xl text-[#3C405F] mt-5 px-20">
                      The cart is still empty Add your favorite menu to the cart
                    </p>
                    <button
                      className="btn btn-sm w-1/4 bg-success text-white normal-case rounded-[50px] mt-5"
                      onClick={() => handleClose()}
                    >
                      Order Now
                    </button>
                  </div>
                )}

                <div className="bg-white w-full h-[80px] border-t-[1.5px] border-[#F1F6FC] shadow-[0_-5px_3px_-3px_#F1F6FC] flex justify-between px-5">
                  <div className="flex space-x-3 py-2 my-auto">
                    <button
                      className="btn rounded-full h-max p-2 bg-[#242424]"
                      onClick={() => handleClose()}
                    >
                      <Image
                        src={assets.StarbuckIcons.ArrowLeft}
                        alt="back"
                        className="h-7 w-max"
                      />
                    </button>
                    <div className="bg-[#F1F6FC] min-w-[3px]"></div>

                    <div className="flex flex-col text-base font-normal">
                      <p>Total Payment</p>
                      {subtotal === 0 ? (
                        <p className="text-base text-[#EE1B1B] my-auto font-medium">
                          Rp0
                        </p>
                      ) : (
                        <p className="text-base text-error font-semibold my-auto">
                          {numberFormat({
                            num: subtotal,
                            opt: { style: "currency" },
                          })}
                        </p>
                      )}
                    </div>
                  </div>
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
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
