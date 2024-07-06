"use client";

import {
  useGetAlumniQuery,
  useDeleteAlumniMutation,
} from "@/redux/api/baseApi";
import { GraduationCap, Loader2, Trash2 } from "lucide-react";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import type { TBlog } from "@/config/type";

export default function AdminAlumniPage() {
  const { data, isLoading } = useGetAlumniQuery("");

  return (
    <section className="pb-section">
      <div className="flex items-center justify-between pb-6">
        <h2 className="py-4 text-3xl font-bold">Alumni</h2>
        <Link className={buttonVariants({})} href="/admin/alumni/new">
          New Alumni
        </Link>
      </div>
      {isLoading ? (
        <div className="flex min-h-[20rem] flex-col items-center justify-center gap-4">
          <Loader2 className="size-10 animate-spin" />
          <span>Please Wait</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.data.map((blog: TBlog) => (
            <AlumniCard key={blog._id} {...blog} />
          ))}
        </div>
      )}
    </section>
  );
}

function AlumniCard({ _id, image, name, course, batchNo }: any) {
  const [deleteAlumni] = useDeleteAlumniMutation();

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
          <div className="flex items-center gap-x-2 pb-4">
            <span>Batch: {batchNo}</span>
          </div>
          <Button variant="destructive" onClick={() => deleteAlumni(_id)}>
            <Trash2 />
            <span>Delete</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
