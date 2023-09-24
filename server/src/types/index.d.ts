import { Request } from "express";

interface AuthenticatedRequest extends Request {
  email?: string; // Replace 'number' with the actual type of userId
}

type Error = {
  code: number;
  message: string;
};
