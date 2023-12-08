import { Footer, HeaderHome } from "@trex/components";
import "./globals.css";
import type { Metadata } from "next";
import { Heebo, Inter } from "next/font/google";
import Sidebar from "@trex/components/Sidebar/Sidebar";

const inter = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Starbucks",
  description: "Generated by Meteor Nextjs Boilerplate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="trex">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto">
          <HeaderHome />
          <div className="flex relative">
            {children}
            <Sidebar />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
