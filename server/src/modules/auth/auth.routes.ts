import express from "express";

import { loginController, signupController } from "./auth.controller";
import { validate } from "../../lib/utils";
import { loginSchema, signupSchema } from "./auth.schema";
import { checkExistingUsernameOrEmail } from "./auth.middleware";

const router = express.Router();

router.post(
  "/signup",
  validate(signupSchema),
  checkExistingUsernameOrEmail,
  signupController
);

router.post("/login", validate(loginSchema), loginController);

export default router;
