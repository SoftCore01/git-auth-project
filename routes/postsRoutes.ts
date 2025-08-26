import { Router } from "express";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = Router();

router.use(authenticateToken);

router.get("/posts", (req, res) => {
  console.log(req.user);
}); //get all posts
router.get("/post/:id", () => {}); //get post by id
router.post("/post", () => {}); //create post
router.patch("/post/:id", () => {}); //edit post by Id
router.delete("/post/:id", () => {}); //delete post by id

export default router;
