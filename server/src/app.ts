import cors from "cors";
import express, { type Request, type Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import errorHandler from "./middlewares/error-handler";
import { alumniRoutes } from "./modules/alumni/alumni.route";

// routes
import userRoutes from "./modules/user/user.route";
import { mentorRoutes } from "./modules/mentor/mentor.route";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// routes
app.use("/api/users", userRoutes);
app.use("/api/alumni", alumniRoutes);
app.use("/api/mentor", mentorRoutes);

app.all("*", (_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "There is no such route",
  });
});

app.use(errorHandler);

export default app;
