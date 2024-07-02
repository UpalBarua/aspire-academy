import { format } from "date-fns";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TBlog } from "@/config/type";

export function BlogPost({ _id, title, date, details, image }: TBlog) {
  return (
    <Link
      href={`blog/${_id}`}
      className="item-center group flex flex-col rounded-3xl border border-border/25 bg-secondary/25 shadow transition-colors duration-300 hover:bg-secondary/50"
    >
      <Image
        className="max-h-[14rem] w-full rounded-[inherit] rounded-bl-none rounded-br-none border-b border-border/25 object-cover object-center"
        src={image}
        alt={title}
        height={400}
        width={250}
      />
      <div className="space-y-2 px-5 py-5">
        <div className="flex items-center gap-x-2 pb-2 text-sm text-foreground/60">
          <Calendar className="h-4 w-4" />
          <span>{format(new Date(date), "dd LLL y")}</span>
        </div>
        <h3 className="text-2xl font-medium text-foreground">{title}</h3>
        <p className="max-w-prose text-pretty leading-relaxed text-foreground/80">
          {details.slice(0, 150)}
        </p>
      </div>
    </Link>
  );
}
