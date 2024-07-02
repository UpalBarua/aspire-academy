import express from "express";
import { managementController } from "./management.controller";

const router = express.Router();

router.post("/create-management", managementController.createManagement);
router.get("/", managementController.getManagement);
router.delete("/delete-management/:id", managementController.deleteManagement);

export const managementRoutes = router;
