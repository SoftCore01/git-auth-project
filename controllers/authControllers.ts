import { Response, Request } from "express";
import { userSchema } from "../middlewares/validators.js";
import { insertUser } from "../utils/queryFunctions/insertFunctions.js";
import { getUserByEmail } from "../utils/queryFunctions/getFunctions.js";

export async function signUpController(req: Request, res: Response) {
  const { firstname, lastname, email } = req.body;
  const { error } = userSchema.validate({
    firstname,
    lastname,
    email,
  });

  if (error)
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });

    const existingUser = await getUserByEmail(email);
  if (existingUser)
    return res
      .status(401)
      .json({ success: false, message: "User already exists with this email" });

  insertUser(firstname, lastname, email);
  return res
    .status(201)
    .json({ success: true, message: "testing" });
}
