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
import { Lock, Mail, Repeat2, UserRound } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registerFormSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "Email must be valid.",
  }),
  password: z.string(),
  password2: z.string(),
});

type RegisterForm = z.infer<typeof registerFormSchema>;

export function RegisterForm() {
  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password2: "",
    },
  });

  const onSubmit = async ({ name, email, password }: RegisterForm) => {
    try {
      const res = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }).then((res) => res.json());

      if (!res.success) {
        throw new Error("Something went wrong");
      }

      await signIn("credentials", {
        email,
        password,
      });

      alert("Registered");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <Form {...form}>
      <h2 className="pb-10 text-3xl font-bold tracking-tight">
        User Registration
      </h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-x-1">
                <UserRound className="h-4 w-4" />
                <span>User Name</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                <Input placeholder="********" type="password" {...field} />
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
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-2.5 pt-4">
          <Button
            className="w-full"
            type="submit"
            disabled={form.formState.isLoading}
          >
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
