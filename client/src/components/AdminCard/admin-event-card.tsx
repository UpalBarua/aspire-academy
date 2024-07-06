import { format } from "date-fns";
import { Calendar, Trash2 } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { TEvent } from "@/config/type";
import { useDeleteEventMutation } from "@/redux/api/baseApi";

export function AdminEventCard({ title, _id, details, date, image }: TEvent) {
  const [deleteEvent] = useDeleteEventMutation();

  return (
    <Card className="relative rounded-md border-border/50 bg-card/25 transition-colors duration-300">
      <Image
        height={400}
        width={400}
        src={image}
        alt="blog image"
        className="mb-4 h-[20rem] w-full rounded-tl-md rounded-tr-md border-b border-border/25 object-cover object-center"
      />
      <CardContent className="space-y-2">
        <CardTitle>{title}</CardTitle>
        <div className="flex items-center gap-x-2 pb-2">
          <Calendar className="size-5" />
          <time>{format(new Date(date), "dd LLL y")}</time>
        </div>
        <p className="leading-relaxed text-foreground/80">
          {details.slice(0, 200) + "..."}
        </p>
      </CardContent>
      <Button
        onClick={() => deleteEvent(_id)}
        size="sm"
        variant="destructive"
        className="absolute right-0 top-0 m-2 text-foreground"
      >
        <Trash2 className="size-5" />
        <span>Delete</span>
      </Button>
    </Card>
  );
}
