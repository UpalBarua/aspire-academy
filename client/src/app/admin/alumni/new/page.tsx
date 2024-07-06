"use client";

import {
  ArrowLeft,
  ArrowRight,
  Camera,
  FolderPen,
  GraduationCap,
  MessageCircleMore,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { uploadImg } from "@/lib/upload-img";
import { useCreateAlumniMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";

type FormData = {
  name: string;
  course: string;
  batchNo: string;
  image: FileList;
};

export default function NewAlumniPage() {
  const [createAlumni] = useCreateAlumniMutation();

  const [isPublishing, setIsPublishing] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formData: unknown) => {
    try {
      setIsPublishing(true);

      const { name, course, batchNo, image } = formData as FormData;
      const imageUrl = await uploadImg(image[0]);

      createAlumni({
        name: name,
        course: course,
        batchNo: batchNo,
        image: imageUrl,
      });

      toast.success("Alumni added.");
      reset();
    } catch {
      console.log("something went wrong");
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between pb-6">
        <h2 className="py-4 pb-4 text-3xl font-bold">Add New Alumni</h2>
        <Link className={buttonVariants({})} href="/admin/alumni">
          <ArrowLeft className="size-5" />
          <span>Go Back</span>
        </Link>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-3 pb-2">
            <FolderPen className="size-5" />
            <span>Alumni Name</span>
          </label>
          <Input
            {...register("name", { required: true })}
            type="text"
            placeholder="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-3 pb-2">
            <GraduationCap className="size-5" />
            <span>Course</span>
          </label>
          <Input
            {...register("course", { required: true })}
            type="text"
            placeholder="course"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-3 pb-2">
            <Camera className="size-5" />
            <span>Banner Image</span>
          </label>
          <Input
            {...register("image", { required: true })}
            type="file"
            placeholder="image"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-3 pb-2">
            <MessageCircleMore className="size-5" />
            <span>Batch No</span>
          </label>
          <Input
            {...register("batchNo", { required: true })}
            type="text"
            placeholder="Batch No"
          />
        </div>
        <div className="flex items-center justify-end gap-x-2">
          <Button type="button" variant="outline" onClick={() => reset()}>
            <X className="size-5" />
            <span>Clear</span>
          </Button>
          <Button type="submit" disabled={isPublishing}>
            {isPublishing ? (
              <span>Publishing</span>
            ) : (
              <>
                <span>Publish</span>
                <ArrowRight className="size-5" />
              </>
            )}
          </Button>
        </div>
      </form>
    </section>
  );
}
