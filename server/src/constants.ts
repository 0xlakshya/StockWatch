import * as dotenv from "dotenv";
dotenv.config();

export const PORT = parseInt(process.env.port as string, 10) ?? "8000";
