import { Request, Response } from "express";
import {
  getAllPosts,
  getPostById,
} from "../utils/queryFunctions/getFunctions.js";
import { deletePostById, deletePosts, insertPost, updatePost } from "../utils/queryFunctions/insertFunctions.js";
import { postSchema, updatePostSchema } from "../middlewares/validators.js";

export async function getAllPostsController(req: Request, res: Response) {
  try {
    const {
      user: { id },
    } = req;

    const data = await getAllPosts(id);
    return res.json({
      success: true,
      message: "Post retrieved successfully",
      data,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getPostByIdController(req: Request, res: Response) {
  try {
    const postId = parseInt(req.params.id);
    const userId = req.user.id;
    const data = await getPostById(userId, postId);
    return res.json({
      success: true,
      message: "Post retrieved successfully",
      data,
    });
  } catch (error) {
    console.log(error);
  }
}

export function createPostController(req: Request, res: Response) {
  try {
    const {
      user: { id },
      body: { title, details },
    } = req;

    const { error } = postSchema.validate({
      title,
      details,
    });

    if (error)
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });

    insertPost(id, title, details);
    return res
      .status(201)
      .send({ success: true, message: "Post create successfully" });
  } catch (error) {
    console.log(error);
  }
}

export function updatePostController(req: Request, res: Response) {
    try {
    const postId = parseInt(req.params.id);
    const userId = req.user.id;
    const { title, details } = req.body;
    const { error } = updatePostSchema.validate({
      title,
      details,
    });
    if (error)
      return res.status(400).json({
        success: false,
        message: "Bad request. Either title or details must be provided",
      });

    if (!title && !details)
      return res.status(400).json({
        success: false,
        message: "Bad request. Either title or details must be provided",
      });

    if (title) updatePost(userId, "title", title, postId);
    if (details) updatePost(userId, "details", details, postId);

    return res.json({ success: true, message: "Post updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

export function deletePostsController(req: Request, res: Response) {
 try {
   const { id } = req.user;
   deletePosts(id);
   return res.json({
     success: true,
     message: "All posts deleted successfully",
   });
 } catch (error) {
   console.log(error);
 }
};

export function deletePostByController(req: Request, res: Response) {
  try {
    const {
      params: { id: post_id },
      user: { id: user_id },
    } = req;
    deletePostById(user_id, parseInt(post_id));
    res.json({ success: true, message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};