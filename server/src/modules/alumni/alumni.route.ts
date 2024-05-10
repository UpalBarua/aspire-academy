import express from "express";
import { alumniController } from "./alumni.controller";

const router = express.Router();

router.post("/create-alumni", alumniController.createAlumni);
router.get("/", alumniController.getAlumni);

export const alumniRoutes = router;
