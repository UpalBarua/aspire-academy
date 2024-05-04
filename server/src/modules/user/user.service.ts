import User from "./user.model";
import type { TUser } from "./user.type";

export const getUserByEmail = async (email: string) =>
  await User.findOne({ email }).lean();

export const createNewUser = async (user: TUser) => {
  const createdUser = new User(user);
  await createdUser.save();
  return await User.findOne({ email: user.email }).lean();
};
