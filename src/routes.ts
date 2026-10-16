import {
  Router,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { shortCtrl } from "./utils/depsInstances.js";

export const route = Router();

route
  .post("/shorten", (req: Request, res: Response, next: NextFunction) => {
    shortCtrl.shorten(req, res, next);
  })
  .get("/:code", (req: Request, res: Response, next: NextFunction) => {
    shortCtrl.site(req, res, next);
  });
