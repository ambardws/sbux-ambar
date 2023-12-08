import { MostOrdersData } from "@trex/stores/DataTemp/MostOrders";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: MostOrdersData,
  });
}
