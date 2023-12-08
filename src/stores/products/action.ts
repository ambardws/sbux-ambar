import { API_GET_PRODUCT } from "@trex/services/api";
import Client from "@trex/services/client";

export const getProduct = async (category?: string): Promise<Products> => {
  const url = category ? `?category=${category}` : "";
  const result = await Client.get(`${API_GET_PRODUCT}${url}`);
  return result.data.data as Products;
};
