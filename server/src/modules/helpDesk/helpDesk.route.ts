import express from "express";
import { helpDeskController } from "./helpDesk.controller";

const router = express.Router();

router.post("/create-help-desk", helpDeskController.createHelpDesk);
router.get("/", helpDeskController.getHelpDesk);
router.delete("/:id", helpDeskController.deleteHelpDesk);

export const helpDeskRoute = router;
