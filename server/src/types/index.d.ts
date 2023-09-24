import { Request } from "express";

interface AuthenticatedRequest extends Request {
  userId?: number; // Replace 'number' with the actual type of userId
}

type Error = {
  code: number;
  message: string;
};
