import express, { Request, Response, Application } from "express";
import cors from "cors";
import helmet from "helmet";
import { PORT } from "./constants";
import routes from "./routes";

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api", routes);

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
});
