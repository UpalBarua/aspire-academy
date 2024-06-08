import { GraduationCap, Landmark } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { alumni } from "@/config";

export default function AlumniPage() {
  return (
    <section className="pb-section container">
      <SectionHeading
        heading="Our Successful Alumni"
        subHeading="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim labore adipisicing minim sint cillum minim sint cillum sint consectetur cupidatat."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {alumni.map((person) => (
          <AlumniCard key={person._id} {...person} />
        ))}
      </div>
    </section>
  );
}

type Alumni = (typeof alumni)[number];

function AlumniCard({ image, name, department }: Alumni) {
  return (
    <div
      className="h-full min-h-[30rem] rounded-3xl border border-border/25 bg-cover bg-center shadow"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex h-full items-end">
        <div className="m-1 flex w-full flex-col justify-center space-y-2 rounded-3xl bg-background/80 p-6 backdrop-blur-md backdrop-saturate-200">
          <h3 className="pb-2 text-2xl font-medium text-foreground">
            {name} Lorem Ipsum
          </h3>
          <div className="flex items-center gap-x-2">
            <GraduationCap className="size-5" />
            <span>{department}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <Landmark className="size-5" />
            <span>{department}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
