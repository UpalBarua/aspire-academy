import { Quote } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionHeading } from "@/components/ui/section-heading";
import { Testimonial } from "@/types";

async function getAllTestimonials() {
  try {
    const data = await fetch(
      "https://aspire-academy-server.vercel.app/api/testimonial",
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

export async function Testimonials() {
  const testimonials: Testimonial[] = await getAllTestimonials();

  return (
    <section className="pb-section container">
      <SectionHeading
        heading="Hear From Our Students"
        subHeading="Insights and Testimonials from Our Community: Discover the Impact of Our Programs Through Our Students Eyes"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials
          ?.slice(0, 6)
          .map(({ _id, image, review, name, batch }: Testimonial) => (
            <div
              key={_id}
              className="relative space-y-6 overflow-hidden rounded-3xl border border-border/25 bg-secondary/50 p-6 shadow"
            >
              <Quote className="size-10 text-foreground/25" />
              <p className="text-pretty leading-relaxed text-foreground/80">
                {review}
              </p>
              <div className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src={image} alt={name} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{name}</h4>
                  <span className="text-foreground/60">{batch}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
