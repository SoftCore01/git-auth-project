import { Router } from "express";
import { authenticateToken } from "../middlewares/authenticateToken.js";

import {
  createPostController,
  deletePostByController,
  deletePostsController,
  getAllPostsController,
  getPostByIdController,
  updatePostController,
} from "../controllers/postsControllers.js";

const router = Router();

router.use(authenticateToken);

router.get("/posts", getAllPostsController);

router.get("/post/:id", getPostByIdController); //get post by id

router.post("/post", createPostController); //create post

router.patch("/post/:id", updatePostController); //edit post by Id

router.delete("/post/:id", deletePostByController); //delete all

router.delete("/posts/", deletePostsController); //delete post by id

export default router;
