import {
  ArrowDownRightFromCircle,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

type CourseCardProps = {
  id: number;
  duration: string;
  batch: string;
  course_name: string;
  details: string;
  instructor: string;
  amount: string;
  course_banner: string;
  instructor_pic: string;
};

export function CourseCard({
  amount,
  course_banner,
  course_name,
  details,
  id,
  instructor,
  instructor_pic,
}: Readonly<CourseCardProps>) {
  return (
    <Card className="max-w-[28rem] border-border/50 bg-card/25">
      <Image
        src={course_banner}
        alt={course_name}
        className="w-full rounded-tl-[inherit] rounded-tr-[inherit] border-b border-border/50 object-cover object-center"
        height="200"
        width="350"
      />
      <div className="flex items-center gap-x-2 p-4">
        <div className="flex max-w-max items-center gap-x-2 rounded-full border border-border/50 px-4 py-2 text-sm leading-none">
          <GraduationCap className="h-4 w-4 text-primary" />
          <span>Batch 06</span>
        </div>
        <div className="flex max-w-max items-center gap-x-2 rounded-full border border-border/50 px-4 py-2 text-sm leading-none">
          <ArrowDownRightFromCircle className="h-4 w-4 text-primary" />
          <span>Enrolling: 22 May - 01 June</span>
        </div>
      </div>
      <CardContent className="space-y-2 px-6">
        <CardTitle>
          {course_name} Lorem ipsum dolor sit amet Lorem, ipsum
        </CardTitle>
        <p className="text-pretty leading-relaxed text-secondary-foreground">
          {details.length > 120 ? details.slice(0, 120) + "..." : details} Lorem
          ipsum sint cillum
        </p>
        <div className="flex items-end justify-between pb-6">
          <div className="flex items-center gap-x-2.5">
            <Avatar className="h-10 w-10">
              <AvatarImage src={instructor_pic} alt={instructor} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Mentor</p>
              <p>{instructor}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="line-through">৳{amount}</p>
            <p className="text-3xl font-medium">৳{amount}</p>
          </div>
        </div>
        <Link
          href={`/courses/${id}`}
          className={buttonVariants({
            variant: "secondary",
            className: "w-full bg-secondary/80",
          })}
        >
          Learn More
          <ChevronRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
