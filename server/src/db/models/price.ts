const { Sequelize, DataTypes } = require("sequelize");
import { sequelize } from "../index";

const Price = sequelize.define("Price", {
  price_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATE,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  instrument_name: {
    type: DataTypes.TEXT,
  },
});

export default Price;
