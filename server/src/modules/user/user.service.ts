import User from "./user.model";
import type { TUser } from "./user.type";

export const getUserByEmail = async (email: string) =>
  await User.findOne({ email });

export const createNewUser = async (user: TUser) => {
  const createdUser = new User(user);
  return await createdUser.save();
};
