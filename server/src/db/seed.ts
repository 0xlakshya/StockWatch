import { count } from "console";
import { SEED_HISTORICAL_PRICES } from "../lib/constants";
import { hashPassword } from "../modules/user/user.helper";

import User from "./models/user";

export async function seedTestUserInDb() {
  try {
    const seeduser = {
      email: "test@test.com",
      password: await hashPassword("test"),
      user_type: "individual",
      user_name: "test",
      broker: "Zerodha",
    };

    let existingUser = await User.findOne({
      where: {
        user_name: seeduser.user_name,
      },
    });

    if (existingUser)
      return console.log("No seeding required, test user already present");

    await User.create({ ...seeduser });
    console.log("Test User added to DB");
  } catch (error) {
    console.error("Error seeding user:", error);
  }
}
