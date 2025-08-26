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

//auth
export function insertUser(
  firstname: string,
  lastname: string,
  email: string,
  password: string
) {
  insertOperation(
    queries.auth.insertUser,
    firstname,
    lastname,
    email,
    password
  );
}

//posts
export function insertPost(user_id: number, title: string, details: string) {
  insertOperation(queries.posts.insertPost, title, details, user_id);
}

export function updatePost(
  user_id: number,
  property: string,
  newValue: string,
  post_id: number
) {
  if (property === "title") {
    insertOperation(queries.posts.updatePostTitle, newValue, post_id, user_id);
  } else {
    insertOperation(
      queries.posts.updatePostDetails,
      newValue,
      post_id,
      user_id
    );
  }
}

export function deletePosts(user_id: number) {
  insertOperation(queries.posts.deletePosts, user_id);
}
export function deletePostById(user_id: number, post_id: number) {
  insertOperation(queries.posts.deletePostById, post_id, user_id);
}
