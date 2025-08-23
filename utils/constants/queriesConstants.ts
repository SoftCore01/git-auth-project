export const queries = {
  insert: {
    user: "INSERT INTO users(firstname, lastname, email, password) VALUES(?,?,?, ?)",
  },
  get: {
    userByEmail: "SELECT * FROM users WHERE email=?",
  },
};
