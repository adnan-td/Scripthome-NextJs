const mysql = require("mysql");

const db = new mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "scripthome",
});

db.connect((err) => {
  if (err) throw err;
});

export default db;

// async function addNewScript(script) {
//   db.query(`insert into script set ?`, script, (err, result) => {
//     if (err) throw err;
//   });
// }

// addNewScript({
//   user_id: 4,
//   title: "Table Destroying Sample5",
//   madeby: "Dave Dabba",
//   gameLink: "roblox.com/games/4036494886/10X-Gun-Simulator",
//   gameCode: "roblox://experiences/start?placeId=10758111998",
//   youtubeLink: "https://www.youtube.com/watch?v=EN6Dx22cPRI",
//   features: "happy; sad; angry",
//   tags: "happy; sad; angry",
//   script_code: "This is the sample script code",
//   description: "This is the sample description",
//   isActive: true,
//   likes: 65,
//   views: 901,
// });

// SQL for user table
// let sql = `CREATE TABLE user(
//   id int AUTO_INCREMENT NOT NULL,
//   name TEXT NOT NULL,
//   email TEXT NOT NULL,
//   role int NOT NULL DEFAULT 0,
//   password TEXT NOT NULL,
//   img TEXT, adsense TEXT,
//   PRIMARY KEY(id)
//   )`;

// SQL for script table
// let sql = `CREATE TABLE script(
//   id int AUTO_INCREMENT NOT NULL,
//   user_id INT NOT NULL,
//   title TEXT NOT NULL,
//   madeby TEXT NOT NULL,
//   gameLink TEXT,
//   gameCode TEXT,
//   youtubeLink TEXT,
//   features TEXT,
//   tags TEXT,
//   script_code TEXT NOT NULL,
//   description TEXT NOT NULL,
//   isActive BOOLEAN NOT NULL DEFAULT true,
//   likes INT NOT NULL DEFAULT 0,
//   views INT NOT NULL DEFAULT 0,
//   date DATE DEFAULT CURRENT_DATE,

//   PRIMARY KEY(id),
//   FOREIGN KEY (user_id) REFERENCES user(id)
//   )`;
