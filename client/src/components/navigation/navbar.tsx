import Image from "next/image";
import Link from "next/link";

import { MainNavMenu } from "./main-nav-menu";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ProfileButton } from "./profile-button";
import { auth } from "@/auth";
import { buttonVariants } from "@/components/ui/button";

export async function Navbar() {
  const session = await auth();

  return (
    <header className="fixed right-0 top-0 z-[10] flex min-h-[4rem] w-full items-center justify-center bg-background/90 backdrop-blur-md">
      <div className="container flex items-center justify-between">
        <Link className="flex items-center gap-x-2" href="/">
          <Image
            className="rounded-full"
            src="/images/logo.png"
            alt="logo"
            height="25"
            width="25"
          />
          <span className="text-lg font-medium tracking-tight">
            Aspire Academy
          </span>
        </Link>
        <div className="flex items-center gap-x-4">
          <MainNavMenu />
          {!session?.user ? (
            <ProfileButton />
          ) : (
            <Link className={buttonVariants({ size: "sm" })} href="/register">
              Join Us Today
            </Link>
          )}
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
