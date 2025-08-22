export const queries = {
  insert: {
    user: "INSERT INTO users(firstname, lastname, email) VALUES(?,?,?)",
  },
  get: {
    userByEmail: 'SELECT email FROM users WHERE email=?'
  }
};
