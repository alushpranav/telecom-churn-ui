import Home from "./Home";
import { totalCustomers } from "@/lib/queries";

export default async function Page() {
  const total = await totalCustomers();
  return <Home totalCustomers={total} />;
}
