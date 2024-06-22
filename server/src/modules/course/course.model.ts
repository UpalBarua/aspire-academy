import mongoose from "mongoose";
import { validateString, validateUrl } from "../../configs/validation";
import type { TCourse } from "./course.type";

// TODO:
// * add validation to check if discounted price is less than regular price.
// * validate start and end enrollment date
// * automatically set the batch number

const courseSchema = new mongoose.Schema<TCourse>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [5, "Name must be at least 5 characters long."],
      maxlength: [100, "Name cannot be longer than 100 characters."],
      validate: [
        validateString,
        "Name can only contain letters, numbers, spaces, and punctuation (, . ! ? - _).",
      ],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: [50, "Description must be at least 50 characters long."],
      maxlength: [500, "Description cannot be longer than 100 characters."],
      validate: [
        validateString,
        "Name can only contain letters, numbers, spaces, and punctuation (, . ! ? - _).",
      ],
    },
    coverPicture: {
      type: String,
      required: true,
      trimg: true,
      validate: [validateUrl, "Cover photo must be a valid url."],
    },
    duration: {
      type: Number,
      required: true,
      min: [0, "Duration must be more than 0 Months."],
      max: [12, "Duration cannot be more than 12 Months."],
    },
    alumni: {
      type: Number,
      default: 0,
    },
    batch: {
      type: Number,
      default: 1,
    },
    price: {
      regular: {
        type: Number,
        required: true,
        min: [0, "Price must be more than 0 BDT."],
        max: [50000, "Price cannot be more than 50,000 BDT."],
      },
      discounted: {
        type: Number,
        required: true,
        min: [0, "Price must be more than 0 BDT."],
        max: [50000, "Price cannot be more than 50,000 BDT."],
      },
    },
    instructor: {
      name: String,
      title: String,
      picture: String,
    },
    enrollment: {
      start: {
        type: String,
        required: true,
      },
      end: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  },
);

const Course = mongoose.model<TCourse>("Course", courseSchema);

export default Course;
