import { ArrowDownRightFromCircle, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

export function CheckoutCourseCard({
  amount,
  course_banner,
  course_name,
  details,
  id,
  instructor,
  instructor_pic,
}: Readonly<CourseCardProps>) {
  return (
    <Link href={`/courses/${id}`} className="group">
      <Card className="border-border/50 bg-card/25 transition-colors duration-300 group-hover:border-border/75 group-hover:bg-card/50 md:flex md:max-w-full">
        <Image
          src={course_banner}
          alt={course_name}
          className="min-h-[20rem] w-full rounded-tl-[inherit] rounded-tr-[inherit] border-b border-r border-border/50 object-cover object-center group-hover:border-border/75 md:min-h-min md:w-[14rem] md:rounded-bl-[inherit] md:rounded-br-none md:rounded-tr-none"
          height="200"
          width="350"
        />
        <CardContent className="space-y-2 px-6 py-5">
          <CardTitle className="flex items-start justify-between">
            <span className="pr-10">
              {course_name} Lorem ipsum dolor sit amet Lorem, ipsum
            </span>
            <p className="text-3xl font-medium text-foreground/60">৳{amount}</p>
          </CardTitle>
          <div className="flex items-center gap-x-2.5 pt-4">
            <Avatar className="h-10 w-10 border border-border/25">
              <AvatarImage src={instructor_pic} alt={instructor} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-bold">Mentor</p>
              <p>{instructor}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
