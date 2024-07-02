"use client";

import { useGetBlogQuery } from "@/redux/api/baseApi";
import { Loader2 } from "lucide-react";
import Link from "next/link";

import { AdminBlogCard } from "@/components/AdminCard/admin-blog-card";
import { buttonVariants } from "@/components/ui/button";
import type { TBlog } from "@/config/type";

export default function AdminBlogPage() {
  const { data, isLoading } = useGetBlogQuery("");

  return (
    <section className="pb-section">
      <div className="flex items-center justify-between pb-6">
        <h2 className="py-4 text-3xl font-bold">Blog Posts</h2>
        <Link className={buttonVariants({})} href="/admin/blog/new">
          New Post
        </Link>
      </div>
      {isLoading ? (
        <div className="flex min-h-[20rem] flex-col items-center justify-center gap-4">
          <Loader2 className="size-10 animate-spin" />
          <span>Please Wait</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.data.map((blog: TBlog) => (
            <AdminBlogCard key={blog._id} {...blog} />
          ))}
        </div>
      )}
    </section>
  );
}
