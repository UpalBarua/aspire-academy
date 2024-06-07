import { Request, Response, NextFunction } from "express";
import { alumniService } from "./alumni.service";
import { alumniValidation } from "./alumni.validation";
const createAlumni = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newAlumni = req.body;
    const validationResult = alumniValidation.safeParse(newAlumni);

    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: "Provided alumni data is invalid.",
        error: validationResult.error,
      });
    }

    const result = await alumniService.createAlumniDb(newAlumni);

    res.status(200).json({
      success: true,
      message: "alumni created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAlumni = async (req: Request, res: Response) => {
  try {
    const result = await alumniService.getAlumniDb();

    res.status(200).json({
      success: true,
      message: "alumni find successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteAlumni = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await alumniService.deleteAlumniDb(id);

    res.status(200).json({
      success: true,
      message: "mentor delete successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const alumniController = {
  createAlumni,
  getAlumni,
  deleteAlumni,
};
