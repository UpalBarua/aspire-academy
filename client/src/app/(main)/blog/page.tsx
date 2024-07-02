"use client";

import { format } from "date-fns";
import { Loader2, Search } from "lucide-react";
import Link from "next/link";

import { BlogPost } from "@/components/blog-post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/ui/section-heading";
import type { TBlog } from "@/config/type";
import { useGetBlogQuery } from "@/redux/api/baseApi";

export default function BlogPage() {
  const { data, isLoading } = useGetBlogQuery("");

  return (
    <section className="pb-section container">
      <SectionHeading
        heading="Blog: Daily Posts"
        subHeading="Lorem ipsum dolor sit amet, qui minim labore adipisicing Lorem ipsum dolor sit amet, qui minim minim sint cillum sint consectetur cupidatat."
      />
      {isLoading ? (
        <div className="flex min-h-[20rem] flex-col items-center justify-center gap-4">
          <Loader2 className="size-10 animate-spin" />
          <span>Please Wait</span>
        </div>
      ) : (
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-4 lg:max-w-full lg:grid-cols-3">
          <div className="row-span-6 space-y-4">
            <form className="relative">
              <Search className="absolute left-[1rem] top-[50%] -translate-y-[50%] text-muted-foreground" />
              <Input
                type="text"
                placeholder="Looking for something?"
                className="h-14 rounded-[100vmin] border-border/25 bg-secondary/25 ps-12 shadow"
              />
              <Button
                size="sm"
                className="absolute right-0 top-[50%] mr-1.5 -translate-y-[50%]"
              >
                Search
              </Button>
            </form>
            <div className="hidden space-y-8 rounded-3xl border border-border/25 bg-secondary/25 p-8 lg:block">
              <h2 className="text-lg font-medium tracking-tight">Top Posts</h2>
              {data.data
                .slice(0, 6)
                .map(({ title, _id, date }: TBlog, i: number) => (
                  <Link
                    key={_id}
                    href={`/blog/${_id}`}
                    className="group flex items-start gap-5"
                  >
                    <span className="text-5xl font-extrabold text-muted-foreground/60 transition-colors duration-300 group-hover:text-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-pretty pb-1 font-medium tracking-tight underline-offset-2 group-hover:underline">
                        {title}
                      </h3>
                      <time className="leading-relaxed text-foreground/60">
                        {format(new Date(date), "dd LLL y")}
                      </time>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          {data.data.map((post: TBlog) => (
            <BlogPost key={post.title} {...post} />
          ))}
        </div>
      )}
    </section>
  );
}
