import { CourseForm } from "@/components/course-form";

export default function NewCourse() {
  return (
    <section>
      <h2 className="py-4 pb-8 text-3xl font-bold">Add New Course</h2>
      <CourseForm />
    </section>
  );
}
