import { managementModel } from "./management.model";
import { TManagement } from "./management.type";

export const createManagementDb = async (management: TManagement) => {
  const result = await managementModel.create(management);
  return result;
};

const getManagementDb = async () => {
  const result = await managementModel.find();
  return result;
};
const deleteManagementDb = async (id: any) => {
  const result = await managementModel.deleteOne({ _id: id });
  return result;
};

export const managementService = {
  createManagementDb,
  getManagementDb,
  deleteManagementDb,
};
