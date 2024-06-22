import Course from "./course.model";
import type { TCourse } from "./course.type";

export const findCourseById = async (id: string) =>
  await Course.findOne({ _id: id }).lean();

export const createNewCourse = async (course: TCourse) => {
  const createdCourse = new Course(course);
  await createdCourse.save();
  return await Course.findOne({ _id: createdCourse._id }).lean();
};
