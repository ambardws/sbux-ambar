import { ThemePreview } from "@trex/components";
import MostOrders from "@trex/components/MostOrders/MostOrders";
import Promotion from "@trex/components/Promotion/Promotion";

export default function Home() {
  return (
    <div className="w-[70%] bg-info p-5 space-y-3">
      <Promotion />
      <MostOrders />
    </div>
  );
}
