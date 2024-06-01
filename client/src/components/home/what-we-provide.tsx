import { SectionHeading } from "@/components/ui/section-heading";
import { facilities } from "@/config";

export function WhatWeProvide() {
  return (
    <section className="pb-section container">
      <SectionHeading
        heading="What We Provide"
        subHeading="Those service always we can do it properly. There are lot of student happy about it and hopefully you can take a proper benefit from here."
      />
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {facilities.map((facility) => (
          <FacilityCard key={facility.title} {...facility} />
        ))}
      </ul>
    </section>
  );
}

type FacilityCardProps = (typeof facilities)[number];

function FacilityCard({ Icon, title, color, description }: FacilityCardProps) {
  return (
    <li className="group relative flex flex-col items-start justify-center overflow-hidden rounded-3xl border border-border/25 bg-secondary/50 p-8 pr-28 transition-colors duration-300 hover:bg-secondary/75">
      <Icon
        style={{ color }}
        className="absolute bottom-0 right-0 size-[8rem] translate-x-[15%] translate-y-[15%] -rotate-45 transition-transform duration-300 group-hover:translate-x-[5%] group-hover:translate-y-[5%]"
      />
      <h3 className="pb-3 text-2xl font-medium tracking-tight">{title}</h3>
      <p className="relative z-[5] text-pretty leading-relaxed text-foreground/60 group-hover:text-foreground/90">
        {description}
      </p>
    </li>
  );
}
