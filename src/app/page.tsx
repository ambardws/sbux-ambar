"use client";
import { ThemePreview } from "@trex/components";
import Beverages from "@trex/components/Menus/Beverages/Beverages";
import Foods from "@trex/components/Menus/Foods/Foods";
import MostOrders from "@trex/components/MostOrders/MostOrders";
import { Onboarding } from "@trex/components/Onboarding/Onboarding";
import Promotion from "@trex/components/Promotion/Promotion";
import { useOnboardingStore } from "@trex/stores/onboarding";
import { useProductStore } from "@trex/stores/products";
import { useEffect } from "react";

export default function Home() {
  const { GetProducts } = useProductStore();
  const { onboarding } = useOnboardingStore();

  useEffect(() => {
    GetProducts();
  }, []);
  return (
    <>
      {onboarding ? (
        <div className="fixed z-[9999] top-0 bottom-0 left-0 right-0 bg-white max-w-3xl mx-auto overflow-hidden">
          <Onboarding />
        </div>
      ) : (
        <div className="w-[75%] bg-info p-5 space-y-3">
          <Promotion />
          <MostOrders />
          <Beverages />
          <Foods />
        </div>
      )}
    </>
  );
}
