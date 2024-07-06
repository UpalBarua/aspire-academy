"use client";

import { useGetTestimonialQuery } from "@/redux/api/baseApi";
import { Loader2 } from "lucide-react";
import Link from "next/link";

import TestimonialCard from "@/components/AdminCard/testimonialCard";
import { buttonVariants } from "@/components/ui/button";
import type { TTestimonial } from "@/config/type";

export default function AdminTestimonialsPage() {
  const { data, isLoading } = useGetTestimonialQuery("");

  return (
    <section className="pb-section">
      <div className="flex items-center justify-between pb-6">
        <h2 className="py-4 text-3xl font-bold">Testimonials</h2>
        <Link className={buttonVariants({})} href="/admin/testimonials/new">
          New Testimonial
        </Link>
      </div>
      {isLoading ? (
        <div className="flex min-h-[20rem] flex-col items-center justify-center gap-4">
          <Loader2 className="size-10 animate-spin" />
          <span>Please Wait</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.data.map((testimonial: TTestimonial) => (
            <TestimonialCard key={testimonial._id} {...testimonial} />
          ))}
        </div>
      )}
    </section>
  );
}
