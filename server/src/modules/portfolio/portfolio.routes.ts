import express from "express";

import { verifyToken } from "../user/user.middleware";
import {
  getHistoricalPriocesController,
  getHoldingsController,
} from "./portfolio.controller";

const router = express.Router();

router.get("/holdings", verifyToken, getHoldingsController);
router.get("/historical_prices", verifyToken, getHistoricalPriocesController);

export default router;
