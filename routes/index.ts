import { Router } from "express";
import authRouter from './authRoutes.js'
import postRouter from './postsRoutes.js'


const router = Router();

router.use("/api", authRouter, postRouter);
export default router;