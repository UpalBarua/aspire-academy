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

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function CoursePage() {
  return (
    <main className="pb-section container grid grid-cols-1 items-start gap-4 lg:grid-cols-12 lg:gap-6">
      <section className="w-full space-y-2 rounded-3xl border border-transparent shadow lg:sticky lg:col-span-4 lg:border-border/25 lg:bg-card/25">
        <Image
          className="min-h-[20rem] w-full rounded-lg border-border/25 object-cover object-center lg:rounded-none lg:rounded-tl-[inherit] lg:rounded-tr-[inherit] lg:border-b"
          src="https://images.unsplash.com/photo-1610433572201-110753c6cff9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="course thumbnail"
          height="200"
          width="350"
        />
        <div className="flex flex-col gap-6 px-2 lg:p-6">
          <h1 className="text-3xl font-medium tracking-tight lg:hidden">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <div className="space-y-4">
            <div className="flex items-center gap-x-3">
              <span className="text-3xl font-bold">৳6,000</span>
              <span className="line-through">৳12,000</span>
            </div>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-x-3">
              <Users className="h-5 w-5" />
              <span>500 People completed this course.</span>
            </li>
            <li className="flex items-center gap-x-3">
              <Trophy className="h-5 w-5" />
              <span>Certificate of completion.</span>
            </li>
            <li className="flex items-center gap-x-3">
              <CalendarDays className="h-5 w-5" />
              <span>6 months duration.</span>
            </li>
            <li className="flex items-center gap-x-3">
              <MessageCircleQuestion className="h-5 w-5" />
              <span>Quiz and assignments.</span>
            </li>
          </ul>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row lg:flex-col sm:[&>*]:flex-1 lg:[&>*]:flex-none">
            <Button>
              <CreditCard className="h-4 w-4" />
              <span>Purchase Now</span>
            </Button>
            <Button variant="secondary">
              <ShoppingCart className="h-4 w-4" />
              <span>Add to Cart</span>
            </Button>
          </div>
        </div>
        <div className="absolute right-0 top-0 flex w-full flex-wrap items-center justify-between gap-2 p-2">
          <div className="flex max-w-max items-center gap-x-2 rounded-full border border-border/50 bg-secondary px-4 py-2 text-sm leading-none">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span>Batch 06</span>
          </div>
          <div className="flex max-w-max items-center gap-x-2 rounded-full border border-border/50 bg-secondary px-4 py-2 text-sm leading-none">
            <ArrowDownRightFromCircle className="h-4 w-4 text-primary" />
            <span>Enrolling: 22 May - 01 June</span>
          </div>
        </div>
      </section>
      <section className="max-w-prose space-y-6 lg:col-span-8">
        <div className="space-y-3 pb-4">
          <h1 className="hidden pb-2 text-3xl font-bold leading-[1.25] tracking-tight lg:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <h3 className="pb-2 text-2xl font-medium tracking-tight lg:hidden">
            About The Course
          </h3>
          <p className="leading-relaxed text-secondary-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            obcaecati, laboriosam accusamus! Lorem ipsum dolor sit amet,
            reprehenderit itaque dignissimos a sint quia commodi rerum
            consectetur adipisicing elit. Corrupti, iusto. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Animi voluptatibus minus quos ab
            aliquid quae fuga in vel doloremque facilis possimus et cumque,
            officia odit quod aut molestiae iure. Ipsa?
          </p>
        </div>
        <div className="space-y-3 pb-4">
          <h3 className="pb-2 text-2xl font-medium tracking-tight">
            Course Instructor
          </h3>
          <div className="flex items-center gap-x-4 rounded-xl border border-border/50 bg-card/25 px-4 py-3">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium">Niaz Abir</h4>
              <p className="max-w-[16rem]">
                Senior engineer at xyz ltd // Mess Shovapoti // Famous chief
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
