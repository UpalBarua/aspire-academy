"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useGetAlumniQuery } from "@/redux/api/baseApi";
import { TAlumni } from "@/config/type";
import AlumniCard from "@/components/AdminCard/AlumniCard";

const AllAlumni = () => {
  const { data, isLoading } = useGetAlumniQuery("");

  if (isLoading) {
    <h1>Loading</h1>;
  }

  return (
    <section>
      <div className="mt-8 flex items-center justify-between">
        <h1 className="mb-8 ml-4 text-2xl font-bold text-primary">
          Here are All Alumni:{" "}
        </h1>
        <Link href="/admin/add-alumni">
          <Button className="flex items-center gap-2 rounded-md font-bold">
            <Plus />
            Add Alumni
          </Button>
        </Link>
      </div>
      <div className="ml-4 mr-4 mt-6 grid grid-cols-3 gap-4">
        {data?.data.map((alumni: TAlumni) => (
          <AlumniCard key={alumni?._id} alumni={alumni} />
        ))}
      </div>
    </section>
  );
};

export default AllAlumni;
