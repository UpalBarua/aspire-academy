"use client";
import React from "react";
import { TEvent } from "@/config/type";
import { useGetEventQuery } from "@/redux/api/baseApi";
import EventCard from "@/components/AdminCard/EventCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

const AllEvent = () => {
  const { data, isLoading } = useGetEventQuery("");
  console.log(data);

  if (isLoading) {
    <h1>Loading</h1>;
  }
  return (
    <section>
      <div className="mt-8 flex justify-evenly">
        <div>
          <h1 className="mb-8 ml-4 text-2xl font-bold text-primary">
            Here are All Event:{" "}
          </h1>
        </div>
        <div>
          <Link href="/admin/add-event">
            <Button className="flex items-center gap-2 rounded-md font-bold">
              <Plus />
              Add Event
            </Button>
          </Link>
        </div>
      </div>
      <div className="ml-4 mr-4 grid grid-cols-2 gap-4">
        {data?.data?.map((event: TEvent) => (
          <EventCard key={event?._id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default AllEvent;
