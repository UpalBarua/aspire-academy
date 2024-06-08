import React from "react";

import { EventCard } from "@/components/event-card";
import { events } from "@/config";
import { SectionHeading } from "@/components/ui/section-heading";

export default function EventsPage() {
  return (
    <section className="pb-section container">
      <SectionHeading
        heading="Our Events"
        subHeading="Lorem ipsum dolor sit amet, ipsum dolor sit qui minim labore ipsum dolor adipisicing minim sint cillum sint consectetur cupidatat."
      />
      <div className="mx-auto grid max-w-5xl grid-cols-1 justify-items-center md:grid-cols-3">
        <div className="col-span-1 pb-8 text-5xl font-extrabold tracking-tight text-foreground/40 md:text-6xl">
          2024
        </div>
        <div className="col-span-2 space-y-5">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
