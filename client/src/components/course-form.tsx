"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { uploadImg } from "@/lib/upload-img";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const tempInstructor = [
  {
    name: "Niaz Abir",
    picture: "https://github.com/shadcn.png",
    about: "Senior engineer at xyz ltd // Mess Shovapoti // Famous chief",
  },
  {
    name: "Upal Barua",
    picture: "https://github.com/shadcn.png",
    about: "Senior engineer at xyz ltd // Mess Shovapoti // Famous chief",
  },
  {
    name: "Umme Rumki",
    picture: "https://github.com/shadcn.png",
    about: "Senior engineer at xyz ltd // Mess Shovapoti // Famous chief",
  },
] as const;

const courseFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(5, { message: "Name must be at least 5 characters long." })
    .max(100, { message: "Name cannot be longer than 100 characters." }),
  description: z
    .string()
    .trim()
    .min(50, { message: "Description must be at least 50 characters long." })
    .max(500, { message: "Description cannot be longer than 500 characters." }),
  coverPicture: z
    .string()
    .trim()
    .url({ message: "Cover photo must be a valid url." })
    .default("https://github.com/shadcn.png"),
  duration: z
    .string()
    .min(0, { message: "Duration must be more than 0 Months." })
    .max(12, { message: "Duration cannot be more than 12 Months." }),
  alumni: z.number().default(0),
  batch: z.number().default(1),
  regularPrice: z
    .string()
    .min(0, { message: "Price must be more than 0 BDT." })
    .max(50000, { message: "Price must be more than 50,000 BDT." }),
  discountedPrice: z
    .string()
    .min(0, { message: "Price must be more than 0 BDT." })
    .max(50000, { message: "Price must be more than 50,000 BDT." }),
  enrollmentStart: z.string(),
  enrollmentEnd: z.string(),
});

type CourseForm = z.infer<typeof courseFormSchema>;

export function CourseForm() {
  const [category, setCategory] = useState("");
  const [instructor, setInstructor] = useState({});

  const form = useForm<CourseForm>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {},
  });

  function onSubmit(values: CourseForm) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-8"
      >
        <div className="space-y-6">
          <FormItem>
            <FormLabel>Course Cover</FormLabel>
            <FormControl>
              <Input
                placeholder="select picture"
                type="file"
                accept="image/*"
                // onChange={(e) => uploadImg(e.target.files[0])}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Name</FormLabel>
                <FormControl>
                  <Input placeholder="Course Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="course description"
                    {...field}
                    className="min-h-[14rem] resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormItem>
            <FormLabel>Category</FormLabel>
            <FormControl>
              <Select onValueChange={(val) => setCategory(val)}>
                <SelectTrigger>
                  <SelectValue placeholder="select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {categories.map(({ category }) => (
                      <SelectItem value={category}>{category}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        </div>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Duration</FormLabel>
                <FormControl>
                  <Input placeholder="course duration" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="regularPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Regular Price</FormLabel>
                <FormControl>
                  <Input placeholder="course duration" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="discountedPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discounted Price</FormLabel>
                <FormControl>
                  <Input placeholder="course duration" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="enrollmentStart"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enrollment Start</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="enrollmentEnd"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enrollment End</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormItem>
            <FormLabel>Instructor</FormLabel>
            <FormControl>
              <Select onValueChange={(val) => setInstructor(val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Instructor</SelectLabel>
                    {tempInstructor.map(({ name, about, picture }) => (
                      <SelectItem value={name}>
                        <div className="flex items-center gap-x-4 px-4 py-3">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={picture} alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{name}</h4>
                            <p className="max-w-[16rem]">{about}</p>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
