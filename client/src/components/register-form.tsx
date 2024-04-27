"use client";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail, Repeat2, UserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const registerFormSchema = z.object({
  email: z.string().email({
    message: "Email must be valid.",
  }),
  password: z.string(),
  password2: z.string(),
  userType: z.string(),
});

type RegisterForm = z.infer<typeof registerFormSchema>;

export function RegisterForm() {
  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      password: "",
      password2: "",
      userType: "",
    },
  });

  function onSubmit(values: RegisterForm) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <h2 className="pb-10 text-2xl font-medium tracking-tight">
        User Registration
      </h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-x-1">
                <Mail className="h-4 w-4" />
                <span>Email Address</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="example@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="userType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-x-2">
                <UserRound className="h-4 w-4" />
                <span>User Type</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {["Student", "Teacher", "Staff"].map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-x-1">
                <Lock className="h-4 w-4" />
                <span>Password</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="strong password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password2"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-x-1">
                <Repeat2 className="h-4 w-4" />
                <span>Repeat Password</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="strong password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-2.5 pt-6">
          <Button className="w-full" type="submit">
            Register
          </Button>
          <Link
            href="/login"
            className={buttonVariants({
              variant: "outline",
              className: "w-full",
            })}
          >
            Login Instead
          </Link>
        </div>
      </form>
    </Form>
  );
}
