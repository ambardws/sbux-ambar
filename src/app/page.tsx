"use client";
import { ThemePreview } from "@trex/components";
import Beverages from "@trex/components/Menus/Beverages/Beverages";
import Foods from "@trex/components/Menus/Foods/Foods";
import MostOrders from "@trex/components/MostOrders/MostOrders";
import Promotion from "@trex/components/Promotion/Promotion";
import { useProductStore } from "@trex/stores/products";
import { useEffect } from "react";

export default function Home() {
  const { GetProducts } = useProductStore();

  useEffect(() => {
    GetProducts();
  }, []);
  return (
    <div className="w-[75%] bg-info p-5 space-y-3">
      <Promotion />
      <MostOrders />
      <Beverages />
      <Foods />
    </div>
  );
}
