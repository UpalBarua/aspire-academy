import { blogModel } from "./blog.model";
import { TBlog } from "./blog.type";

const createBlogDb = async (blog: TBlog) => {
  const result = await blogModel.create(blog);
  return result;
};

const getBlogDb = async () => {
  const result = await blogModel.find();
  return result;
};
const getSingleBlogFromDB = async (id: string) => {
  console.log(id);
  const result = await blogModel.findById(id);
  return result;
};

const deleteBlogDb = async (id: any) => {
  const result = await blogModel.deleteOne({ _id: id });
  return result;
};

export const blogService = {
  createBlogDb,
  getBlogDb,
  getSingleBlogFromDB,
  deleteBlogDb,
};
