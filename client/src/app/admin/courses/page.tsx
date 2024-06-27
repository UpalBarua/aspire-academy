import { AdminCourseCard } from "@/components/admin/admin-course-card";
import { buttonVariants } from "@/components/ui/button";
import type { TCourse } from "@/types";
import Link from "next/link";

async function getAllCourses() {
  const data = await fetch("http://localhost:8080/api/courses").then((res) =>
    res.json(),
  );
  return data.data;
}

export default async function AdminCoursePage() {
  const courses = await getAllCourses();

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="py-4 text-3xl font-bold">Manage Courses</h2>
        <Link className={buttonVariants({})} href="/admin/courses/new">
          New Course
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {courses.map((course: TCourse) => (
          <AdminCourseCard key={course._id} {...course} />
        ))}
      </div>
    </section>
  );
}
