import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextFunction, Response } from "express";
import User from "../../db/models/user";
import { hashPassword } from "./user.helper";
import { JWT_SECRET } from "../../lib/config";
import { AuthenticatedRequest } from "../../types";

export const signupController = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, user_type, user_name, broker } = req.body;

    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      email,
      password: hashedPassword,
      user_type,
      user_name,
      broker,
    });
    if (user) {
      const token = jwt.sign({ email: user.email }, "myjwtsecretthelongway", {
        expiresIn: 86400, // 24 hours
      });
      res.json({ token });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const loginController = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({
      where: {
        user_name: req.body.user_name,
      },
    });

    if (!user) {
      throw { code: 401, message: "User not found" };
    }

    const isValidPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isValidPassword) {
      throw { code: 401, message: "Invalid Password" };
    }

    const token = jwt.sign({ email: user.email }, "myjwtsecretthelongway", {
      expiresIn: 86400, // 24 hours
    });
    res.json({ token });
  } catch (error: any) {
    return res
      .status(error.code ?? 500)
      .send({ message: error.message ?? "Server Error" });
  }
};

export const profileController = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    //authenticated user has email set
    const email = req.email;
    const user = await User.findOne({
      where: { email },
    });
    if (!user) {
      throw { code: 404, message: "User not found" };
    }
    const { user_id, user_type, user_name, broker } = user;
    return res.json({
      status: "success",
      data: {
        user_id,
        email,
        user_type,
        user_name,
        broker,
      },
    });
  } catch (error: any) {
    return res
      .status(error.code ?? 500)
      .send({ message: error.message ?? "Server Error", status: "error" });
  }
};
