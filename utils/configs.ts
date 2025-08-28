import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;
const DB_NAME = process.env.DB_NAME || ":memory:";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

export { PORT, DB_NAME, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET };
