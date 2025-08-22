import sqlite3 from "sqlite3";
import { DB_NAME } from "./utils/configs.js";
import { handleDBOperation } from "./utils/helperFunctions.js";

const db = new sqlite3.Database(DB_NAME, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Database connected successfully");
});

let sql = `CREATE TABLE IF NOT EXISTS users(
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);`;

db.run(sql, handleDBOperation);

export default db;
