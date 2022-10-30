import db from "./mysql";

async function getViewsByScript(script_id) {
  const query = new Promise((resolve, reject) => {
    db.query(`select * from views where script_id='${script_id}'`, (err, result) => {
      if (err) console.log(err);
      if (result) resolve(result.length);
      else resolve(null);
    });
  });
  return query.then((result) => {
    return result;
  });
}

async function getViewsByUser(user_id) {
  const query = new Promise((resolve, reject) => {
    db.query(`select * from views where user_id='${user_id}'`, (err, result) => {
      if (err) console.log(err);
      if (result) resolve(result.length);
      else resolve(null);
    });
  });
  return query.then((result) => {
    return result;
  });
}

async function addNewView(script_id) {
  // script is the one viewed, and user is the creater of the script
  async function getUserIdfromScript(script_id) {
    const query = new Promise((resolve, reject) => {
      db.query(`select user_id from script where id='${script_id}'`, (err, result) => {
        if (err) console.log(err);
        if (result) resolve(result[0].user_id);
        else resolve(null);
      });
    });
    return query.then((result) => {
      return result;
    });
  }
  const view = {
    user_id: await getUserIdfromScript(script_id),
    script_id,
  };
  db.query(`insert into views set ?`, view, (err, result) => {
    if (err) console.log(err);
  });
}

async function getLike(user_id, script_id) {
  const query = new Promise((resolve, reject) => {
    db.query(
      `select * from likes where user_id=${user_id} and script_id=${script_id}`,
      (err, result) => {
        if (err) console.log(err);
        if (!result) resolve(false);
        else if (result[0]) resolve(true);
        else resolve(false);
      }
    );
  });
  return query.then((result) => {
    return result;
  });
}

async function addNewLike(user_id, script_id) {
  // user is the one who liked, script is the liked script
  const like = {
    user_id,
    script_id,
  };
  db.query(`insert into likes set ?`, like, (err, result) => {
    if (err) console.log(err);
  });
}

async function removeLike(user_id, script_id) {
  // user is the one who liked, script is the liked script
  db.query(
    `delete from likes where user_id=${user_id} and script_id=${script_id}`,
    (err, result) => {
      if (err) console.log(err);
    }
  );
}

async function getStatistics() {
  const query = new Promise((resolve, reject) => {
    db.query(`select * from statistics where id=1`, (err, result) => {
      if (err) console.log(err);
      if (result) resolve(result[0]);
      else resolve(null);
    });
  });
  return query.then((result) => {
    return result;
  });
}

// async function getReports() {
//   const query = new Promise((resolve, reject) => {
//     db.query(`select * from report where resolved = 0`, (err, result) => {
//       if (err) console.log(err);
//       if (result) resolve(result);
//       else resolve(null);
//     });
//   });
//   return query.then((result) => {
//     return result;
//   });
// }

async function getReports() {
  const query = new Promise((resolve, reject) => {
    db.query(
      `
    SELECT report.body, report.id, user.name, script.title
    FROM report
    INNER JOIN user ON report.reported_by=user.id
    INNER JOIN script ON report.script_id=script.id
    WHERE resolved = 0;
    `,
      (err, result) => {
        if (err) console.log(err);
        if (result) resolve(result);
        else resolve(null);
      }
    );
  });
  return query.then((result) => {
    return result;
  });
}

async function addReport(report) {
  db.query(`insert into report set ?`, report, (err, result) => {
    if (err) console.log(err);
  });
}

async function updateReport(report) {
  db.query(`update report set ? where id=${report.id}`, report, (err, result) => {
    if (err) console.log(err);
  });
}

async function getComments(script_id) {
  const query = new Promise((resolve, reject) => {
    db.query(
      `
    SELECT comments.body, comments.id, user.name, user.img, user.role
    FROM comments
    INNER JOIN user ON comments.comment_by=user.id
    WHERE script_id = ${script_id};
    `,
      (err, result) => {
        if (err) console.log(err);
        if (result) resolve(result);
        else resolve(null);
      }
    );
  });
  return query.then((result) => {
    return result;
  });
}

async function getAllComments() {
  const query = new Promise((resolve, reject) => {
    db.query(
      `
    SELECT comments.body, comments.id, user.name, user.img, user.role
    FROM comments
    INNER JOIN user ON comments.comment_by=user.id;
    `,
      (err, result) => {
        if (err) console.log(err);
        if (result) resolve(result);
        else resolve(null);
      }
    );
  });
  return query.then((result) => {
    return result;
  });
}

async function getAllCommentsAdmin() {
  const query = new Promise((resolve, reject) => {
    db.query(
      `
    SELECT comments.body, comments.id, user.name, script.img, script.title
    FROM comments
    INNER JOIN user ON comments.comment_by=user.id
    INNER JOIN script ON comments.script_id=script.id
    `,
      (err, result) => {
        if (err) console.log(err);
        if (result) resolve(result);
        else resolve(null);
      }
    );
  });
  return query.then((result) => {
    return result;
  });
}

async function addComment(comment) {
  db.query(`insert into comments set ?`, comment, (err, result) => {
    if (err) console.log(err);
  });
}

async function updateComment(comment) {
  db.query(`update comments set ? where id=${comment.id}`, comment, (err, result) => {
    if (err) console.log(err);
  });
}

async function removeComment(id) {
  db.query(`delete from comments where id=${id}`, (err, result) => {
    if (err) console.log(err);
  });
}

export const otherqueries = {
  getViewsByScript,
  getViewsByUser,
  getLike,
  addNewView,
  addNewLike,
  removeLike,
  getStatistics,
  getReports,
  addReport,
  updateReport,
  getComments,
  getAllComments,
  getAllCommentsAdmin,
  addComment,
  updateComment,
  removeComment,
};