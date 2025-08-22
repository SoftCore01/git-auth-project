import { Router } from "express";
import authRouter from './authRouter.js'
const router = Router();

router.use('/api', authRouter);

export default router;