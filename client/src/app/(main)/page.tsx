import { RecentEvents } from "@/components/home/recent-events";
import Testimonial from "@/components/testimonial";
import { WhatWeProvide } from "@/components/home/what-we-provide";
import { Hero } from "@/components/home/hero";
import { ExploreCourses } from "@/components/home/explore-courses/explore-courses";
import { Stats } from "@/components/home/stats";

export default async function Home() {
  return (
    <div>
      {/* <Hero /> */}
      {/* <ExploreCourses /> */}
      {/* <WhatWeProvide /> */}
      {/* <Stats /> */}
      <RecentEvents />
      {/* <Testimonial /> */}
    </div>
  );
}
