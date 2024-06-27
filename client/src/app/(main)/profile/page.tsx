import {
  CalendarClock,
  ChevronsUpDown,
  ExternalLink,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";

const COURSE = {
  id: 1,
  duration: "6h 50m",
  batch: "Offline",
  course_name: "Expert in Graphics",
  details:
    "It is a course where you learn how you use Graphics fundamental in a project.Explore Real time project Design",
  instructor: "Shawon Hasan",
  amount: "5,500",
  course_banner:
    "https://images.unsplash.com/photo-1610433572201-110753c6cff9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  instructor_pic:
    "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D",
};

export default function ProfilePage() {
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
            <p className="text-sm">sheldon@yahoomail.com</p>
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
              src={COURSE.course_banner}
              alt={COURSE.course_name}
              height="200"
              width="200"
              className="h-auto rounded-2xl"
            />
            <h2 className="text-pretty pe-10 text-3xl font-bold leading-[1.35]">
              {COURSE.course_name} Lorem ipsum dolor sit amet Lorem, ipsum
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
