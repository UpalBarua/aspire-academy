"use client";

import { toast } from "sonner";
import { Button } from "./ui/button";

type EnrollButtonProps = {
  courseId: string;
  userId: string;
};

export function EnrollButton({
  courseId,
  userId,
}: Readonly<EnrollButtonProps>) {
  async function enrollCourse() {
    try {
      await fetch(
        `https://aspire-academy-server.vercel.app/api/users/enroll/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ courseId }),
        },
      ).then((res) => res.json());

      toast.success("Enrolled!");
    } catch {
      console.log("Something went wrong.");
    }
  }

  return (
    <Button className="text-base" onClick={() => enrollCourse()}>
      Checkout
    </Button>
  );
}
