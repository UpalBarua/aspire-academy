import { Search } from "lucide-react";
import Link from "next/link";

import { BlogPost } from "@/components/blog-post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/config";

export default function BlogPage() {
  return (
    <section className="pb-section container">
      <SectionHeading
        heading="Blog: Daily Posts"
        subHeading="Lorem ipsum dolor sit amet, qui minim labore adipisicing Lorem ipsum dolor sit amet, qui minim minim sint cillum sint consectetur cupidatat."
      />
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
          <div className="hidden space-y-8 rounded-3xl border border-border/25 bg-secondary/25 p-6 lg:block">
            <h2 className="text-lg font-medium tracking-tight">Top Posts</h2>
            {blogPosts.map(({ title }, i) => (
              <Link href="/" className="group flex items-start gap-5">
                <span className="text-5xl font-extrabold text-muted-foreground/60 transition-colors duration-300 group-hover:text-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-pretty pb-1 font-medium tracking-tight underline-offset-2 group-hover:underline">
                    {title}
                  </h3>
                  <time className="leading-relaxed text-foreground/60">
                    05 June 2024
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {blogPosts.slice(0, 6).map((post) => (
          <BlogPost key={post.title} {...post} />
        ))}
      </div>
    </section>
  );
}
