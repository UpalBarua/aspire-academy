import { Menu } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { mainNavLinks } from "@/config/navigation";

export function MobileNav() {
  return (
    <Drawer direction="right">
      <DrawerTrigger
        className={buttonVariants({
          size: "icon",
          variant: "ghost",
          className: "h-10 w-10 rounded-lg lg:hidden",
        })}
      >
        <Menu className="h-8 w-8" />
      </DrawerTrigger>
      <DrawerContent className="border-b-none border-t-none left-auto right-0 h-full w-[80%] max-w-[25rem] rounded-[1rem_0_0_1rem] border-border/25 bg-background/80 px-8 py-10 backdrop-blur-md backdrop-saturate-200 focus:outline-none [&>div:first-child]:hidden">
        <div className="flex flex-col items-start gap-y-2">
          {mainNavLinks.map(({ label, href, subLinks }) =>
            subLinks && subLinks.length ? (
              <Fragment>
                <h2 className="pt-6 text-sm font-medium text-foreground/40">
                  {label}
                </h2>
                {subLinks.map(({ label, href }) => (
                  <Link
                    className="underline-offset-4 hover:underline"
                    href={href}
                  >
                    {label}
                  </Link>
                ))}
              </Fragment>
            ) : (
              <Link className="underline-offset-4 hover:underline" href={href!}>
                {label}
              </Link>
            ),
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
