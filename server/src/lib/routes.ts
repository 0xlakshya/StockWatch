// app routes
import { Application, Express } from "express";
import UserRoutes from "../modules/user/user.routes";
import HoldingRoutes from "../modules/portfolio/portfolio.routes";
import OrderRoutes from "../modules/order/order.routes";

export default function (app: Application) {
  //app routes
  app.use("/api/user", UserRoutes);
  app.use("/api/portfolio", HoldingRoutes);
  app.use("/api/order", OrderRoutes);

  app.all("*", (req, res, next) =>
    res.status(404).json({ message: "Request not found" }).send()
  );
}
