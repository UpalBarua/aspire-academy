"use client";

import { EventCard } from "@/components/event-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TEvent } from "@/config/type";
import { useGetEventQuery } from "@/redux/api/baseApi";
import { Loader2 } from "lucide-react";

export default function EventsPage() {
  const { data, isLoading } = useGetEventQuery("");

  return (
    <section className="pb-section container">
      <SectionHeading
        heading="Our Events"
        subHeading="Lorem ipsum dolor sit amet, ipsum dolor sit qui minim labore ipsum dolor adipisicing minim sint cillum sint consectetur cupidatat."
      />
      {isLoading ? (
        <div className="flex min-h-[20rem] flex-col items-center justify-center gap-4">
          <Loader2 className="size-10 animate-spin" />
          <span>Please Wait</span>
        </div>
      ) : (
        <div className="mx-auto grid max-w-5xl grid-cols-1 justify-items-center md:grid-cols-3">
          <div className="col-span-1 pb-8 text-5xl font-extrabold tracking-tight text-foreground/40 md:text-6xl">
            2024
          </div>
          <div className="col-span-2 space-y-5">
            {data.data.map((event: TEvent) => (
              <EventCard key={event._id} {...event} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
