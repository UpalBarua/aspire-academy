import z from "zod";

export const latestEventValidation = z.object({
  id: z.string(),
  title: z
    .string()
    .min(2, { message: "title must be at least 3 characters ." })
    .max(50, { message: "title cannot be longer than 50 characters." }),
  image: z.string(),
  date: z.string(),
  details: z.string(),
});
