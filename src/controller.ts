import type { NextFunction, Request, Response } from "express";
import type { ShortService } from "./service.js";

export class ShortController {
  constructor(private readonly shortServ: ShortService) {}

  async shorten(req: Request, res: Response, next: NextFunction) {
    const URLToShorten = req.body;
    if (!URLToShorten) throw new Error("Insira uma URL para encurtar.");
    try {
      const shortURL = await this.shortServ.encode(URLToShorten);
      res.status(201).json(shortURL);
    } catch (err) {
      next(err);
    }
  }

  async site(req: Request, res: Response, next: NextFunction) {
    const code = req.params;
    if (!code)
      throw new Error("Insira a URL encurtada para ser visitar o site.");
    try {
      const longURL = await this.shortServ.findURL(String(code));
      res.redirect(longURL);
    } catch (err) {
      next(err);
    }
  }
}
