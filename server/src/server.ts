import express, { Request, Response ,Application} from "express";
import cors from "cors";
import helmet from "helmet";
import { PORT } from "./constants";

// app routes
import AuthRoutes from "./modules/auth/auth.routes";

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api", AuthRoutes);

app.get("/healthz", (req: Request, res: Response) =>
  res.status(200).json({ date: Date.now() })
);

app.get("/", async (req, res, next) => {
  try {
    return res.status(200).send("APP IS RUNNING");
  } catch (e) {
    console.log(`UNHEALTHY SERVER ERROR: ${e}`);
    return res.send({ error: e });
  }
});
