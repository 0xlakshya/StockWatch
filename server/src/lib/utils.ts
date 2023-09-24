import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

export const validate = (schema: Schema, property?: unknown) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };

    const { error, value } = schema.validate(req.body, options);

    if (error) {
      const message = error.details.map((e) => e.message.replace(/"/g, "'"));
      return res.status(400).send({ message });
    } else {
      req.body = value;
      next();
    }
  };
};
