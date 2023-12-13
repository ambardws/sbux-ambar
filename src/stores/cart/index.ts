import useHydrated from "@trex/hooks/useHydrated";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  carts: CardInterface[];
  addToCart: (data: { product: Products; qty: number; notes: string }) => void;
  updateQty: (type: string, id: number) => void;
  removeFromCart: (id: number) => void;
  updateNotes: (id: number, notes: string) => void;
  clearCart: () => void;
  subtotal: number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      carts: [],
      subtotal: 0,
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
        const subtotal = get().carts.reduce((res, item) => res + item.total, 0);
        set({ subtotal: subtotal });
      },

      updateQty: (type, id) => {
        const newChart = get().carts;
        newChart.map((item) => {
          if (item.id === id) {
            item.qty = type === "INCREASE" ? item.qty + 1 : item.qty - 1;
          }
          const price = item.discount
            ? item.price - item.price * (item.discount / 100)
            : item.price;
          item.total = item.qty * price;
          const subtotal = newChart.reduce((res, item) => res + item.total, 0);
          set(() => ({ carts: newChart, subtotal: subtotal }));
        });
      },

      updateNotes: (id, notes) => {
        const newChart = get().carts;
        newChart.map((item) => {
          if (item.id === id) {
            item.notes = notes;
          }
        });

        set(() => ({ carts: newChart }));
      },

      removeFromCart: (id) => {
        const newChart = get().carts.filter((item) => item.id !== id);
        const subtotal = newChart.reduce((res, item) => res + item.total, 0);
        set(() => ({ carts: newChart, subtotal: subtotal }));
      },

      clearCart: () => {
        set(() => ({ carts: [], subtotal: 0 }));
      },
    }),
    {
      name: "cart",
      partialize: ({ carts, subtotal }) => ({ carts, subtotal }),
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
        subtotal: 0,
        addToCart: () => null,
        updateQty: () => null,
        removeFromCart: () => null,
        updateNotes: () => null,
        clearCart: () => null,
      };
};

export default useCart;
