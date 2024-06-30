import { Schema, model } from "mongoose";
import { TAlumni } from "./alumni.type";

const alumniSchema = new Schema<TAlumni>({
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  batchNo: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const alumniModel = model<TAlumni>("Alumni", alumniSchema);
