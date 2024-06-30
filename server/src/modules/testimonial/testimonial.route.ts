import express from "express";
import { testimonialController } from "./testimonial.controller";

const router = express.Router();

router.post("/create-testimonial", testimonialController.createTestimonial);
router.get("/", testimonialController.getTestimonial);
router.delete(
  "/delete-testimonial/:id",
  testimonialController.deleteTestimonial
);

export const testimonialRoutes = router;
