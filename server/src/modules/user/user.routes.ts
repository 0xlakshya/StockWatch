import express from "express";

import {
  loginController,
  profileController,
  signupController,
} from "./user.controller";
import { validate } from "../../lib/utils";
import { loginSchema, signupSchema } from "./user.schema";
import { checkExistingUsernameOrEmail, verifyToken } from "./user.middleware";

const router = express.Router();

router.post(
  "/register",
  validate(signupSchema),
  checkExistingUsernameOrEmail,
  signupController
);


router.post("/login", validate(loginSchema), loginController);

router.get("/profile", verifyToken, profileController);

export default router;
