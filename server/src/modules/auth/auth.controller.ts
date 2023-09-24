import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextFunction, Response } from "express";
import User from "../../db/models/user";
import { hashPassword } from "./auth.helper";
import { JWT_SECRET } from "../../lib/constants";

export const signupController = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, user_type, user_name, broker } = req.body;

    const hashedPassword = hashPassword(password);
    const user = await User.create({
      email,
      password: hashedPassword,
      user_type,
      user_name,
      broker,
    });
    res.json(user);
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
        username: req.body.username,
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

    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400, // 24 hours
    });
    res.json({ user, token });
  } catch (error: any) {
    return res
      .status(error.code ?? 500)
      .send({ message: error.message ?? "Server Error" });
  }
};
