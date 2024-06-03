import { Schema, model } from "mongoose";
import { THelpDesk } from "./helpDesk.type";

const helpDeskSchema = new Schema<THelpDesk>({
  id: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const helpDeskModel = model<THelpDesk>("HelpDesk", helpDeskSchema);
