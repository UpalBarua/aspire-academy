"use client";
import BlogCard from "@/components/AdminCard/BlogCard";
import { Button } from "@/components/ui/button";
import { TBlog } from "@/config/type";
import { useGetBlogQuery } from "@/redux/api/baseApi";

import React from "react";

const AllBlog = () => {
  const { data, isLoading } = useGetBlogQuery("");

  if (isLoading) {
    <h1>Loading</h1>;
  }
  return (
    <section>
      <h1 className="mb-8 ml-4 mt-8 text-2xl font-bold text-primary">
        Here are All Blog:{" "}
      </h1>
      <div className="ml-4 mr-4 grid grid-cols-2 gap-4">
        {data?.data.map((blog: TBlog) => (
          <BlogCard key={blog?._id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default AllBlog;
