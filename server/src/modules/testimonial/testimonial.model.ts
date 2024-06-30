import { Schema, model } from "mongoose";
import { TTestimonial } from "./testimonial.type";

const testimonialSchema = new Schema<TTestimonial>({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  batch: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

export const testimonialModel = model<TTestimonial>(
  "Testimonial",
  testimonialSchema
);
