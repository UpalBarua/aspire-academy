import { mentorModel } from "./mentor.model";
import { TMentor } from "./mentor.type";

export const createMentorDb = async (alumni: TMentor) => {
  const result = await mentorModel.create(alumni);
  return result;
};

const getMentorDb = async () => {
  const result = await mentorModel.find();
  return result;
};
const deleteMentorDb = async (id: any) => {
  const result = await mentorModel.deleteOne({ _id: id });
  return result;
};

export const mentorService = {
  createMentorDb,
  getMentorDb,
  deleteMentorDb,
};
