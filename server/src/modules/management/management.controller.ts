import { Request, Response, NextFunction } from "express";
import { managementService } from "./management.service";
import { managementValidation } from "./management.validation";

const createManagement = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newManagement = req.body;
    const validationResult = managementValidation.safeParse(newManagement);
    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: "Provided management data is invalid.",
        error: validationResult.error,
      });
    }

    const result = await managementService.createManagementDb(newManagement);

    res.status(200).json({
      success: true,
      message: "management created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getManagement = async (req: Request, res: Response) => {
  try {
    const result = await managementService.getManagementDb();

    res.status(200).json({
      success: true,
      message: "management find successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteManagement = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await managementService.deleteManagementDb(id);

    res.status(200).json({
      success: true,
      message: " management delete successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const managementController = {
  createManagement,
  getManagement,
  deleteManagement,
};
