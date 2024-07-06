"use client";

import { AdminCourseCard } from "@/components/admin/admin-course-card";
import { buttonVariants } from "@/components/ui/button";
import { useGetCoursesQuery } from "@/redux/api/baseApi";
import type { TCourse } from "@/types";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function AdminCoursePage() {
  const { isLoading, data: courses } = useGetCoursesQuery("");

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="py-4 text-3xl font-bold">Manage Courses</h2>
        <Link className={buttonVariants({})} href="/admin/courses/new">
          New Course
        </Link>
      </div>
      {isLoading ? (
        <div className="flex min-h-[20rem] flex-col items-center justify-center gap-4">
          <Loader2 className="size-10 animate-spin" />
          <span>Please Wait</span>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {courses.data.map((course: TCourse) => (
            <AdminCourseCard key={course._id} {...course} />
          ))}
        </div>
      )}
    </section>
  );
}
