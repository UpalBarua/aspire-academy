import {
  CalendarClock,
  ChevronsUpDown,
  ExternalLink,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TCourse } from "@/types";

import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";

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

async function getUserDetails(userEmail: unknown) {
  try {
    if (typeof userEmail !== "string") {
      throw new Error("Please provide valid email");
    }

    const data = await fetch(
      `http://localhost:8080/api/users/${userEmail}`,
    ).then((res) => res.json());

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function ProfilePage() {
  const session = await auth();
  const userDetails = await getUserDetails(session?.user?.email);
  const courseDetails: TCourse = await getCourseDetails(
    userDetails.enrolledCourses[0] as string,
  );

  return (
    <main className="pb-section container grid grid-cols-8 items-start gap-8">
      <section className="col-span-2 grid gap-2 rounded-3xl border border-border/25 bg-secondary/25 p-6 shadow">
        <div className="flex items-center gap-x-4">
          <Avatar className="size-[3rem] border border-border/25">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="leading-relaxed">
            <p>Sheldon Cooper</p>
            <p className="text-sm">{session?.user?.email}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2 py-6">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <Link href="">Link {i + 1}</Link>
            ))}
        </div>
        <Button variant="secondary" className="text-destructive">
          <LogOut />
          <span>Logout</span>
        </Button>
      </section>
      <section className="col-span-6">
        <div className="flex items-start justify-between rounded-3xl border border-transparent p-4 hover:border-border/25 hover:bg-secondary/25">
          <div className="flex h-max items-start gap-x-8">
            <Image
              src={courseDetails.coverPicture}
              alt={courseDetails.name}
              height="200"
              width="200"
              className="h-auto rounded-2xl"
            />
            <h2 className="text-pretty pe-10 text-3xl font-bold leading-[1.35]">
              {courseDetails.name}
            </h2>
          </div>
          <ChevronsUpDown className="size-10" />
        </div>
        <div>
          <div className="mt-6">
            <h3 className="pb-4 text-2xl font-medium leading-relaxed">
              Next Classes
            </h3>
            <div className="grid grid-cols-5 items-start gap-6">
              <ul className="col-span-3 space-y-6">
                <li className="flex items-start justify-between gap-x-6 rounded-3xl border border-border/25 bg-secondary/25 p-6 font-medium">
                  <div className="flex flex-col gap-4">
                    <p className="max-w-prose text-pretty text-lg leading-relaxed">
                      Lorem ipsum dolor sit amet, qui minim labore adipisicing
                      minim sint cillum sint consectetur cupidatat.
                    </p>
                    <time className="flex items-center gap-x-2.5 font-medium">
                      <CalendarClock className="size-5 text-primary" />
                      <span>11 June 24</span>
                      <span>11:26 AM</span>
                    </time>
                  </div>
                  <a href="#" className={buttonVariants({})}>
                    <ExternalLink className="size-5" />
                    <span>Class Link</span>
                  </a>
                </li>
                <li className="flex items-start justify-between gap-x-6 rounded-3xl border border-border/25 bg-secondary/25 p-6 font-medium">
                  <div className="flex flex-col gap-4">
                    <p className="max-w-prose text-pretty text-lg leading-relaxed">
                      Lorem ipsum dolor sit amet, qui minim labore adipisicing
                      minim sint cillum sint consectetur cupidatat.
                    </p>
                    <time className="flex items-center gap-x-2.5 font-medium">
                      <CalendarClock className="size-5 text-primary" />
                      <span>11 June 24</span>
                      <span>11:26 AM</span>
                    </time>
                  </div>
                  <a href="#" className={buttonVariants({})}>
                    <ExternalLink className="size-5" />
                    <span>Class Link</span>
                  </a>
                </li>
                <li className="flex items-start justify-between gap-x-6 rounded-3xl border border-border/25 bg-secondary/25 p-6 font-medium">
                  <div className="flex flex-col gap-4">
                    <p className="max-w-prose text-pretty text-lg leading-relaxed">
                      Lorem ipsum dolor sit amet, qui minim labore adipisicing
                      minim sint cillum sint consectetur cupidatat.
                    </p>
                    <time className="flex items-center gap-x-2.5 font-medium">
                      <CalendarClock className="size-5 text-primary" />
                      <span>11 June 24</span>
                      <span>11:26 AM</span>
                    </time>
                  </div>
                  <a href="#" className={buttonVariants({})}>
                    <ExternalLink className="size-5" />
                    <span>Class Link</span>
                  </a>
                </li>
              </ul>
              <div className="col-span-2 rounded-3xl border border-border/25 bg-secondary/25 p-6 font-medium">
                <h3 className="pb-2 text-2xl font-medium leading-relaxed">
                  Pending Assignment
                </h3>
                <p className="pb-6 leading-relaxed text-foreground/80">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ratione aspernatur voluptate quia sint magnam voluptatem
                  ducimus vel aperiam. Vel modi porro, ipsum quam veniam aut
                  architecto impedit tempore ut odit.
                </p>
                <a href="#" className={buttonVariants({})}>
                  <ExternalLink className="size-5" />
                  <span>Details</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
