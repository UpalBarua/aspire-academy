import { TBlog } from "@/config/type";
import { format } from "date-fns";
import Image from "next/image";

type BlogPostPageProps = {
  params: {
    blogId: string;
  };
};

export default async function BlogPostPage({
  params,
}: Readonly<BlogPostPageProps>) {
  const blogDetails = await fetch(
    `https://aspire-academy-server.vercel.app/api/blog/${params.blogId}`,
  ).then((res) => res.json());

  const { date, image, title, details } = blogDetails.data as TBlog;

  return (
    <section className="container">
      <Image
        className="h-[26rem] w-full rounded-3xl object-cover object-center"
        height={500}
        width={500}
        src={image}
        alt={title}
      />
      <div className="relative -top-[10rem] mx-auto max-w-prose rounded-3xl border border-border/25 bg-background p-10">
        <h2 className="text-pretty pb-2 text-3xl font-medium capitalize leading-[1.4] tracking-tight">
          {title}
        </h2>
        <time className="block pb-8">{format(new Date(date), "dd LLL y")}</time>
        <div className="space-y-6 text-pretty leading-loose text-foreground/80">
          <p>{details}</p>
        </div>
      </div>
    </section>
  );
}
