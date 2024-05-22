import { latestEventModel } from "./latestEvent.model";
import { TLatestEvent } from "./latestEvent.type";

const createLatestEventDb = async (latestEvent: TLatestEvent) => {
  const result = await latestEventModel.create(latestEvent);
  return result;
};

const getLatestEventDb = async () => {
  const result = await latestEventModel.find();
  return result;
};
const deleteLatestEventDb = async (id: any) => {
  const result = await latestEventModel.deleteOne({ _id: id });
  return result;
};

export const latestEventService = {
  createLatestEventDb,
  getLatestEventDb,
  deleteLatestEventDb,
};
