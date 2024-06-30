import { Router } from "express";
import {
  getAllUsers,
  getUserByEmail,
  loginUser,
  registerUser,
  enrollCourse,
} from "./user.controller";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/enroll/:userId", enrollCourse);
router.get("/:email", getUserByEmail);
router.get("/", getAllUsers);

export default router;
