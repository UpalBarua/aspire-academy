import { Request, Response, NextFunction } from "express";
import { testimonialValidation } from "./testimonial.validation";
import { testimonialService } from "./testimonial.service";

const createTestimonial = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newTestimonial = req.body;
    const validationResult = testimonialValidation.safeParse(newTestimonial);

    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: "Provided testimonial  data is invalid.",
        error: validationResult.error,
      });
    }
    const result = await testimonialService.createTestimonial(newTestimonial);

    res.status(200).json({
      success: true,
      message: "testimonial  created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getTestimonial = async (req: Request, res: Response) => {
  try {
    const result = await testimonialService.getTestimonialDb();

    res.status(200).json({
      success: true,
      message: "testimonials find successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteTestimonial = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await testimonialService.deleteTestimonialDb(id);

    res.status(200).json({
      success: true,
      message: "testimonial delete successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const testimonialController = {
  createTestimonial,
  getTestimonial,
  deleteTestimonial,
};
