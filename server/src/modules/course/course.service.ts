import Course from "./course.model";
import type { TCourse } from "./course.type";

export const findAllCourses = async () => await Course.find({}).lean();

export const findCourseById = async (id: string) =>
  await Course.findOne({ _id: id }).lean();

export const deleteCourseById = async (id: string) =>
  await Course.deleteOne({ _id: id });

export const createNewCourse = async (course: TCourse) => {
  const createdCourse = new Course(course);
  await createdCourse.save();
  return await Course.findOne({ _id: createdCourse._id }).lean();
};
