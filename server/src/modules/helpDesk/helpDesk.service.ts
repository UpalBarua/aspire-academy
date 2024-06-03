import { helpDeskModel } from "./helpDesk.model";
import { THelpDesk } from "./helpDesk.type";

const createHelpDeskDb = async (helpDesk: THelpDesk) => {
  const result = await helpDeskModel.create(helpDesk);
  return result;
};

const getHelpDeskDb = async () => {
  const result = await helpDeskModel.find();
  return result;
};
const deleteHelpDeskDb = async (id: any) => {
  const result = await helpDeskModel.deleteOne({ _id: id });
  return result;
};

export const helpDeskService = {
  createHelpDeskDb,
  getHelpDeskDb,
  deleteHelpDeskDb,
};
