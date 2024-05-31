import { CourseCard } from "@/components/course-card";
import { CourseSearch } from "@/components/course-search";

const COURSE = {
  id: 1,
  duration: "6h 50m",
  batch: "Offline",
  course_name: "Expert in Graphics",
  details:
    "It is a course where you learn how you use Graphics fundamental in a project.Explore Real time project Design",
  instructor: "Shawon Hasan",
  amount: "5,500",
  course_banner:
    "https://images.unsplash.com/photo-1610433572201-110753c6cff9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  instructor_pic:
    "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D",
};

export default function CoursesPage() {
  return (
    <div className="container">
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CourseCard {...COURSE} />
        <CourseCard {...COURSE} />
        <CourseCard {...COURSE} />
      </div>
    </div>
  );
}
