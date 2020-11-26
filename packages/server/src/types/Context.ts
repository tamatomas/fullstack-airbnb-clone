import { Request, Response } from "express";

declare module "express-session" {
  interface SessionData {
    userId: number;
  }
}

export interface Context {
  req: Request;
  res: Response;
}
