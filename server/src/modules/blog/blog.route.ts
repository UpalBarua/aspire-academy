import express from "express";
import { blogController } from "./blog.controller";

const router = express.Router();

router.post("/create-blog", blogController.createBlog);
router.get("/", blogController.getBlog);
router.get("/:blogId", blogController.getSingleBlog);
router.delete("/:id", blogController.deleteBlog);

export const blogRoutes = router;
