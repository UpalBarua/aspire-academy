import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@/config";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  return (
    <section className="pb-section container">
      <SectionHeading
        heading="Hear From Our Students"
        subHeading="Insights and Testimonials from Our Community: Discover the Impact of Our Programs Through Our Students Eyes"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials?.map((testimonial) => (
          <div
            key={testimonial?.id}
            className="relative space-y-6 overflow-hidden rounded-3xl border border-border/25 bg-secondary/50 p-6 shadow"
          >
            <Quote className="size-10 text-foreground/25" />
            <p className="text-pretty leading-relaxed text-foreground/80">
              {testimonial?.review} Lorem ipsum dolor sit amet.
            </p>
            <div className="flex items-center gap-x-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">{testimonial?.name}</h4>
                <span className="text-foreground/60">
                  {testimonial?.course}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
