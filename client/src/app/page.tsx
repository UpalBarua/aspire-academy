import Counter from "@/components/Counter";
import RecentEvent from "@/components/recentEvent";
import Testimonial from "@/components/testimonial";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import WhatWeProvide from "@/components/what-we-provide";

export default async function Home() {
  return (
    <div>
      <h1 className="p-4 text-2xl font-medium">Aspire Academy</h1>
      <ThemeToggle />
      <WhatWeProvide />
      <Counter />
      <RecentEvent />
      <Testimonial />
    </div>
  );
}