export const refreshTokenModel = `
CREATE TABLE IF NOT EXISTs refreshTokens(
  token_id INTEGER PRIMARY KEY AUTOINCREMENT,
  token VARCHAR(255)
);`;
