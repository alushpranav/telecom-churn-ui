import { ArrowDownWideNarrow, UsersRound, LogOut, Siren } from "lucide-react";

export default function LayerTop({
  totalCustomers,
}: {
  totalCustomers: number;
}) {
  const iconSize = 80;
  const iconStroke = 1.4;

  return (
    <div className="flex gap-4">
      <div className="cardtop shadow-lime-500">
        <div>
          <h3 className="text-white font-bold mb-2">Total Users</h3>
          <p className="text-gray-400 font-semibold">{totalCustomers}</p>
        </div>
        <UsersRound
          size={iconSize}
          className="text-lime-500"
          strokeWidth={iconStroke}
        />
      </div>
      <div className="cardtop shadow-orange-400">
        <div>
          <h3 className="text-white font-bold mb-2">Churn Rate</h3>
          <p className="text-gray-400 font-semibold">18.2%</p>
        </div>
        <ArrowDownWideNarrow
          size={iconSize}
          className="text-orange-400"
          strokeWidth={iconStroke}
        />
      </div>
      <div className="cardtop shadow-pink-500">
        <div>
          <h3 className="text-white font-bold mb-2">Total Exited</h3>
          <p className="text-gray-400 font-semibold">1,245</p>
        </div>
        <LogOut
          size={iconSize}
          className="text-pink-500"
          strokeWidth={iconStroke}
        />
      </div>
      <div className="cardtop shadow-red-500">
        <div>
          <h3 className="text-white font-bold mb-2">Revenue At Risk</h3>
          <p className="text-gray-400 font-semibold">12.06 Cr</p>
        </div>
        <Siren
          size={iconSize}
          className="text-red-500"
          strokeWidth={iconStroke}
        />
      </div>
    </div>
  );
}
