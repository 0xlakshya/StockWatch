import Joi from "joi";

export const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  user_name: Joi.string().required(),
  user_type: Joi.string()
    .valid("individual", "institution")
    .default("individual"),
  broker: Joi.string()
    .valid("Zerodha", "Angel", "HDFC Securities")
    .default("Zerodha"),
});

export const loginSchema = Joi.object({
  password: Joi.string().required(),
  user_name: Joi.string().required(),
});
