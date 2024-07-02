"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function LogOutButton() {
  const router = useRouter();

  function handleLogout() {
    try {
      signOut();
      router.replace("/");
    } catch {
      toast.error("Something went wrong.");
    }
  }

  return (
    <Button
      variant="secondary"
      className="text-destructive"
      onClick={() => handleLogout()}
    >
      <LogOut />
      <span>Logout</span>
    </Button>
  );
}
