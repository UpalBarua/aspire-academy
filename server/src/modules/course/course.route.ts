import { Router } from "express";
import { addNewCourse, getCourseById } from "./course.controller";

const router = Router();

router.get("/:id", getCourseById);
router.post("/", addNewCourse);

export default router;
