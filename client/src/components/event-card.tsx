import { TEvent } from "@/config/type";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function EventCard({
  title,
  details,
  date,
  image,
  _id,
}: Readonly<TEvent>) {
  return (
    <Link
      href={`/events/${_id}`}
      className="item-center group flex flex-col gap-4 rounded-3xl border border-border/25 bg-secondary/25 shadow transition-colors duration-300 hover:bg-secondary/50 sm:flex-row"
    >
      <Image
        className="sm:border-b-none h-full max-h-[14rem] w-full rounded-[inherit] rounded-bl-none rounded-br-none border-b border-border/25 object-cover object-center sm:max-w-[15rem] sm:rounded-bl-[inherit] sm:rounded-tr-none sm:border-r"
        src={image}
        alt={title}
        height={400}
        width={250}
      />
      <div className="space-y-2 px-5 py-4 sm:px-3 sm:py-6">
        <div className="flex items-center gap-x-2 pb-2 text-sm text-foreground/60">
          <Calendar className="h-4 w-4" />
          <time>{format(new Date(date), "dd LLL y")}</time>
        </div>
        <h3 className="text-2xl font-medium text-foreground">{title}</h3>
        <p className="max-w-prose text-pretty leading-relaxed text-foreground/80">
          {details.slice(0, 150)}
        </p>
      </div>
    </Link>
  );
}
