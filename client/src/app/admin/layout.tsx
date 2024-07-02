"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { adminNavigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: Readonly<AdminLayoutProps>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <section>
      <div
        className={cn(
          "fixed left-0 top-[4rem] z-[10] h-full min-w-[22rem] -translate-x-full border-r border-border/25 bg-secondary/80 backdrop-blur-md backdrop-saturate-200 transition-transform duration-200 lg:top-0 lg:translate-x-0",
          {
            "translate-x-0": isSidebarOpen,
          },
        )}
      >
        <div className="flex h-full flex-col py-4 pl-6">
          <h2 className="px-4 pb-4 text-2xl font-medium tracking-tight">
            Admin Dashboard
          </h2>
          <nav className="mb-8 flex flex-1 flex-col items-start">
            {adminNavigation.map(({ label, href, Icon }) => (
              <Link
                href={href}
                key={href}
                className={cn(
                  "inline-flex h-14 w-full items-center justify-start gap-x-2.5 px-4 transition-colors duration-300 hover:text-foreground/60",
                  {
                    "rounded-bl-md rounded-tl-md border-r-4 border-primary bg-background":
                      (pathname === href && pathname === "/admin") ||
                      (pathname === href && pathname.startsWith(href)),
                  },
                )}
              >
                <Icon className="size-5 text-foreground/80" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-x-4 rounded-xl px-4 py-3">
            <Avatar className="size-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium">Niaz Abir</h4>
              <p className="max-w-[16rem]">Senior engineer at xyz ltd</p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-full lg:absolute lg:left-[22rem] lg:top-0 lg:w-[calc(100%-22rem)]">
        <div className="container fixed right-0 top-0 z-[10] flex min-h-[4rem] w-full items-center gap-x-4 bg-background/80 backdrop-blur-md backdrop-saturate-200 lg:hidden">
          <Button
            size="icon"
            variant="ghost"
            className="h-10 w-10 rounded-lg lg:hidden"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            {isSidebarOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </Button>
          <Link className="flex items-center gap-x-3" href="/">
            <Image
              className="rounded-full"
              src="/images/logo.png"
              alt="logo"
              height="35"
              width="35"
            />
            <span className="text-lg font-bold tracking-tight">
              Admin Dashboard
            </span>
          </Link>
        </div>
        <div className="px-6 py-2">{children}</div>
      </div>
    </section>
  );
}
