import { EventCard } from "@/components/event-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TEvent } from "@/config/type";

async function getAllEvents() {
  try {
    const data = await fetch(
      "https://aspire-academy-server.vercel.app/api/latest-event",
      {
        cache: "no-store",
      },
    ).then((res) => res.json());

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function EventsPage() {
  const events: TEvent[] = await getAllEvents();

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
          {events.map((event: TEvent) => (
            <EventCard key={event._id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
