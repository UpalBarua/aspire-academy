"use client";

import {
  ArrowLeft,
  ArrowRight,
  Camera,
  FolderPen,
  MessageCircleMore,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { uploadImg } from "@/lib/upload-img";
import { useCreateBlogMutation } from "@/redux/api/baseApi";

type FormData = {
  title: string;
  image: FileList;
  details: string;
};

export default function NewBlogPostPage() {
  const [isPublishing, setIsPublishing] = useState(false);
  const [createBlog] = useCreateBlogMutation();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formData: unknown) => {
    try {
      setIsPublishing(true);

      const { image, title, details } = formData as FormData;

      const imageUrl = await uploadImg(image[0]);

      createBlog({
        title,
        details,
        date: new Date(),
        image: imageUrl,
      });

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
        <h2 className="py-4 pb-4 text-3xl font-bold">Add New Post</h2>
        <Link className={buttonVariants({})} href="/admin/blog">
          <ArrowLeft className="size-5" />
          <span>Go Back</span>
        </Link>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-3 pb-2">
            <FolderPen className="size-5" />
            <span>Post Title</span>
          </label>
          <Input
            {...register("title", { required: true })}
            type="text"
            placeholder="Post Title"
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
            <span>Post Content</span>
          </label>
          <Textarea
            {...register("details", { required: true })}
            className="min-h-[14rem] resize-none"
            placeholder="Post Content"
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
