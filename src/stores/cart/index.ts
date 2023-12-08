import useHydrated from "@trex/hooks/useHydrated";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  carts: CardInterface[];
  addToCart: (data: { product: Products; qty: number; notes: string }) => void;
  updateQty: (type: string) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      carts: [],
      addToCart: (data) => {
        const updatedCarts = get().carts.map((item) => {
          if (item.id === data.product.id) {
            // If the item already exists, update the quantity
            const price = data.product.discount
              ? data.product.price -
                data.product.price * (data.product.discount / 100)
              : data.product.price;
            const total = (item.qty + data.qty) * price;
            return {
              ...item,
              notes: data.notes,
              total: total,
              qty: item.qty + data.qty,
            };
          }
          return item; // Return unchanged item if not the one to be updated
        });

        console.log(updatedCarts);

        // Check if the item already exists in the cart
        const isItemInCart = updatedCarts.some(
          (item) => item.id === data.product.id
        );

        if (!isItemInCart) {
          // If the item is not in the cart, add it as a new item
          const price = data.product.discount
            ? data.product.price -
              data.product.price * (data.product.discount / 100)
            : data.product.price;
          const total = data.qty * price;
          const orderCart = {
            id: data.product.id,
            name: data.product.coffee,
            image: data.product.image,
            price: data.product.price,
            discount: data.product.discount,
            notes: data.notes,
            qty: data.qty,
            total: total,
          };

          set(({ carts }) => ({ carts: [...carts, orderCart] }));
        } else {
          // If the item is already in the cart, update the state with the modified array
          set(() => ({ carts: updatedCarts }));
        }
      },

      updateQty: (type) => {},
    }),
    {
      name: "cart",
      partialize: ({ carts }) => ({ carts }),
    }
  )
);

const useCart: () => CartState = () => {
  const store = useCartStore();
  const isHydrated = useHydrated();
  return isHydrated
    ? store
    : {
        carts: [],
        addToCart: () => null,
        updateQty: () => null,
      };
};

export default useCart;
