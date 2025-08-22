import { Router } from "express";
import { signUpController } from "../controllers/authControllers.js";

const router = Router();

router.post("/signup", signUpController);
router.post("/login", (req, res) => {});
router.get("/logout", (req, res) => {});

export default router;
