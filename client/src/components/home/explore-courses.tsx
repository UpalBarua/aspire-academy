import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CourseTabs } from "@/components/home/course-tabs";

export function ExploreCourses() {
  return (
    <section className="">
      <h2 className="pb-10 text-center text-4xl font-medium tracking-tight">
        Explore Our Courses
      </h2>
      <CourseTabs />
      <div className="mt-10 flex items-center justify-center">
        <Button variant="secondary" size="lg" className="w-[15rem]">
          <span>View All</span>
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
