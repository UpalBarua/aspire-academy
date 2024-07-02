"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { useGetAlumniQuery } from "@/redux/api/baseApi";
import { GraduationCap } from "lucide-react";

export default function AlumniPage() {
  const { data, isLoading } = useGetAlumniQuery("");

  if (isLoading) {
    <h1>loading</h1>;
  }
  return (
    <section className="pb-section container">
      <SectionHeading
        heading="Our Successful Alumni"
        subHeading="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim labore adipisicing minim sint cillum minim sint cillum sint consectetur cupidatat."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data?.data?.map((person: any) => (
          <AlumniCard key={person._id} {...person} />
        ))}
      </div>
    </section>
  );
}

function AlumniCard({ image, name, course, batchNo }: any) {
  return (
    <div
      className="h-full min-h-[30rem] rounded-3xl border border-border/25 bg-cover bg-center shadow"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex h-full items-end">
        <div className="m-1 flex w-full flex-col justify-center space-y-2 rounded-3xl bg-background/80 p-6 backdrop-blur-md backdrop-saturate-200">
          <h3 className="pb-2 text-2xl font-medium text-foreground">{name}</h3>
          <div className="flex items-center gap-x-2">
            <GraduationCap className="size-5" />
            <span>{course}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <span>Batch: {batchNo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
