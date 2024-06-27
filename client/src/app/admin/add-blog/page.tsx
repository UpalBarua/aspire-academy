"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CalendarRange,
  Camera,
  FolderPen,
  MailOpen,
  MessageCircleMore,
  PhoneOff,
} from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

const AddBlog = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <section className="mx-auto max-w-5xl">
      <div className="relative m-10 rounded-lg shadow">
        <div className="ml-2 lg:ml-8">
          <h1 className="border-l-2 p-2 text-3xl font-bold text-primary">
            Add Your Blog
          </h1>
        </div>
        <div className="space-y-6 p-6">
          <form
            action="#"
            className="rounded-md p-6 shadow-md shadow-secondary"
          >
            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-2 flex items-center gap-3 text-[15px] font-medium text-white">
                  <FolderPen size={20} />
                  Title
                </label>
                <Input
                  {...register("title", { required: true })}
                  type="text"
                  name="title"
                  className="block w-full rounded-md border bg-secondary p-2.5 text-white"
                  placeholder="title"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-3 text-[15px] font-medium text-white">
                  <CalendarRange size={20} />
                  date
                </label>
                <Input
                  {...register("date", { required: true })}
                  type="date"
                  name="date"
                  className="block w-full rounded-md border bg-secondary p-2.5 text-white"
                  placeholder="date"
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
              <div>
                <label className="mb-2 flex items-center gap-3 text-[15px] font-medium text-white">
                  <MessageCircleMore size={22} />
                  details
                </label>
                <Textarea
                  {...register("details", { required: true })}
                  name="details"
                  className="block w-full rounded-lg border bg-secondary p-4"
                  placeholder="details"
                ></Textarea>
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

export default AddBlog;
