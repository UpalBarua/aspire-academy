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
    <footer className="flex min-h-[25rem] items-center justify-center rounded-tl-3xl rounded-tr-3xl border-t border-border/25 bg-secondary/25">
      <div className="container space-y-14">
        <div className="flex items-center justify-between">
          <Link className="flex items-center gap-x-3" href="/">
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
        <div className="grid grid-cols-5">
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
          <div className="col-span-2 rounded-3xl border border-border/25 bg-secondary/50 p-6">
            <h4 className="text-start text-2xl font-extrabold capitalize leading-[1.25] tracking-tight md:leading-[1.35]">
              Join the newsletter and stay in touch
            </h4>
            <form className="relative">
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
        <div className="flex flex-row-reverse items-center justify-between">
          <p>All rights reserved &copy; 2024</p>
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
        </div>
      </div>
    </footer>
  );
}
