import { Schema, model } from "mongoose";
import { TManagement } from "./management.type";

const managementSchema = new Schema<TManagement>({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

export const managementModel = model<TManagement>("Mentor", managementSchema);
