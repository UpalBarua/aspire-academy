import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  CheckCircle,
  Clock,
  CreditCard,
  MessageCircleQuestion,
  ShoppingCart,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function Course() {
  return (
    <main className="container relative mx-auto grid max-w-7xl grid-cols-1 gap-5 px-2 pt-2 sm:grid-cols-12">
      <section className="col-span-8 space-y-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-medium tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className="leading-relaxed text-secondary-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            reprehenderit itaque dignissimos a sint quia commodi rerum
            obcaecati, laboriosam accusamus! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Corrupti, iusto. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Animi voluptatibus minus quos ab
            aliquid quae fuga in vel doloremque facilis possimus et cumque,
            officia odit quod aut molestiae iure. Ipsa?
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-medium tracking-tight">
            Course Instructor
          </h3>
          <div className="flex items-center gap-x-4 rounded-xl border bg-secondary px-4 py-3">
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
        <div className="space-y-3">
          <h3 className="text-xl font-medium tracking-tight">
            What you'll learn
          </h3>
          <div className="flex items-center gap-x-4 rounded-xl border p-6">
            <ul className="grid grid-cols-2 gap-2.5">
              {Array(8)
                .fill(" ")
                .map((_, i) => (
                  <li className="flex items-center gap-x-3" key={i}>
                    <CheckCircle className="h-4 w-4" />
                    <span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-medium tracking-tight">Study Plan</h3>
          <div className="flex items-center gap-x-4 rounded-xl border p-2.5">
            <ul className="w-full">
              {Array(10)
                .fill("")
                .map((_, i) => (
                  <li className="border-b px-2 py-3" key={i}>
                    <div className="flex items-center gap-x-3 pb-2">
                      <span className="text-sm">DAY {i + 1}</span>
                      <Badge variant="outline">class</Badge>
                    </div>
                    <span className="font-medium">
                      Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
                      sit.
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="sticky top-0 col-span-4 mb-10 h-max max-w-sm space-y-2 rounded-xl border bg-background bg-secondary p-2">
        <div className="relative h-56 w-full">
          <Image
            className="rounded-xl object-cover object-center"
            src="https://source.unsplash.com/random?code"
            alt="course thumbnail"
            quality={95}
            fill
          />
        </div>
        <div className="space-y-5 p-2">
          <div className="space-y-2">
            <div className="flex items-center gap-x-3">
              <span className="text-3xl font-bold">৳6,000</span>
              <span className="line-through">৳12,000</span>
            </div>
            <div className="flex items-center gap-x-2.5">
              <div className="flex items-center gap-x-2 rounded-xl bg-primary/25 px-2.5 py-1.5 text-sm font-medium">
                <Clock className="h-4 w-4" />
                <span>19 Days Left</span>
              </div>
              <div className="flex items-center gap-x-2 rounded-xl bg-primary/25 px-2.5 py-1.5 text-sm font-medium">
                <Users className="h-4 w-4" />
                <span>64 Seats Left</span>
              </div>
            </div>
          </div>
          <div>
            <ul className="space-y-2">
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
          </div>
          <div className="flex flex-col gap-y-2">
            <Button>
              <CreditCard className="h-4 w-4" />
              <span>Purchase Now</span>
            </Button>
            <Button variant="outline">
              <ShoppingCart className="h-4 w-4" />
              <span>Add to Cart</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
