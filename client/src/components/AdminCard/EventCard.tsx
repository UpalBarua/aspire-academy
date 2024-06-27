import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useDeleteEventMutation } from "@/redux/api/baseApi";
import { TEvent } from "@/config/type";

export default function EventCard({ event }: { event: TEvent }) {
  const { title, _id, details, date, image } = event;
  const [deleteEvent] = useDeleteEventMutation();
  return (
    <div className="rounded-md bg-secondary p-4">
      <div className="flex justify-end gap-4">
        <Button className="rounded-md font-bold">Edit</Button>
        <Button
          onClick={() => deleteEvent(_id)}
          className="rounded-md font-bold"
        >
          Delete
        </Button>
      </div>
      <Image height={400} width={400} src={image} alt="blog image" />
      <h1 className="text-2xl font-bold">{title}</h1>
      <h4 className="pb-2">{date}</h4>
      <p>{details}</p>
    </div>
  );
}
