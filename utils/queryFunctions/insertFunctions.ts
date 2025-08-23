import db from "../../connect.js";
import { queries } from "../constants/queriesConstants.js";

function insertOperation(sql: string, ...values: any[]) {
  try {
    db.run(sql, [...values], (err) => {
      if (err) throw new Error(err.message);
    });
  } catch (error) {
    console.log(error);
  }
}

export function insertUser(firstname: string, lastname: string, email: string, password: string) {
  insertOperation(queries.insert.user, firstname, lastname, email, password);
}
