"use client";

import {
  ArrowLeft,
  ArrowRight,
  Camera,
  FolderPen,
  MessageCircleMore,
  X,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { uploadImg } from "@/lib/upload-img";
import { useCreateTestimonialMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";

type FormData = {
  name: string;
  image: FileList;
  review: string;
  course: string;
};

export default function NewEventPage() {
  const [createTestimonial] = useCreateTestimonialMutation();

  const [isPublishing, setIsPublishing] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formData: unknown) => {
    try {
      setIsPublishing(true);

      const { image, review, name, course } = formData as FormData;
      const imageUrl = await uploadImg(image[0]);

      createTestimonial({
        name: name,
        batch: course,
        image: imageUrl,
        review: review,
      });

      toast.success("Testimoanial event.");
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
        <h2 className="py-4 pb-4 text-3xl font-bold">Add New Testimonial</h2>
        <Link className={buttonVariants({})} href="/admin/testimonials">
          <ArrowLeft className="size-5" />
          <span>Go Back</span>
        </Link>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-3 pb-2">
            <FolderPen className="size-5" />
            <span>Name</span>
          </label>
          <Input
            {...register("name", { required: true })}
            type="text"
            placeholder="Name"
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
            placeholder="Course"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-3 pb-2">
            <Camera className="size-5" />
            <span>Image</span>
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
            <span>Review</span>
          </label>
          <Textarea
            {...register("review", { required: true })}
            className="min-h-[14rem] resize-none"
            placeholder="Review"
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
