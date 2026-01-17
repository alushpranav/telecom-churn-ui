// lib/queries.ts ✅
import { sql } from "./db";

export async function totalCustomers() {
  const [{ count }] = await sql`
    SELECT COUNT(*) AS count FROM customers
  `;
  return count;
}
