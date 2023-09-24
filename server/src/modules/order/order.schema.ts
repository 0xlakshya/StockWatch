import Joi from "joi";

export const placeOrderSchema = Joi.object({
  symbol: Joi.string().required(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),
});
