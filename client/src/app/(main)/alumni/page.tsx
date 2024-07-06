import { SectionHeading } from "@/components/ui/section-heading";
import { TAlumni } from "@/config/type";
import { GraduationCap } from "lucide-react";

async function getAllAlumni() {
  try {
    const data = await fetch(
      "https://aspire-academy-server.vercel.app/api/alumni",
      {
        cache: "no-store",
      },
    ).then((res) => res.json());

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function AlumniPage() {
  const alumni: TAlumni[] = await getAllAlumni();

  return (
    <section className="pb-section container">
      <SectionHeading
        heading="Our Successful Alumni"
        subHeading="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim labore adipisicing minim sint cillum minim sint cillum sint consectetur cupidatat."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {alumni.map((person: any) => (
          <AlumniCard key={person._id} {...person} />
        ))}
      </div>
    </section>
  );
}

function AlumniCard({ image, name, course, batchNo }: any) {
  return (
    <div
      className="h-full min-h-[30rem] rounded-3xl border border-border/25 bg-cover bg-center shadow"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex h-full items-end">
        <div className="m-1 flex w-full flex-col justify-center space-y-2 rounded-3xl bg-background/80 p-6 backdrop-blur-md backdrop-saturate-200">
          <h3 className="pb-2 text-2xl font-medium text-foreground">{name}</h3>
          <div className="flex items-center gap-x-2">
            <GraduationCap className="size-5" />
            <span>{course}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <span>Batch: {batchNo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
