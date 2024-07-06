"use client";

import { Loader2 } from "lucide-react";
import Link from "next/link";

import { AdminEventCard } from "@/components/AdminCard/admin-event-card";
import { buttonVariants } from "@/components/ui/button";
import { TEvent } from "@/config/type";
import { useGetEventQuery } from "@/redux/api/baseApi";

export default function AdminEventsPage() {
  const { data, isLoading } = useGetEventQuery("");

  return (
    <section className="pb-section">
      <div className="flex items-center justify-between pb-6">
        <h2 className="py-4 text-3xl font-bold">Our Events</h2>
        <Link className={buttonVariants({})} href="/admin/events/new">
          New Event
        </Link>
      </div>
      {isLoading ? (
        <div className="flex min-h-[20rem] flex-col items-center justify-center gap-4">
          <Loader2 className="size-10 animate-spin" />
          <span>Please Wait</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.data.map((event: TEvent) => (
            <AdminEventCard key={event._id} {...event} />
          ))}
        </div>
      )}
    </section>
  );
}
