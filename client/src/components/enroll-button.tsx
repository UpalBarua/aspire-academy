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
      `http://localhost:8080/api/users/enroll/${userId}`,
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
