export const queries = {
  auth: {
    insertUser:
      "INSERT INTO users(firstname, lastname, email, password) VALUES(?,?,?, ?)",
    getUserByEmail: "SELECT * FROM users WHERE email = ?",
  },
  posts: {
    getAllPosts: "SELECT * FROM posts WHERE user_id = ?",
    getPostById: "SELECT * FROM posts WHERE user_id = ? AND post_id = ?",
    insertPost: "INSERT INTO posts(title, details, user_id) VALUES(?,?,?)",
    updatePostTitle:
      "UPDATE posts SET title = ? WHERE post_id=? AND user_id = ?",
    updatePostDetails:
      "UPDATE posts SET details = ? WHERE post_id = ? AND user_id = ?",
    deletePostById: "DELETE FROM posts WHERE post_id = ? AND user_id = ?",
    deletePosts: "DELETE FROM posts WHERE user_id = ?",
  },
  tokens: {
    insertToken: "INSERT INTO refreshTokens(token) VALUES(?)",
    retrieveToken: "SELECT token FROM refreshTokens",
    deleteToken : "DELETE FROM refreshTokens WHERE token = ?"
  },
};
