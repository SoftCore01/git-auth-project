import sqlite3 from "sqlite3";
import { DB_NAME } from "./utils/configs.js";
import { handleDBOperation } from "./utils/helperFunctions.js";
import { usersModel } from "./models/usersModels.js";
import { postsModel } from "./models/postsModels.js";
import { refreshTokenModel } from "./models/refreshTokenModels.js";

const db = new sqlite3.Database(DB_NAME, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Database connected successfully");
});


const models = [usersModel, postsModel, refreshTokenModel]
models.forEach(model => {
  db.run(model, handleDBOperation)
})

export default db;
