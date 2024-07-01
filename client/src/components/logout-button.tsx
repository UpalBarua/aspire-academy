"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export function LogOutButton() {
  return (
    <Button
      variant="secondary"
      className="text-destructive"
      onClick={() => signOut()}
    >
      <LogOut />
      <span>Logout</span>
    </Button>
  );
}
