import z from "zod";

export const testimonialValidation = z.object({
  name: z
    .string()
    .min(3, { message: "name must be at least 3 characters." })
    .max(50, { message: "name cannot be longer than 50 characters." }),
  image: z.string().url({ message: "Image must be a valid URL." }),
  batch: z.string(),
  review: z
    .string()
    .min(10, { message: "review must be at least 10 characters long." })
    .max(1000, { message: "review cannot be longer than 2000 characters." }),
});
