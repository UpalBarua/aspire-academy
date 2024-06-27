import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useDeleteBlogMutation } from "@/redux/api/baseApi";
import { TBlog } from "@/config/type";
import { Trash2 } from "lucide-react";

export default function BlogCard({ blog }: { blog: TBlog }) {
  const { title, _id, details, date, image, writer } = blog;
  const [deleteBlog] = useDeleteBlogMutation();
  return (
    <div className="rounded-md bg-secondary p-4">
      <div className="flex justify-end gap-4">
        <Button className="hidden rounded-md font-bold">Edit</Button>
        <Button
          onClick={() => deleteBlog(_id)}
          className="mb-2 flex items-center gap-2 rounded-md bg-red-600 font-bold text-white"
        >
          <Trash2 />
          Delete
        </Button>
      </div>
      <Image height={400} width={400} src={image} alt="blog image" />
      <h1 className="text-2xl font-bold">{title}</h1>
      <h4 className="pb-2">{writer}</h4>
      <h4 className="pb-2">{date}</h4>
      <p>{details}</p>
    </div>
  );
}
