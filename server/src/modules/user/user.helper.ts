import bcrypt from "bcrypt";
import User from "../../db/models/user";

export const hashPassword = async (password: string, saltLen = 10) => {
  try {
    const salt = await bcrypt.genSalt(saltLen);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.log(error);
  }
  return null;
};
