"use client";
import { Quote } from "lucide-react";
import React from "react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function Testimonial() {
  const allTestimonial = [
    {
      id: 1,
      name: "Ashik khan",
      course: "web development",
      review:
        "Diam quis enim lobortis scelerisque fermentum dui fauci in ornare. Donec pretium vulputate sapien nec sagitti aliquam malesuada bibendum.",
    },
    {
      id: 1,
      name: "Ashik khan",
      course: "web development",
      review:
        "Diam quis enim lobortis scelerisque fermentum dui fauci in ornare. Donec pretium vulputate sapien nec sagitti aliquam malesuada bibendum.",
    },
    {
      id: 1,
      name: "Ashik khan",
      course: "web development",
      review:
        "Diam quis enim lobortis scelerisque fermentum dui fauci in ornare. Donec pretium vulputate sapien nec sagitti aliquam malesuada bibendum.",
    },
    {
      id: 1,
      name: "Ashik khan",
      course: "web development",
      review:
        "Diam quis enim lobortis scelerisque fermentum dui fauci in ornare. Donec pretium vulputate sapien nec sagitti aliquam malesuada bibendum.",
    },
    {
      id: 1,
      name: "Ashik khan",
      course: "web development",
      review:
        "Diam quis enim lobortis scelerisque fermentum dui fauci in ornare. Donec pretium vulputate sapien nec sagitti aliquam malesuada bibendum.",
    },
    {
      id: 1,
      name: "Ashik khan",
      course: "web development",
      review:
        "Diam quis enim lobortis scelerisque fermentum dui fauci in ornare. Donec pretium vulputate sapien nec sagitti aliquam malesuada bibendum.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl">
      <p className="mx-auto mb-2 w-28 rounded-md bg-secondary p-2  text-center">
        Testimonial
      </p>
      <h1 className="pb-8 text-center text-3xl font-bold text-black dark:text-accent">
        What Our Student Say ?
      </h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {allTestimonial?.map((testimonial) => (
          <div
            key={testimonial?.id}
            className="m-4 transform rounded-md bg-secondary p-4 transition-transform duration-300 hover:scale-105 lg:m-0"
          >
            <Quote />
            <h4 className="pt-4">{testimonial?.review}</h4>
            <p className="border-b-2 pt-4"></p>
            <div className="flex gap-4 pt-8">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
              <div className="pb-2">
                <h3 className="font-semibold ">{testimonial?.name}</h3>
                <h4>{testimonial?.course}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
