import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export async function ProfileButton() {
  const session = await auth();

  return (
    <Link href="/profile">
      <Avatar className="h-12 w-12">
        <AvatarImage src="#" alt="profile image" />
        <AvatarFallback className="text-2xl">
          {session?.user?.email?.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </Link>
  );
}
