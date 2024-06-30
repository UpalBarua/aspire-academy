import { Router } from "express";
import {
  getAllUsers,
  getUserByEmail,
  loginUser,
  registerUser,
} from "./user.controller";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/enroll/:userId", loginUser);
router.get("/:email", getUserByEmail);
router.get("/", getAllUsers);

export default router;
