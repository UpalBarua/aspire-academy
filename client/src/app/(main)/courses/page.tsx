import { CourseCard } from "@/components/course-card";
import { CourseSearch } from "@/components/course-search";
import type { TCourse } from "@/types";

async function getAllCourses() {
  try {
    const data = await fetch("http://localhost:8080/api/courses").then((res) =>
      res.json(),
    );

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function CoursesPage() {
  const courses = await getAllCourses();

  return (
    <div className="pb-section container">
      <div className="relative flex flex-col gap-6 pb-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-medium tracking-tight">
            Courses to get you started
          </h2>
          <p className="leading-relaxed text-secondary-foreground">
            Explore courses from experienced, real-world experts.
          </p>
        </div>
        <CourseSearch />
      </div>
      {courses.length ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course: TCourse) => (
            <CourseCard key={course._id} {...course} />
          ))}
        </div>
      ) : (
        <div className="flex h-[15rem] w-full items-center justify-center text-center">
          <p className="text-4xl font-medium text-foreground/25">
            No Courses Found
          </p>
        </div>
      )}
    </div>
  );
}
