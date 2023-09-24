// app routes
import { Express, Response } from "express";
import AuthRoutes from "./modules/auth/auth.routes";

export default function (app: Express) {
  //app routes
  app.use("/auth", AuthRoutes);

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.all("*", (req, res, next) =>
    res.status(404).json({ message: "Request not found" }).send()
  );
}
