"use client";

import assets from "@trex/assets";
import { useCartStore } from "@trex/stores/cart";
import Image from "next/image";
import React from "react";

export const ModalDelete = (props: any) => {
  const { removeFromCart, clearCart } = useCartStore();
  const { showModal, handleCloseModal, id } = props;
  const handleConfirm = (id: number) => {
    removeFromCart(id);
    handleCloseModal();
  };
  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative flex justify-center w-full">
              {/*content*/}
              {id ? (
                <div className="modal-box overflow-hidden">
                  <div className="p-14">
                    <Image
                      src={assets.StarbuckCart.ConfirmDelete}
                      alt="confirm-delete"
                      className="mx-auto"
                    />
                    <p className="text-center font-medium text-xl text-[#3C405F] mt-5">
                      Are you sure you want to delete this item?
                    </p>
                  </div>

                  <div className="flex w-full space-x-2 -mt-5">
                    <button
                      className="btn w-1/2 bg-[#242424] text-white text-lg font-bold normal-case rounded-[50px]"
                      onClick={() => handleCloseModal()}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn w-1/2 bg-success text-white text-lg font-bold normal-case rounded-[50px]"
                      onClick={() => handleConfirm(id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div className="modal-box overflow-hidden">
                  <div className="p-14">
                    <Image
                      src={assets.StarbuckCart.Deleteall}
                      alt="confirm-delete"
                      className="mx-auto"
                    />
                    <p className="text-center font-medium text-xl text-[#3C405F] mt-5">
                      Do you want to delete all menu in the cart?
                    </p>
                  </div>

                  <div className="flex w-full space-x-2 -mt-5">
                    <button
                      className="btn w-1/2 bg-[#242424] text-white text-lg font-bold normal-case rounded-[50px]"
                      onClick={() => {
                        clearCart();
                        handleCloseModal();
                      }}
                    >
                      Delete All
                    </button>
                    <button
                      className="btn w-1/2 bg-success text-white text-lg font-bold normal-case rounded-[50px]"
                      onClick={() => handleCloseModal()}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};
