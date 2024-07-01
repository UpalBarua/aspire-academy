import { Quote, Trash2 } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { TTestimonial } from "@/config/type";
import { useDeleteTestimonialMutation } from "@/redux/api/baseApi";
import { Button } from "../ui/button";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: TTestimonial;
}) {
  const { _id, name, image, review, batch } = testimonial;

  const [deleteHeTestimonial] = useDeleteTestimonialMutation();
  return (
    <div>
      <div className="relative space-y-6 overflow-hidden rounded-3xl border border-border/25 bg-secondary/50 p-6 shadow">
        <div className="flex justify-end gap-4">
          <Button className="hidden rounded-md font-bold">Edit</Button>
          <Button
            onClick={() => deleteHeTestimonial(_id)}
            className="mb-2 flex items-center gap-2 rounded-md bg-red-600 font-bold text-white"
          >
            <Trash2 />
            Delete
          </Button>
        </div>
        <Quote className="size-10 text-foreground/25" />
        <p className="text-pretty leading-relaxed text-foreground/80">
          {review}
        </p>
        <div className="flex items-center gap-x-2">
          <Avatar>
            <AvatarImage
              className="object-cover object-center"
              src={image}
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium">{name}</h4>
            <span className="text-foreground/60">{batch}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
