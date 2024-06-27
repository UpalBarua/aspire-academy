import { Quote } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { TTestimonial } from "@/config/type";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: TTestimonial;
}) {
  const { _id, name, image, review, batch } = testimonial;
  return (
    <div className="relative space-y-6 overflow-hidden rounded-3xl border border-border/25 bg-secondary/50 p-6 shadow">
      <Quote className="size-10 text-foreground/25" />
      <p className="text-pretty leading-relaxed text-foreground/80">
        {review} Lorem ipsum dolor sit amet.
      </p>
      <div className="flex items-center gap-x-2">
        <Avatar>
          <AvatarImage src={image} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium">{name}</h4>
          <span className="text-foreground/60">{batch}</span>
        </div>
      </div>
    </div>
  );
}
