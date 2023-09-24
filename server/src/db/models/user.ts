import { sequelize } from "..";
const { Sequelize, DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.TEXT,
    unique: true,
  },
  password: {
    type: DataTypes.TEXT,
  },
  user_type: {
    type: DataTypes.TEXT,
  },
  user_name: {
    type: DataTypes.TEXT,
  },
  broker: {
    type: DataTypes.TEXT,
  },
});

export default User;
