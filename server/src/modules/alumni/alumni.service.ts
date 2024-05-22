import { alumniModel } from "./alumni.model";
import { TAlumni } from "./alumni.type";

export const createAlumniDb = async (alumni: TAlumni) => {
  const result = await alumniModel.create(alumni);
  return result;
};

const getAlumniDb = async () => {
  const result = await alumniModel.find();
  return result;
};
const deleteAlumniDb = async (id: any) => {
  const result = await alumniModel.deleteOne({ _id: id });
  return result;
};

export const alumniService = {
  createAlumniDb,
  getAlumniDb,
  deleteAlumniDb,
};
