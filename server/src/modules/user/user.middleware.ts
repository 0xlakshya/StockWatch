import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../../db/models/user";
import { JWT_SECRET } from "../../lib/config";
import { AuthenticatedRequest } from "../../types";

export const verifyToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).send({
      message: "No auth token present",
    });
  }

  jwt.verify(token, "myjwtsecretthelongway", (err, decoded) => {
    if (err) {
      return res.status(401).send({
        err,
        token,
        status: "failed",
        message: "Authentication failed",
      });
    }
    req.email = (decoded as JwtPayload).email;
    next();
  });
};

export const checkExistingUsernameOrEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user_name, email } = req.body;

    // Username
    let user = await User.findOne({
      where: {
        user_name,
      },
    });
    if (user) {
      return res.status(409).send({
        message: "Username already exists",
      });
    }

    // Email
    user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      return res.status(409).send({
        message: "Email is already in use",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Unable to validate username or email!",
    });
  }
};
