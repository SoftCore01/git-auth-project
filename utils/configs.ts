import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;
const DB_NAME = process.env.DB_NAME || ":memory:";

export {PORT, DB_NAME}
