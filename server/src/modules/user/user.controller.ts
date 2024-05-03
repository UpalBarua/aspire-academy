import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import User from "./user.model";
import { newUserSchema } from "./user.validation";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newUser = req.body;

    const validationResult = newUserSchema.safeParse(newUser);

    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: "Provided new user data is invalid.",
        error: validationResult.error,
      });
    }

    const existingUser = await User.findOne({ email: newUser.email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "An account with this email already exists.",
        error: null,
      });
    }

    const createdUser = new User(newUser);
    await createdUser.save();

    res.status(201).json({
      success: true,
      message: "Registered new user successfully.",
      data: createdUser,
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const credentials = req.body;

    const validationResult = newUserSchema
      .omit({ name: true })
      .safeParse(credentials);

    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: "Provided credentials is invalid.",
        error: validationResult.error,
      });
    }

    const foundUser = await User.findOne({ email: credentials.email });

    if (!foundUser) {
      return res.status(401).json({
        success: false,
        message: "Email or password was incorrect.",
        error: null,
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      foundUser.password,
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Email or password was incorrect.",
        error: null,
      });
    }

    res.status(201).json({
      success: true,
      message: "Logged in user successfully.",
      data: foundUser,
    });
  } catch (error) {
    next(error);
  }
};
