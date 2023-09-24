import { DataTypes } from "sequelize";
import { sequelize } from "../index";
import User from "./user";

const Holding = sequelize.define("Holding", {
  holding_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tradingsymbol: {
    type: DataTypes.TEXT,
  },
  exchange: {
    type: DataTypes.TEXT,
  },
  isin: {
    type: DataTypes.TEXT,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  authorised_date: {
    type: DataTypes.DATE,
  },
  average_price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  last_price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  close_price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  pnl: {
    type: DataTypes.DECIMAL(10, 2),
  },
  day_change: {
    type: DataTypes.DECIMAL(10, 2),
  },
  day_change_percentage: {
    type: DataTypes.DECIMAL(10, 2),
  },
});

Holding.belongsTo(User, { foreignKey: "user_id" });

export default Holding;
