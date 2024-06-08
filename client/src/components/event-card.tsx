import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { events } from "@/config";

type EventCardProps = (typeof events)[number];

export function EventCard({
  image,
  title,
  description,
}: Readonly<EventCardProps>) {
  return (
    <Link
      href="/"
      className="item-center group flex flex-col gap-4 rounded-3xl border border-border/25 bg-secondary/25 shadow transition-colors duration-300 hover:bg-secondary/50 sm:flex-row"
    >
      <Image
        className="sm:border-b-none w-full rounded-[inherit] rounded-bl-none rounded-br-none border-b border-border/25 object-cover object-center sm:max-w-[15rem] sm:rounded-bl-[inherit] sm:rounded-tr-none sm:border-r"
        src={image}
        alt={title}
        height={400}
        width={250}
      />
      <div className="space-y-2 px-5 py-4 sm:px-3 sm:py-6">
        <div className="flex items-center gap-x-2 pb-2 text-sm text-foreground/60">
          <Calendar className="h-4 w-4" />
          <span>2 June 2024</span>
        </div>
        <h3 className="text-2xl font-medium text-foreground">{title}</h3>
        <p className="max-w-prose text-pretty leading-relaxed text-foreground/80">
          {description.slice(0, 40)} Lorem ipsum dolor sit amet, qui minim
          labore adipisicing minim sint cillum sint.
        </p>
      </div>
    </Link>
  );
}
