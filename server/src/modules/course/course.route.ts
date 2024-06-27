import { Router } from "express";
import {
  addNewCourse,
  getAllCourses,
  getCourseById,
  removeCourseById,
} from "./course.controller";

const router = Router();

router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.delete("/:id", removeCourseById);
router.post("/", addNewCourse);

export default router;
