const mysql = require("mysql2/promise");
const dotenv = require("dotenv").config({
  path: "../.env",
});

let pool;

async function connectDB() {
  try {
    if (!pool) {
      pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      });
    }

    const connection = await pool.getConnection();
    return connection;
  } catch (error) {
    console.log("Error in Connecting Database: " + error);
  }
}

async function releaseConnection(connection) {
  try {
    if (connection) {
      connection.release();
    }
  } catch (error) {
    console.log("Error releasing connection: " + error);
  }
}

async function insertSNP500(data) {
  const connection = await connectDB();

  try {
    const sqlQuery =
      "INSERT INTO `SNP500` (`CIK`,`SYMBOL`,`NAME`,`SECTOR`,`HEADQUATER`,`FOUNDED`) VALUES (?,?,?,?,?,?)";
    const values = [
      data.cik,
      data.symbol,
      data.name,
      data.sector,
      data.headQuater,
      data.founded,
    ];
    const [result, field] = await connection.execute(sqlQuery, values);
    console.log(result);
  } catch (error) {
    connection.end();
    console.log("Error" + error);
  } finally {
    releaseConnection(connection);
  }
}

module.exports = {
  connectDB,
  insertSNP500,
};
