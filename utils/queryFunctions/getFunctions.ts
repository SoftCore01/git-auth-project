import db from "../../connect.js";
import { User } from "../../types/userType.js";
import { queries } from "../constants/queriesConstants.js";

function getFirst(sql: string, ...values: any[]) {
  return new Promise((resolve, reject) => {
    db.get(sql, [...values], (err, row) => {
      if (err) {
        reject(err);
      }
      resolve(row);
    });
  });
}

function getAll(sql: string, ...values: any[]) {
  return new Promise((resolve, reject) => {
    db.all(sql, [...values], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
}

export async function getUserByEmail(email: string) {
  try {
    const response = await getFirst(queries.auth.getUserByEmail, email);
    return response as User;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPosts(user_id: number) {
  try {
    const response = await getAll(queries.posts.getAllPosts, user_id);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostById(user_id: number, post_id: number) {
  try {
    const response = await getFirst(
      queries.posts.getPostById,
      user_id,
      post_id
    );
    return response
  } catch (error) {
    console.log(error);
  }
}

export async function getRefreshToken() {
  type Token = {
    token:string
  }
  try {
    const response = await getAll(
      queries.tokens.retrieveToken
    ) as Token[];
    const tokens = response.map(token=> token.token)
    return tokens
  } catch (error) {
    console.log(error);
  }
}
