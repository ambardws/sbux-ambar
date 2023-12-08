
import { DataProducts } from "@trex/stores/DataTemp/products";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  const searchParams = req.nextUrl.searchParams;
  const category = searchParams.get("category");

  // Jika category tidak diberikan, kembalikan semua data
  if (!category) {
    return NextResponse.json({
      data: DataProducts,
    });
  }

  // Filter data berdasarkan category
  const filteredData = DataProducts.filter(
    (item) => item.category === category
  );

  // Kembalikan data yang telah difilter
  return NextResponse.json({
    data: filteredData,
  });
}
