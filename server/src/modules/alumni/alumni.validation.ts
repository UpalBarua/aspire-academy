import z from "zod";

export const alumniValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 3 characters ." })
    .max(50, { message: "Name cannot be longer than 50 characters." }),
  image: z.string().url({ message: "Image must be a valid URL." }),
  course_name: z
    .string()
    .min(1, {
      message: "Course name is required and must be at least 1 character long.",
    })
    .max(100, { message: "Course name cannot be longer than 100 characters." }),
  batch: z.number(),
});
