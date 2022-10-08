const pg = require("pg");

const db = new pg.Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "adnan",
  database: "scripthome",
});

db.connect();

// async function psqlDisconnect() {
//   await db.end();
// }

export default db;
