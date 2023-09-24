import express, { Request, Response, Application } from "express";
import cors from "cors";
import helmet from "helmet";
import { PORT } from "./lib/config";
import routes from "./lib/routes";
import { sequelize } from "./db";
import { seedTestUserInDb } from "./db/seed";

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// app.use("/api", routes);
routes(app);

(async () => {
  try {
    await sequelize.sync({ force: false }); // Set force to true if you want to drop and recreate tables
    console.log("Database tables created!");
  } catch (error) {
    console.error("Error creating database tables:", error);
  }
})();

app.get("/", async (req, res, next) => {
  try {
    return res.status(200).send("APP IS RUNNING");
  } catch (e) {
    console.log(`UNHEALTHY SERVER ERROR: ${e}`);
    return res.send({ error: e });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  seedTestUserInDb();
});
