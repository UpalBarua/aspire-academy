import { validateName } from "@/lib/utils";
import * as z from "zod";

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, { message: "Name is required." })
      .min(3, { message: "Name must be at least 3 characters long." })
      .max(50, { message: "Name cannot be longer than 50 characters." })
      .refine((name) => validateName(name), {
        message: "Name contains invalid characters.",
      }),
    email: z.string().min(1, { message: "Email is required." }).email({
      message: "Email must be valid.",
    }),
    password: z
      .string()
      .min(1, { message: "Password is required." })
      .min(8, { message: "Password must be at least 8 characters long." }),
    password2: z
      .string()
      .min(1, { message: "Password confirmation is required." }),
  })
  .refine(({ password, password2 }) => password === password2, {
    message: "Passwords must match.",
    path: ["password2"],
  });

export const loginFormSchema = z.object({
  email: z.string().min(1, { message: "Email is required." }).email({
    message: "Email must be valid.",
  }),
  password: z.string().min(1, { message: "Password is required." }),
});
