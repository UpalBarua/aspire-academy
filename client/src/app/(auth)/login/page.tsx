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
import { loginFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type LoginForm = z.infer<typeof loginFormSchema>;

export default function LoginPage() {
  const router = useRouter();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async ({ email, password }: LoginForm) => {
    try {
      await signIn("credentials", {
        email,
        password,
      });

      toast.success("Welcome!");
      router.replace("/");
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <Form {...form}>
      <h2 className="pb-10 text-3xl font-medium tracking-tight">Login</h2>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="no-scrollbar max-h-full w-full space-y-6 p-1 lg:overflow-y-scroll"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-3">
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
            <FormItem className="space-y-3">
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
