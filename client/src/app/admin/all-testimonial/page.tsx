"use client";
import TestimonialCard from "@/components/AdminCard/testimonialCard";
import { Button } from "@/components/ui/button";
import { TTestimonial } from "@/config/type";
import { useGetTestimonialQuery } from "@/redux/api/baseApi";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const AllTestimonial = () => {
  const { data, isLoading } = useGetTestimonialQuery("");

  if (isLoading) {
    <h1>Loading</h1>;
  }

  return (
    <section>
      <div className="mt-8 flex items-center justify-between">
        <h1 className="mb-8 ml-4 text-2xl font-bold text-primary">
          Here are All Testimonial:{" "}
        </h1>
        <Link href="/admin/add-testimonial">
          <Button className="flex items-center gap-2 rounded-md font-bold">
            <Plus />
            Add Testimonial
          </Button>
        </Link>
      </div>
      <div className="ml-4 mr-4 mt-6 grid grid-cols-2 gap-4">
        {data?.data.map((testimonial: TTestimonial) => (
          <TestimonialCard key={testimonial?._id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default AllTestimonial;
