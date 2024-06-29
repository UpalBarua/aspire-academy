import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

import { EventCard } from "@/components/event-card";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { events } from "@/config";

export function RecentEvents() {
  return (
    <section className="pb-section container">
      <SectionHeading
        heading="Recent Events"
        subHeading="We always strive to arrange numerous events for our community. Many people attend, and everyone enjoys them. Here are a few of our events that set us apart."
      />
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 lg:max-w-max lg:grid-cols-2">
        <Link
          href="/"
          className="group h-full min-h-[30rem] rounded-3xl bg-cover bg-center shadow"
          style={{ backgroundImage: `url(${events[0].image})` }}
        >
          <div className="flex h-full items-end">
            <div className="m-1 flex w-full flex-col justify-center rounded-3xl bg-background/80 p-6 backdrop-blur-md backdrop-saturate-200 transition-colors duration-300 group-hover:bg-background/95">
              <div className="flex items-center gap-x-2 pb-4 text-sm text-foreground/60">
                <Calendar className="h-4 w-4" />
                <span>2 June 2024</span>
              </div>
              <h3 className="pb-2 text-2xl font-medium text-foreground">
                {events[0].title}
              </h3>
              <p className="max-w-prose text-pretty leading-relaxed text-foreground/80">
                {events[0]?.description.slice(0, 150)}
              </p>
            </div>
          </div>
        </Link>
        <div className="flex flex-col gap-4">
          {events.slice(1, 4).map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Link
          href="/courses"
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "w-[15rem] border-border/25 text-base",
          })}
        >
          <span>View All</span>
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
