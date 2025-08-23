export const queries = {
  insert: {
    user: "INSERT INTO users(firstname, lastname, email, password) VALUES(?,?,?, ?)",
  },
  get: {
    userByEmail: 'SELECT email FROM users WHERE email=?'
  }
};
