import Home from "./Home";
import { totalCustomers } from "@/lib/queries";

export default function Page() {
  const total = totalCustomers[0].count;
  return <Home totalCustomers={total} />;
}
