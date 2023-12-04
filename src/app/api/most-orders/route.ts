import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const ResponseData = [
  {
    id: 1,
    coffee: "Creamy Choco Caramel Machiato",
    price: 38000,
    new: true,
    discount: 10,
    image: "/images/MostOrders/machiato.png", // Relative path to the image
  },
  {
    id: 2,
    coffee: "Greentea Frappucinno",
    price: 23000,
    new: false,
    discount: 0,
    image: "/images/MostOrders/green-tea.png", 
  },
  {
    id: 3,
    coffee: "Newyork Cheesecake",
    price: 48000,
    new: false,
    discount: 0,
    image: "/images/MostOrders/cakes.png", 
  },
  {
    id: 4,
    coffee: "Newyork Cheesecake",
    price: 48000,
    new: false,
    discount: 0,
    image: "/images/MostOrders/cakes.png", 
  },
];

export async function GET() {
  return NextResponse.json({
    data: ResponseData,
  });
}
