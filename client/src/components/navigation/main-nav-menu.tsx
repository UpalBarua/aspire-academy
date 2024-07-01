"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { mainNavLinks } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function MainNavMenu() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        {mainNavLinks.map(({ label, href, subLinks }) =>
          subLinks && subLinks?.length ? (
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent font-normal hover:bg-secondary hover:text-foreground focus:bg-secondary focus:text-foreground focus:outline-none data-[active]:bg-secondary data-[state=open]:bg-secondary data-[active]:text-foreground data-[state=open]:text-foreground">
                {label}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-background/80 text-foreground backdrop-blur-md backdrop-saturate-200">
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
              <Link href={href!} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent font-normal hover:bg-secondary hover:text-foreground focus:bg-secondary focus:text-foreground focus:outline-none data-[active]:bg-secondary data-[state=open]:bg-secondary data-[active]:text-foreground data-[state=open]:text-foreground",
                  )}
                >
                  {label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
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
            "block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary",
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
