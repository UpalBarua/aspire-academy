"use client";
import { Button } from "@/components/ui/button";
import ManagementCard from "@/components/AdminCard/ManagementCard";
import { TManagement } from "@/config/type";
import { useGetManagementQuery } from "@/redux/api/baseApi";

import { Plus } from "lucide-react";
import Link from "next/link";

const AllManagement = () => {
  const { data, isLoading } = useGetManagementQuery("");

  if (isLoading) {
    <h1>Loading</h1>;
  }

  return (
    <section>
      <div className="mt-8 flex items-center justify-between">
        <h1 className="mb-8 ml-4 text-2xl font-bold text-primary">
          Here are All Testimonial:{" "}
        </h1>
        <Link href="/admin/add-management">
          <Button className="flex items-center gap-2 rounded-md font-bold">
            <Plus />
            Add Testimonial
          </Button>
        </Link>
      </div>
      <div className="ml-4 mr-4 mt-6 grid grid-cols-2 gap-4">
        {data?.data.map((management: TManagement) => (
          <ManagementCard key={management?._id} management={management} />
        ))}
      </div>
    </section>
  );
};

export default AllManagement;
