import { Request, Response } from "express";
import { latestEventService } from "./latestEvent.service";

const createLatestEvent = async (req: Request, res: Response) => {
  try {
    const newLatestEvent = req.body;
    const result = await latestEventService.createLatestEventDb(newLatestEvent);

    res.status(200).json({
      success: true,
      message: "latest Event  created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getLatestEvent = async (req: Request, res: Response) => {
  try {
    const result = await latestEventService.getLatestEventDb();

    res.status(200).json({
      success: true,
      message: "latest Event find successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteLatestEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await latestEventService.deleteLatestEventDb(id);

    res.status(200).json({
      success: true,
      message: "latest event delete successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const latestEventController = {
  createLatestEvent,
  getLatestEvent,
  deleteLatestEvent,
};
