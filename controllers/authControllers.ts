import { Response, Request } from "express";
import { signUpSchema } from "../middlewares/validators.js";
import { insertUser } from "../utils/queryFunctions/insertFunctions.js";
import { getUserByEmail } from "../utils/queryFunctions/getFunctions.js";
import { doHash } from "../utils/hashFunctions.js";

export async function signUpController(req: Request, res: Response) {
  const { firstname, lastname, email, password } = req.body;
  const { error } = signUpSchema.validate({
    firstname,
    lastname,
    email,
    password,
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
  const hashedPassword = await doHash(password, parseInt(process.env.SALTVAL));
  insertUser(firstname, lastname, email, hashedPassword);
  return res.status(201).json({ success: true, message: "testing" });
}
