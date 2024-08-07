"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  useCreateManagementMutation,
  useCreateTestimonialMutation,
} from "@/redux/api/baseApi";

import {
  Camera,
  FolderPen,
  GraduationCap,
  MessageCircleMore,
} from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

const AddManagement = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [createManagement] = useCreateManagementMutation();

  const onSubmit = async (data: any) => {
    try {
      const image = data.image[0];
      console.log(image);
      const formData = new FormData();
      formData.append("image", image);
      const url =
        "https://api.imgbb.com/1/upload?expiration=600&key=1f471dd54105935416929b8c41eb9f57";
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          const managementData = {
            name: data.name,
            position: data.position,
            image: imgData.data.url,
          };

          createManagement(managementData);
          reset();
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="relative m-10 rounded-lg shadow">
        <div className="ml-2 lg:ml-8">
          <h1 className="border-l-2 p-2 text-3xl font-bold text-primary">
            Add Your Management
          </h1>
        </div>
        <div className="space-y-6 p-6">
          <form
            action="#"
            className="w-[700px] rounded-md p-6 shadow-md shadow-secondary"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-2 flex items-center gap-3 text-[15px] font-medium text-white">
                  <FolderPen size={20} />
                  name
                </label>
                <Input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  className="block w-full rounded-md border bg-secondary p-2.5 text-white"
                  placeholder="name"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-3 text-[15px] font-medium text-white">
                  <GraduationCap size={20} />
                  position
                </label>
                <Input
                  {...register("position", { required: true })}
                  type="text"
                  name="position"
                  className="block w-full rounded-md border bg-secondary p-2.5 text-white"
                  placeholder="position"
                />
              </div>
              <div>
                <label className="mb-2 flex items-center gap-3 text-[15px] font-medium text-white">
                  <Camera size={20} />
                  image
                </label>
                <Input
                  {...register("image", { required: true })}
                  type="file"
                  name="image"
                  className="block w-full rounded-md border bg-secondary p-2.5 text-white"
                  placeholder="image"
                />
              </div>
            </div>
            <div>
              <Button
                type="submit"
                className="mt-6 w-[300px] rounded-md font-bold"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddManagement;
