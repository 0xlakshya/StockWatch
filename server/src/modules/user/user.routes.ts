import express from "express";

import { loginController, signupController } from "./user.controller";
import { validate } from "../../lib/utils";
import { loginSchema, signupSchema } from "./user.schema";
import { checkExistingUsernameOrEmail } from "./user.middleware";

const router = express.Router();

router.post(
  "/register",
  validate(signupSchema),
  checkExistingUsernameOrEmail,
  signupController
);

router.post("/login", validate(loginSchema), loginController);

export default router;
