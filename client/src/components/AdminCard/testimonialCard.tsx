import { useDeleteTestimonialMutation } from "@/redux/api/baseApi";
import type { Testimonial } from "@/types";
import { Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export default function TestimonialCard({
  _id,
  name,
  image,
  review,
  batch,
}: Testimonial) {
  const [deleteHeTestimonial] = useDeleteTestimonialMutation();

  return (
    <div className="relative space-y-6 overflow-hidden rounded-3xl border border-border/25 bg-secondary/50 p-6 shadow">
      <p className="text-pretty leading-relaxed text-foreground/80">{review}</p>
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
      <Button
        onClick={() => deleteHeTestimonial(_id)}
        variant="destructive"
        className="w-full"
      >
        <Trash2 className="size-5" />
        <span>Delete</span>
      </Button>
    </div>
  );
}
