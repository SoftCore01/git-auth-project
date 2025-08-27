import jwt from "jsonwebtoken";
export function handleDBOperation(err: Error | null) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Operation successful");
}

export function generateAccessToken(user_id: number) {
  return jwt.sign({ id: user_id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
}
