import { Schema, model } from "mongoose";
import { TLatestEvent } from "./latestEvent.type";

const latestEventSchema = new Schema<TLatestEvent>({
  id: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

export const latestEventModel = model<TLatestEvent>(
  "LatestEvent",
  latestEventSchema
);
