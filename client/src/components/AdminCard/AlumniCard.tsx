import { TAlumni } from "@/config/type";
import { GraduationCap, Landmark, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useDeleteAlumniMutation } from "@/redux/api/baseApi";

export default function AlumniCard({ alumni }: { alumni: TAlumni }) {
  const { name, image, _id, batchNo, course } = alumni;
  const [deleteAlumni] = useDeleteAlumniMutation();

  return (
    <div className="mb-24 rounded-md bg-secondary p-4">
      <div className="flex justify-end gap-4">
        <Button className="hidden rounded-md font-bold">Edit</Button>
        <Button
          onClick={() => deleteAlumni(_id)}
          className="mb-2 flex items-center gap-2 rounded-md bg-red-600 font-bold text-white"
        >
          <Trash2 />
          Delete
        </Button>
      </div>
      <div
        className="h-full min-h-[20rem] rounded-3xl border border-border/25 bg-cover bg-center shadow"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex h-full items-end">
          <div className="m-1 flex w-full flex-col justify-center space-y-2 rounded-3xl bg-background/80 p-4 backdrop-blur-md backdrop-saturate-200">
            <h3 className="pb-2 text-xl font-medium text-foreground">
              {name} Lorem Ipsum
            </h3>
            <div className="flex items-center gap-x-2">
              <GraduationCap className="size-5" />
              <span>{course}</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Landmark className="size-5" />
              <span>{batchNo}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
