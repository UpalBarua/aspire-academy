import Counter from "@/components/Counter";
import RecentEvent from "@/components/recentEvent";
import Testimonial from "@/components/testimonial";
import WhatWeProvide from "@/components/what-we-provide";
import { Hero } from "@/components/home/hero";
import { ExploreCourses } from "@/components/home/explore-courses/explore-courses";

export default async function Home() {
  return (
    <div>
      <Hero />
      <ExploreCourses />
      <WhatWeProvide />
      <Counter />
      <RecentEvent />
      <Testimonial />
    </div>
  );
}
