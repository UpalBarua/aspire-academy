import { ExploreCourses } from "@/components/home/explore-courses/explore-courses";
import { Hero } from "@/components/home/hero";
import { RecentEvents } from "@/components/home/recent-events";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";
import { WhatWeProvide } from "@/components/home/what-we-provide";
import { Faq } from "@/components/home/faq";

export default async function Home() {
  return (
    <div>
      <Hero />
      <ExploreCourses />
      <WhatWeProvide />
      <Stats />
      <RecentEvents />
      <Testimonials />
      <Faq />
    </div>
  );
}
