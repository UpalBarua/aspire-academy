"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginFormSchema = z.object({
  email: z.string().email({
    message: "Email must be valid.",
  }),
  password: z.string(),
});

type LoginForm = z.infer<typeof loginFormSchema>;

export function LoginForm() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginForm) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <h2 className="pb-10 text-2xl font-medium tracking-tight">User Login</h2>
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
        <div className="space-y-2.5 pt-6">
          <Button className="w-full" type="submit">
            Login
          </Button>
          <Link
            href="/register"
            className={buttonVariants({
              variant: "outline",
              className: "w-full",
            })}
          >
            Register Instead
          </Link>
        </div>
      </form>
    </Form>
  );
}
