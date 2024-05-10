import express from "express";
import { mentorController } from "./mentor.controller";

const router = express.Router();

router.post("/create-mentor", mentorController.createMentor);
router.get("/", mentorController.getMentor);

export const mentorRoutes = router;
