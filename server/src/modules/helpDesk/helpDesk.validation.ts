import z, { number } from "zod";

export const helpDeskValidation = z.object({
  id: z.string(),
  firstName: z
    .string()
    .min(2, { message: "title must be at least 3 characters ." })
    .max(50, { message: "title cannot be longer than 50 characters." }),
  lastName: z
    .string()
    .min(2, { message: "title must be at least 3 characters ." })
    .max(50, { message: "title cannot be longer than 50 characters." }),
  email: z.string(),
  number: z.string(),
  message: z.string(),
});
