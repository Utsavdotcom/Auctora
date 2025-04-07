require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',       // ← leave blank if XAMPP has no password
  database: process.env.DB_NAME || 'auctora',
});

module.exports = pool;
