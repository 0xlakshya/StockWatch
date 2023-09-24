import express from "express";

import { verifyToken } from "../user/user.middleware";
import { placeOrderController } from "./order.controller";
import { validate } from "../../lib/utils";
import { placeOrderSchema } from "./order.schema";

const router = express.Router();

router.post(
  "/place_order",
  verifyToken,
  validate(placeOrderSchema),
  placeOrderController
);

export default router;
