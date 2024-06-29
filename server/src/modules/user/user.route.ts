import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  loginUser,
  registerUser,
} from "./user.controller";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/enroll/:userId", loginUser);
router.get("/user/:userId", getUserById);
router.get("/user", getAllUsers);

export default router;
