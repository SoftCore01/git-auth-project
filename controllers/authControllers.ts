import { Response, Request } from "express";
import { loginSchema, signUpSchema } from "../middlewares/validators.js";
import {
  deleteRefreshToken,
  insertRefreshToken,
  insertUser,
} from "../utils/queryFunctions/insertFunctions.js";
import {
  getRefreshToken,
  getUserByEmail,
} from "../utils/queryFunctions/getFunctions.js";
import { doHash, doHashValidation } from "../utils/hashFunctions.js";
import jwt from "jsonwebtoken";
import { generateAccessToken } from "../utils/helperFunctions.js";

export async function signUpController(req: Request, res: Response) {
  try {
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
      return res.status(401).json({
        success: false,
        message: "User already exists with this email",
      });
    const hashedPassword = await doHash(
      password,
      parseInt(process.env.SALTVAL)
    );
    insertUser(firstname, lastname, email, hashedPassword);
    return res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    console.log(error);
  }
}

export async function loginController(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const { error } = loginSchema.validate({
      email,
      password,
    });
    if (error)
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });

    const existingUser = await getUserByEmail(email);
    if (!existingUser)
      return res
        .status(401)
        .json({ success: false, message: "User does not exist" });

    const isCorrectPassword = await doHashValidation(
      password,
      existingUser.password
    );
    if (!isCorrectPassword)
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password" });

    const accessToken = generateAccessToken(existingUser.user_id);
    const refreshToken = jwt.sign(
      { id: existingUser.user_id },
      process.env.REFRESH_TOKEN_SECRET
    );

    insertRefreshToken(refreshToken);
    return res.status(200).json({
      success: true,
      message: `Welcome ${existingUser.firstname}`,
      tokens: { accessToken, refreshToken },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function refreshAccessTokenController(
  req: Request,
  res: Response
) {
  try {
    const {
      body: { token },
    } = req;
    if (!token)
      return res.status(401).json({
        success: false,
        message: "Bad request. Token must be included in request body",
      });

    const userRefreshToken = await getRefreshToken();
    if (!userRefreshToken?.includes(token))
      return res.status(403).json({
        success: false,
        message: "Invalid refresh token",
      });

    jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET,
      (
        err: jwt.VerifyErrors | null,
        user: string | jwt.JwtPayload | undefined
      ) => {
        if (err) return res.status(403);
        if (user) {
          const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
          return res.status(200).json({
            success: true,
            message: "Token refresh successful",
            accessToken: accessToken,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export function logoutController(req: Request, res: Response) {
  try {
    const {
      body: { token },
    } = req;
    if (!token)
      return res.status(401).json({
        success: false,
        message: "Bad request. Token must be included in request body",
      });
    
    deleteRefreshToken(token);
    return res.status(204).json({success: true, messsage:'Logout successful'})
  } catch (error) {
    console.log(error)
  }
}
