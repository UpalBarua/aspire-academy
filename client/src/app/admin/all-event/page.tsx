"use client";
import React from "react";
import { TEvent } from "@/config/type";
import { useGetEventQuery } from "@/redux/api/baseApi";
import EventCard from "@/components/AdminCard/EventCard";

const AllEvent = () => {
  const { data, isLoading } = useGetEventQuery("");

  if (isLoading) {
    <h1>Loading</h1>;
  }
  return (
    <section>
      <h1 className="mb-8 ml-4 mt-8 text-2xl font-bold text-primary">
        Here are All Event:{" "}
      </h1>
      <div className="ml-4 mr-4 grid grid-cols-2 gap-4">
        {data?.data?.map((event: TEvent) => (
          <EventCard key={event?._id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default AllEvent;
