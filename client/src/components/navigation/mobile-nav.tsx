import { Button, buttonVariants } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { mainNavLinks } from "@/config";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

const linkStyles = buttonVariants({
  size: "sm",
  variant: "link",
  className: "!text-foreground/80 h-9",
});

export function MobileNav() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="h-10 w-10 rounded-lg lg:hidden"
        >
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="left-auto right-0 z-[9999] h-full w-[80%] rounded-[1rem_0_0_1rem] border-none p-6 focus:outline-none [&>div:first-child]:hidden">
        <div className="flex flex-col items-start">
          {mainNavLinks.map(({ label, href, subLinks }) =>
            subLinks.length ? (
              <Fragment>
                <h2 className="text-sm font-medium">{label}</h2>
                {subLinks.map(({ label, href }) => (
                  <Link className={linkStyles} href={href}>
                    {label}
                  </Link>
                ))}
              </Fragment>
            ) : (
              <Link className={linkStyles} href={href}>
                {label}
              </Link>
            ),
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
