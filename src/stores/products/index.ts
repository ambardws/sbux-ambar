import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getProduct } from "./action";
import useHydrated from "@trex/hooks/useHydrated";
import { toast } from "react-toastify";

interface ProductState {
  products: any[];
  loading: boolean;
  GetProducts: (category?: string) => void;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set, get) => ({
      products: [],
      loading: false,

      GetProducts: async (category?: string) => {
        set({ loading: true });
        try {
          const result = await getProduct(category);
          set({ products: [result], loading: false });
        } catch (error) {
          toast.error(`Terjadi kesalahan ${error}`);
        }
      },
    }),
    {
      name: "products-state",
    }
  )
);

const useProduct: () => ProductState = () => {
  const store = useProductStore();
  const isHydrated = useHydrated();
  return isHydrated
    ? store
    : {
        products: [],
        loading: false,
        GetProducts: () => null,
      };
};

export default useProduct;
