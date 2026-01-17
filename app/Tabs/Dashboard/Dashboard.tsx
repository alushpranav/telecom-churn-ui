import { UsersRound, ArrowDownWideNarrow } from "lucide-react";
import LayerTop from "./LayerTop";
import LayerMiddle from "./LayerMiddle";
import LayerBottom from "./LayerBottom";

export default function Dashboard({
  totalCustomers,
}: {
  totalCustomers: number;
}) {
  return (
    <div className="flex flex-col h-full">
      <LayerTop totalCustomers={totalCustomers} />
      <LayerMiddle />
      <LayerBottom />
    </div>
  );
}
