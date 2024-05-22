import { Request, Response } from "express";
import { blogService } from "./blog.service";

const createBlog = async (req: Request, res: Response) => {
  try {
    const newBlog = req.body;
    const result = await blogService.createBlogDb(newBlog);

    res.status(200).json({
      success: true,
      message: "blog  created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getBlog = async (req: Request, res: Response) => {
  try {
    const result = await blogService.getBlogDb();

    res.status(200).json({
      success: true,
      message: "blog find successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleBlog = async (req: Request, res: Response) => {
  try {
    const { blogId } = req.params;

    if (!blogId) {
      return res.status(400).json({
        success: false,
        message: "blogId parameter is missing",
      });
    }

    const result = await blogService.getSingleBlogFromDB(blogId);
    res.status(200).json({
      success: true,
      message: "blog find successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await blogService.deleteBlogDb(id);

    res.status(200).json({
      success: true,
      message: "blog delete successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const blogController = {
  createBlog,
  deleteBlog,
  getBlog,
  getSingleBlog,
};
