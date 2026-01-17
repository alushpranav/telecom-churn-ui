import { sql } from "./db";

export const totalCustomers = await sql`
    SELECT COUNT(*) AS count FROM customers;
`;
