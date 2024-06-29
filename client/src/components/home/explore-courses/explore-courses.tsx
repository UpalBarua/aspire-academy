import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { CourseTabs } from "@/components/home/explore-courses/course-tabs";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExploreCourses() {
  return (
    <section className="pb-section container">
      <SectionHeading
        heading="Explore Our Courses"
        subHeading="Explore our diverse range of courses to boost your skills and discover
        new passions. Start your learning journey today!"
      />
      <CourseTabs />
      <div className="mt-10 flex items-center justify-center">
        <Link
          href="/courses"
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "w-[15rem] border-border/25 text-base",
          })}
        >
          <span>View All</span>
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
