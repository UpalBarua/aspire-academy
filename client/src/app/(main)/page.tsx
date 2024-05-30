import WhatWeProvide from "@/components/what-we-provide";
import Testimonial from "@/components/testimonial";
import Counter from "@/components/ui/Counter";

export default function Home() {
  return (
    <div className="container">
      <h1>Aspire Academy</h1>
      <WhatWeProvide />
      <Testimonial />
      <Counter />
    </div>
  );
}
