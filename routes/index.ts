import { Router } from "express";
import authRouter from './authRoutes.js'
import postRouter from './postsRoutes.js'
import googleAuthRouter from './googleAuthRoutes.js'

const router = Router();

router.use("/api", authRouter, postRouter);
router.use(googleAuthRouter)
export default router;