import db from "../../connect.js";
import { queries } from "../constants/queriesConstants.js";

function getOperation(sql: string, ...values: any[]) {
  return new Promise((resolve, reject) => {
    db.get(sql, [...values], (err, row) => {
      if (err) {
        reject(err);
      }
      resolve(row)
    });
  });
}
export async function getUserByEmail(email: string) {
  try {
    const response = await getOperation(queries.get.userByEmail, email);
    return response;
  } catch (error) {
    console.log(error);
  }
}
