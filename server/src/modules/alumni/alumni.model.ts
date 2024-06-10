import { Schema, model } from "mongoose";
import { TAlumni } from "./alumni.type";

const alumniSchema = new Schema<TAlumni>({
  name: {
    type: String,
    required: true,
  },
  course_name: {
    type: String,
    required: true,
  },
  batch: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const alumniModel = model<TAlumni>("Alumni", alumniSchema);
