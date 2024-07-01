import { format } from "date-fns";
import {
  ArrowDownRightFromCircle,
  CalendarDays,
  CreditCard,
  GraduationCap,
  MessageCircleQuestion,
  ShoppingCart,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { TCourse } from "@/types";

type CoursePageProps = {
  params: {
    courseId: string;
  };
};

async function getCourseDetails(courseId: unknown) {
  try {
    if (typeof courseId !== "string") {
      throw new Error("Please provide valid courseId");
    }

    const data = await fetch(
      `http://localhost:8080/api/courses/${courseId}`,
    ).then((res) => res.json());

    console.log({ data });
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function CoursePage({
  params,
}: Readonly<CoursePageProps>) {
  const courseDetails: TCourse = await getCourseDetails(params.courseId);

  const {
    _id,
    name: courseName,
    instructor,
    description,
    coverPicture,
    enrollment,
    duration,
    alumni,
    price,
    batch,
  } = courseDetails;

  console.log(courseDetails);

  return (
    <main className="pb-section container grid grid-cols-1 items-start gap-4 lg:grid-cols-12 lg:gap-6">
      <section className="w-full space-y-2 rounded-3xl border border-transparent shadow lg:sticky lg:col-span-4 lg:border-border/25 lg:bg-card/25">
        <Image
          className="min-h-[20rem] w-full rounded-lg border-border/25 object-cover object-center lg:rounded-none lg:rounded-tl-[inherit] lg:rounded-tr-[inherit] lg:border-b"
          src={coverPicture}
          alt={courseName}
          height="200"
          width="350"
        />
        <div className="flex flex-col gap-6 px-2 lg:p-6">
          <h1 className="text-3xl font-medium tracking-tight lg:hidden">
            {courseName}
          </h1>
          <div className="space-y-4">
            <div className="flex items-center gap-x-3">
              <span className="text-3xl font-bold">৳{price?.discounted}</span>
              <span className="line-through">৳{price?.regular}</span>
            </div>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-x-3">
              <Users className="h-5 w-5" />
              <span>{alumni} People completed this course.</span>
            </li>
            <li className="flex items-center gap-x-3">
              <Trophy className="h-5 w-5" />
              <span>Certificate of completion.</span>
            </li>
            <li className="flex items-center gap-x-3">
              <CalendarDays className="h-5 w-5" />
              <span>{duration} months duration.</span>
            </li>
            <li className="flex items-center gap-x-3">
              <MessageCircleQuestion className="h-5 w-5" />
              <span>Quiz and assignments.</span>
            </li>
          </ul>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row lg:flex-col sm:[&>*]:flex-1 lg:[&>*]:flex-none">
            <Link className={buttonVariants({})} href={`/checkout/${_id}`}>
              <CreditCard className="h-4 w-4" />
              <span>Purchase Now</span>
            </Link>
            <Button variant="secondary">
              <ShoppingCart className="h-4 w-4" />
              <span>Add to Cart</span>
            </Button>
          </div>
        </div>
        <div className="absolute right-0 top-0 flex w-full flex-wrap items-center justify-between gap-2 p-2">
          <div className="flex max-w-max items-center gap-x-2 rounded-full border border-border/50 bg-secondary px-4 py-2 text-sm leading-none">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span>Batch 0{batch}</span>
          </div>
          <div className="flex max-w-max items-center gap-x-2 rounded-full border border-border/50 bg-secondary px-4 py-2 text-sm leading-none">
            <ArrowDownRightFromCircle className="h-4 w-4 text-primary" />
            <time>
              Enrolling: {format(new Date(enrollment.start), "dd LLL")} -{" "}
              {format(new Date(enrollment.end), "dd LLL")}
            </time>
          </div>
        </div>
      </section>
      <section className="max-w-prose space-y-6 lg:col-span-8">
        <div className="space-y-3 pb-4">
          <h1 className="hidden pb-2 text-3xl font-bold leading-[1.25] tracking-tight lg:block">
            {courseName}
          </h1>
          <h3 className="pb-2 text-2xl font-medium tracking-tight lg:hidden">
            About The Course
          </h3>
          <p className="leading-relaxed text-secondary-foreground">
            {description}
          </p>
        </div>
        <div className="space-y-3 pb-4">
          <h3 className="pb-2 text-2xl font-medium tracking-tight">
            Course Instructor
          </h3>
          <div className="flex items-center gap-x-4 rounded-xl border border-border/50 bg-card/25 px-4 py-3">
            <Avatar className="h-16 w-16">
              <AvatarImage src={instructor.picture} alt={instructor.name} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium">{instructor.name}</h4>
              <p className="max-w-[16rem]">{instructor.title}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
