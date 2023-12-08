"use client"

import React from "react";
import { Card } from "../components/Card/Card";

export default function Beverages() {
  return (
    <div className="space-y-2">
      <h1 className="text-[#3C405F] font-medium text-base">Beverages</h1>
      <Card name="Brewed Coffees" />
      <Card name="Espresso Beverage" />
    </div>
  );
}
