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
      return res.status(400).send({ error });
    } else {
      req.body = value;
      next();
    }
  };
};
