import { Request, Response } from "express";
import { helpDeskService } from "./helpDesk.service";

const createHelpDesk = async (req: Request, res: Response) => {
  try {
    const newHelpDesk = req.body;
    const result = await helpDeskService.createHelpDeskDb(newHelpDesk);

    res.status(200).json({
      success: true,
      message: "help desk created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getHelpDesk = async (req: Request, res: Response) => {
  try {
    const result = await helpDeskService.getHelpDeskDb();

    res.status(200).json({
      success: true,
      message: "help desk find successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteHelpDesk = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await helpDeskService.deleteHelpDeskDb(id);

    res.status(200).json({
      success: true,
      message: "help desk delete successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const helpDeskController = {
  createHelpDesk,
  getHelpDesk,
  deleteHelpDesk,
};
