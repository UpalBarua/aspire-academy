"use client";

import { ArrowDownRightFromCircle, GraduationCap } from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { TCourse } from "@/types";

export function AdminCourseCard({
  _id,
  name: courseName,
  coverPicture,
  batch,
  description,
  price: { regular, discounted },
  instructor: { name, picture },
}: Readonly<TCourse>) {
  async function deleteCourse(id: string) {
    await fetch(`http://localhost:8080/api/courses/${id}`, {
      method: "DELETE",
    });
    console.log("done");
  }

  return (
    <Card className="relative mx-auto max-w-[28rem] border-border/50 bg-card/25 transition-colors duration-300">
      <Image
        src={coverPicture}
        alt={courseName}
        className="h-[20rem] w-full rounded-tl-[inherit] rounded-tr-[inherit] border-b border-border/50 object-cover object-center"
        height="200"
        width="350"
      />
      <CardContent className="space-y-2 p-5">
        <CardTitle className="break-words">{courseName}</CardTitle>
        <p className="text-pretty break-words leading-relaxed text-foreground/60">
          {description.length > 120
            ? description.slice(0, 120) + "..."
            : description}
        </p>
        <div className="flex items-end justify-between pt-2">
          <div className="flex items-center gap-x-2.5">
            <Avatar className="h-10 w-10 border border-border/25">
              <AvatarImage src={picture} alt={name} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-bold">Mentor</p>
              <p>{name}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="line-through">৳{regular}</p>
            <p className="text-3xl font-medium">৳{discounted}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 pt-6">
          {/* <Button className="flex-1 text-base" variant="secondary"> */}
          {/*   Edit */}
          {/* </Button> */}
          <Button
            className="flex-1 text-base"
            variant="destructive"
            onClick={() => deleteCourse(_id as string)}
          >
            Delete
          </Button>
        </div>
      </CardContent>
      <div className="absolute right-0 top-0 flex w-full flex-wrap items-center justify-between gap-2 p-2">
        <div className="flex max-w-max items-center gap-x-2 rounded-full border border-border/50 bg-secondary px-4 py-2 text-sm leading-none">
          <GraduationCap className="h-4 w-4 text-primary" />
          <span>Batch 0{batch}</span>
        </div>
        <div className="flex max-w-max items-center gap-x-2 rounded-full border border-border/50 bg-secondary px-4 py-2 text-sm leading-none">
          <ArrowDownRightFromCircle className="h-4 w-4 text-primary" />
          <span>Enrolling: 22 May - 01 June</span>
        </div>
      </div>
    </Card>
  );
}
