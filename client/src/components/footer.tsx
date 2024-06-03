import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { mainNavLinks } from "@/config/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/config";

export function Footer() {
  return (
    <footer className="flex min-h-[25rem] items-center justify-center rounded-tl-3xl rounded-tr-3xl border-t border-border/25 bg-secondary/25 py-14">
      <div className="container space-y-14">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <Link className="flex items-center gap-x-4" href="/">
            <Image
              className="rounded-full"
              src="/images/logo.png"
              alt="logo"
              height="50"
              width="50"
            />
            <span className="text-2xl font-medium tracking-tight">
              Aspire Academy
            </span>
          </Link>
          <Link href="/help" className={buttonVariants()}>
            <span>Help Desk</span>
            <ArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {mainNavLinks.map(
            ({ subLinks, label }) =>
              subLinks.length !== 0 && (
                <div className="flex flex-col gap-y-2">
                  <h4 className="text-lg font-medium">{label}</h4>
                  {subLinks.map(({ label, href }) => (
                    <Link
                      className="text-foreground/60 underline-offset-2 transition-colors duration-300 hover:text-foreground hover:underline"
                      href={href}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              ),
          )}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-pretty text-start text-3xl font-extrabold capitalize leading-[1.25] tracking-tight md:leading-[1.35]">
              Subscribe To Newsletter
            </h4>
            <p className="text-pretty leading-relaxed text-foreground/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quod dolore numquam reiciendis excepturi qui quaerat dolorem nisi
              beatae placeat deleniti.
            </p>
            <form className="relative pt-2">
              <Mail className="absolute left-[1rem] top-[50%] -translate-y-[50%] text-muted-foreground" />
              <Input
                type="text"
                placeholder="example@mail.com"
                className="h-14 rounded-[100vmin] border-border/25 ps-12 shadow"
              />
              <Button
                size="sm"
                className="absolute right-0 top-[50%] mr-1.5 -translate-y-[50%]"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-4">
            {socialLinks.map(({ Icon, href }) => (
              <Link
                href={href}
                className="flex size-12 items-center justify-center rounded-full border border-border/25 bg-secondary/50 transition-colors duration-300 hover:bg-primary hover:text-background focus-visible:bg-primary focus-visible:text-background"
              >
                <Icon />
              </Link>
            ))}
          </div>
          <p className="leading-relaxed text-foreground/60">
            Aspire Academy &copy; all rights reserved 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
