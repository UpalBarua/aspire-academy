import { Schema, model } from "mongoose";
import { TMentor } from "./mentor.type";

const mentorSchema = new Schema<TMentor>({
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const mentorModel = model<TMentor>("Mentor", mentorSchema);
