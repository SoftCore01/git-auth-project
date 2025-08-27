import { Router } from "express";
import { loginController, logoutController, refreshAccessTokenController, signUpController } from "../controllers/authControllers.js";
import { deleteRefreshToken } from "../utils/queryFunctions/insertFunctions.js";

const router = Router();

router.post("/signup", signUpController);
router.post("/login", loginController);
router.delete("/logout", logoutController);
router.post('/token', refreshAccessTokenController)
export default router;
