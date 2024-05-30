"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { mainNavLinks } from "@/config";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <header className="fixed right-0 top-0 z-[9999] flex min-h-[3.5rem] w-full items-center justify-center bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-2">
        <Link className="flex items-center gap-x-3" href="/">
          <Image
            className="rounded-full"
            src="/images/logo.png"
            alt="logo"
            height="30"
            width="30"
          />
          <span className="text-lg font-bold tracking-tight">
            Aspire Academy
          </span>
        </Link>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            {mainNavLinks.map(({ label, href, subLinks }) =>
              subLinks.length ? (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="left-0 top-0 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {subLinks.map(({ label, href, description }) => (
                        <ListItem key={label} title={label} href={href}>
                          {description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem>
                  <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <MobileNav />
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-secondary-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
