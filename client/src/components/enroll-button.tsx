"use client";

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
    const data = await fetch(
      `https://aspire-academy-server.vercel.app/api/users/enroll/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId }),
      },
    ).then((res) => res.json());

    console.log(userId, courseId);
    console.log(data);
  }

  return (
    <Button className="text-base" onClick={() => enrollCourse()}>
      Checkout
    </Button>
  );
}
