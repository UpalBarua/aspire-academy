import express from "express";
import { latestEventController } from "./latestEvent.controller";

const router = express.Router();

router.post("/create-latest-event", latestEventController.createLatestEvent);
router.get("/", latestEventController.getLatestEvent);
router.delete("/:id", latestEventController.deleteLatestEvent);

export const latestEventRoutes = router;
