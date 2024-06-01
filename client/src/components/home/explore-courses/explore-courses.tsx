import { ArrowRight } from "lucide-react";

import { CourseTabs } from "@/components/home/explore-courses/course-tabs";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExploreCourses() {
  return (
    <section className="container">
      <SectionHeading
        heading="Explore Our Courses"
        subHeading="Explore our diverse range of courses to boost your skills and discover
        new passions. Start your learning journey today!"
      />
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
