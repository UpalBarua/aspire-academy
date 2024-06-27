import { z } from "zod";
import { validateString } from "../../configs/validation";

export const newCourseSchema = z.object({
  name: z
    .string()
    .trim()
    .min(5, { message: "Name must be at least 5 characters long." })
    .max(100, { message: "Name cannot be longer than 100 characters." })
    .refine((name) => validateString(name), {
      message:
        "Name can only contain letters, numbers, spaces, and punctuation (, . ! ? - _).",
    }),
  description: z
    .string()
    .trim()
    .min(50, { message: "Description must be at least 50 characters long." })
    .max(500, { message: "Description cannot be longer than 500 characters." })
    .refine((description) => validateString(description), {
      message:
        "Description can only contain letters, numbers, spaces, and punctuation (, . ! ? - _).",
    }),
  category: z.string(),
  coverPicture: z
    .string()
    .trim()
    .url({ message: "Cover photo must be a valid url." }),
  duration: z
    .number()
    .min(0, { message: "Duration must be more than 0 Months." })
    .max(12, { message: "Duration cannot be more than 12 Months." }),
  alumni: z.number().default(0),
  batch: z.number().default(1),
  price: z.object({
    regular: z
      .number()
      .min(0, { message: "Price must be more than 0 BDT." })
      .max(50000, { message: "Price must be more than 50,000 BDT." }),
    discounted: z
      .number()
      .min(0, { message: "Price must be more than 0 BDT." })
      .max(50000, { message: "Price must be more than 50,000 BDT." }),
  }),
  instructor: z.object({
    name: z.string(),
    title: z.string(),
    picture: z.string(),
  }),
  enrollment: z.object({
    start: z.string(),
    end: z.string(),
  }),
});
