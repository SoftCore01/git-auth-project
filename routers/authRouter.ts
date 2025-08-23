import { Router } from "express";
import { loginController, signUpController } from "../controllers/authControllers.js";

const router = Router();

router.post("/signup", signUpController);
router.post("/login", loginController);
router.get("/logout", (req, res) => {});

export default router;
