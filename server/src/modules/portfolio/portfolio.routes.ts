import express from "express";

import { verifyToken } from "../user/user.middleware";
import { getHoldingsController } from "./portfolio.controller";

const router = express.Router();

router.get("/holdings", verifyToken, getHoldingsController);

export default router;
