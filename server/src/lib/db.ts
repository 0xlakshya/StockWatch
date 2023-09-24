import sqlite3 from "sqlite3";

// Create or open the SQLite database
const db = new sqlite3.Database("stockwatch.db");

// Create the users table if it doesn't exist
db.run(`
CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT
    user_type TEXT,
    user_name TEXT,
    broker TEXT,
);
`);

db.run(`
CREATE TABLE IF NOT EXISTS holdings (
    holding_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    tradingsymbol TEXT,
    exchange TEXT,
    isin TEXT,
    quantity INTEGER,
    authorised_date DATETIME,
    average_price DECIMAL(10, 2),
    last_price DECIMAL(10, 2),
    close_price DECIMAL(10, 2),
    pnl DECIMAL(10, 2),
    day_change DECIMAL(10, 2),
    day_change_percentage DECIMAL(10, 2),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);`);

db.run(`
CREATE TABLE IF NOT EXISTS prices (
    price_id INTEGER PRIMARY KEY AUTOINCREMENT,
    date DATE,
    price DECIMAL(10, 2),
    instrument_name TEXT
)
`);

export default db;
