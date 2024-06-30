import { TManagement } from "@/config/type";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useDeleteManagementMutation } from "@/redux/api/baseApi";
import { Trash2 } from "lucide-react";

export default function ManagementCard({
  management,
}: {
  management: TManagement;
}) {
  const { name, image, _id, position } = management;
  const [deleteManagement] = useDeleteManagementMutation();
  return (
    <div className="rounded-md bg-secondary p-4">
      <div className="flex justify-end gap-4">
        <Button className="hidden rounded-md font-bold">Edit</Button>
        <Button
          onClick={() => deleteManagement(_id)}
          className="mb-2 flex items-center gap-2 rounded-md bg-red-600 font-bold text-white"
        >
          <Trash2 />
          Delete
        </Button>
      </div>

      <Image
        src={image}
        alt=""
        width={370}
        height={420}
        className="rounded-md grayscale filter duration-300"
      />
      <div className="mt-2 w-80 rounded-md pb-4 pl-4 pt-4">
        <h2 className="text-[20px] font-bold">Name: {name}</h2>
        <h4>Position: {position}</h4>
      </div>
    </div>
  );
}
