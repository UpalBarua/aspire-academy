import z from "zod";

export const blogValidation = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters." })
    .max(50, { message: "Title cannot be longer than 50 characters." }),
  image: z.string().url({ message: "Image must be a valid URL." }),
  date: z.string(), // Assuming date format is DD-MM-YYYY
  details: z
    .string()
    .min(10, { message: "Details must be at least 10 characters long." })
    .max(4000, { message: "Details cannot be longer than 2000 characters." }),
});
