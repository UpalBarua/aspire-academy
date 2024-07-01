import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ArrowUpRight, HeartHandshake, Dot } from "lucide-react";

export function Hero() {
  return (
    <section className="pb-section container grid min-h-[40rem] grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="flex flex-col rounded-3xl border border-border/25 bg-secondary/50 p-8 backdrop-blur-md backdrop-saturate-200 lg:p-9">
        <div className="flex-1">
          <h1 className="text-pretty pb-8 text-center text-[clamp(2.375rem,_5vw+0.5rem,_3.75rem)] font-extrabold capitalize leading-[1.35] tracking-tight text-foreground lg:text-start">
            We ignite ambition and empower you to reach your full potential 🚀
          </h1>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/courses"
              className={buttonVariants({
                size: "lg",
                className: "px-14 !text-base",
              })}
            >
              Get Started
            </Link>
            <Link
              href="/help-desk"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "px-14 !text-base",
              })}
            >
              <HeartHandshake className="size-5" />
              <span>Help Desk</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 pt-14 text-foreground/60 lg:justify-start lg:pt-0">
          <Link href="/about-us" className="hover:text-foreground">
            About Us
          </Link>
          <Dot className="size-4" />
          <Link href="/lab-facilities" className="hover:text-foreground">
            Lab Facilities
          </Link>
          <Dot className="size-4" />
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
          <Dot className="size-4" />
          <Link href="/contact-us" className="hover:text-foreground">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-6 gap-4">
        <Link
          href="/events"
          className="group col-span-5 row-span-4 h-full rounded-3xl border border-border/25 bg-[url('/images/hero-1.jpg')] bg-cover bg-center shadow"
        >
          <div className="flex h-full items-end">
            <div className="m-1 flex items-start justify-between rounded-3xl bg-background/80 p-5 backdrop-blur-md backdrop-saturate-200 transition-colors duration-300 group-hover:bg-background">
              <p className="max-w-prose leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit excepturi quisquam blanditiis unde officiis, dolores
                dignissimos
              </p>
              <span className="rounded-full bg-primary p-3">
                <ArrowUpRight className="size-6 text-background" />
              </span>
            </div>
          </div>
        </Link>
        <Link
          href="/alumni"
          className="col-span-6 row-span-2 rounded-3xl border border-border/25 bg-primary p-6 leading-relaxed text-background shadow transition-colors duration-300 hover:bg-primary/90 sm:col-span-2"
        >
          <span className="text-5xl font-extrabold">500+</span>
          <p className="pt-2 text-background/80">
            students have successfully completed a variety of courses and
            achieved their goals.
          </p>
        </Link>
        <Link
          href="/courses"
          className="col-span-6 row-span-2 rounded-3xl border border-border/25 bg-secondary p-6 leading-relaxed shadow transition-colors duration-300 hover:bg-secondary/90 sm:col-span-3"
        >
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-3xl font-medium">Discover</h2>
            <span className="rounded-full bg-primary p-3">
              <ArrowUpRight className="size-6 text-background" />
            </span>
          </div>
          <p className="text-pretty leading-relaxed text-foreground/80">
            Discover our diverse range of courses, available both online and
            offline, designed to enhance your skills and accelerate your career
            growth.
          </p>
        </Link>
      </div>
    </section>
  );
}
