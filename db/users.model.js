import db from "./mysql";

async function getAllUsers() {
  const query = new Promise((resolve, reject) => {
    db.query(`select * from user`, (err, result) => {
      if (err) throw err;
      if (result) resolve(result);
      else reject(null);
    });
  });
  return query.then((result) => {
    return result;
  });
}

async function getUserbyID(id) {
  const query = new Promise((resolve, reject) => {
    db.query(`select * from user where id='${id}'`, (err, result) => {
      if (err) throw err;
      if (result[0]) resolve(result[0]);
      else reject(null);
    });
  });
  return query.then((result) => {
    return result;
  });
}

async function getUserbyEmail(email) {
  const query = new Promise((resolve, reject) => {
    db.query(`select * from user where email='${email}'`, (err, result) => {
      if (err) throw err;
      if (result[0]) resolve(result[0]);
      else reject(null);
    });
  });
  return query.then((result) => {
    return result;
  });
}

async function addNewUser(name, email, role, password) {
  db.query(
    `insert into user (name, email, role, password) values('${name}','${email}',${role},'${password}' )`,
    (err, result) => {
      if (err) throw err;
    }
  );
}
async function updateUser(name, password, role, id) {
  db.query(
    `update user set name='${name}',password='${password}',role=${role} where id=${id}`,
    (err, result) => {
      if (err) throw err;
    }
  );
}

async function existsUserWithId(id) {
  const query = new Promise((resolve, reject) => {
    db.query(`select exists(select 1 from user where id=${id})`, (err, result) => {
      if (err) throw err;
      if (result) {
        result = result[0];
        for (var k in result) {
          result = result[k];
          break;
        }
        resolve(result);
      } else reject(null);
    });
  });
  return query.then((result) => {
    return result;
  });
}
async function removeUserById(id) {
  db.query(`delete from user where id=${id}`, (err, result) => {
    if (err) throw err;
  });
}

export const userqueries = {
  getAllUsers,
  addNewUser,
  updateUser,
  existsUserWithId,
  removeUserById,
  getUserbyID,
  getUserbyEmail,
};
