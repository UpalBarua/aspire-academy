import express from "express";
import { mentorController } from "./mentor.controller";

const router = express.Router();

router.post("/create-mentor", mentorController.createMentor);
router.get("/", mentorController.getMentor);
router.delete("/:id", mentorController.deleteMentor);

export const mentorRoutes = router;
