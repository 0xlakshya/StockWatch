// app routes
import { Application, Express } from "express";
import UserRoutes from "../modules/user/user.routes";
import HoldingRoutes from "../modules/portfolio/portfolio.routes";

export default function (app: Application) {
  //app routes
  app.use("/api/user", UserRoutes);
  app.use("/api/portfolio", HoldingRoutes);

  app.all("*", (req, res, next) =>
    res.status(404).json({ message: "Request not found" }).send()
  );
}
