import express from "express";
import { alumniController } from "./alumni.controller";

const router = express.Router();

router.post("/create-alumni", alumniController.createAlumni);
router.get("/", alumniController.getAlumni);
router.delete("/:id", alumniController.deleteAlumni);

export const alumniRoutes = router;
