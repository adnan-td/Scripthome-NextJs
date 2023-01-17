const schedule = require("node-schedule");
const mysql = require("mysql");
const { dblink } = require("../config/db_cron");

const db = new mysql.createConnection(dblink);

db.connect((err) => {
  if (err) console.log(err);
});

async function setStatistics(total_scripts_month, total_views_month) {
  db.query(
    `update statistics set ? where id=1`,
    { total_scripts_month, total_views_month },
    (err, result) => {
      if (err) console.log(err);
    }
  );
}

async function getAllScripts() {
  const query = new Promise((resolve, reject) => {
    db.query(`select * from script`, (err, result) => {
      if (err) throw err;
      if (result) resolve(result);
      else resolve(null);
    });
  });
  return query.then((result) => {
    return result;
  });
}

function StatisticCron() {
  const job = schedule.scheduleJob("0 0 1 * *", () => {
    async function updateStatistics() {
      const scripts = await getAllScripts();
      var a = 0; // no of scripts
      var b = 0; // no of views this month
      for (let i in scripts) {
        const currentdate = new Date();
        const script = scripts[i];
        const d1 = new Date(script.date);
        const d2 = new Date(currentdate.setMonth(currentdate.getMonth() - 1));
        if (d1 > d2) {
          a++;
          b += script.views;
        }
      }
      setStatistics(a, b);
    }
    updateStatistics();
  });
  job.invoke();
}

module.exports = StatisticCron;
