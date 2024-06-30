import z from "zod";

export const alumniValidation = z.object({
  name: z
    .string()
    .min(3, { message: "Title must be at least 3 characters." })
    .max(50, { message: "Title cannot be longer than 50 characters." }),
  course: z.string(),
  batchNo: z.string(),
  image: z.string().url({ message: "Image must be a valid URL." }),
});
