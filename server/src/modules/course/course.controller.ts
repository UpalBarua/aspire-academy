import { NextFunction, Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import { createNewCourse, findCourseById } from "./course.service";
import { newCourseSchema } from "./course.validation";

export const getCourseById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const courseId = req.params.id;

    if (!courseId?.length || !isValidObjectId(courseId)) {
      return res.status(400).json({
        success: false,
        message: "Provided course id is invalid.",
        error: null,
      });
    }

    const foundCourse = await findCourseById(courseId);

    res.status(200).json({
      success: true,
      message: "Retrieved course successfully.",
      data: foundCourse,
    });
  } catch (error) {
    next(error);
  }
};

export const addNewCourse = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newCourse = req.body;

    const validationResult = newCourseSchema.safeParse(newCourse);

    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: "Provided new course data is invalid.",
        error: validationResult.error,
      });
    }

    const createdCourse = await createNewCourse(newCourse);

    res.status(201).json({
      success: true,
      message: "Created new course successfully.",
      data: createdCourse,
    });
  } catch (error) {
    next(error);
  }
};
