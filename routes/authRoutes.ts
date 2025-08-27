import { Router } from "express";
import { loginController, refreshAccessTokenController, signUpController } from "../controllers/authControllers.js";

const router = Router();

router.post("/signup", signUpController);
router.post("/login", loginController);
router.get("/logout", (req, res) => {});
router.post('/token', refreshAccessTokenController)
export default router;
