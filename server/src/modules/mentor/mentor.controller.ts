import { Request, Response } from "express";

import { mentorService } from "./mentor.service";
const createMentor = async (req: Request, res: Response) => {
  try {
    const newMentor = req.body;
    const result = await mentorService.createMentorDb(newMentor);

    res.status(200).json({
      success: true,
      message: "mentor created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getMentor = async (req: Request, res: Response) => {
  try {
    const result = await mentorService.getMentorDb();

    res.status(200).json({
      success: true,
      message: "mentor find successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteMentor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await mentorService.deleteMentorDb(id);

    res.status(200).json({
      success: true,
      message: "mentor delete successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const mentorController = {
  createMentor,
  getMentor,
  deleteMentor,
};
