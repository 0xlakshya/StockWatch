const { Sequelize } = require("sequelize");

export const sequelize = new Sequelize("sqlite::memory:");
