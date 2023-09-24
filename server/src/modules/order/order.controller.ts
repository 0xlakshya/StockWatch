import crypto from "crypto";
import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "../../types";

export const placeOrderController = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const order_id = crypto.randomBytes(16).toString();
  res.json({
    status: "success",
    data: {
      message: "Order Placed Successfully",
      order_id,
    },
  });
};
