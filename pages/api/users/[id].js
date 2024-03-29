import { userqueries } from "../../../db/users.model";
const bcrypt = require("bcrypt");

export default async function getoneuser(req, res) {
  const id = req.query.id;
  let exists = await userqueries.existsUserWithId(id);
  if (exists) {
    if (req.method === "PUT") {
      const user = req.body;
      const role = whatRole(user.admin, user.verified, user.user, user.role);
      const userbyid = await userqueries.getUserbyID(id);
      let doesPasswordMatch = await bcrypt.compare(user.password, userbyid.password);
      if (!doesPasswordMatch && user.password === userbyid.password) {
        doesPasswordMatch = true;
      }
      if (doesPasswordMatch) {
        const newuser = {
          name: user.name,
          password: user.new_password ? await bcrypt.hash(user.new_password, 10) : null,
          img: user.img,
          role: role,
          adsense: user.adsense ? user.adsense : null,
        };
        for (const key in newuser) {
          if (newuser[key] === null || newuser[key] === undefined) {
            delete newuser[key];
          } else if (newuser[key] === userbyid[key]) {
            delete newuser[key];
          }
        }
        await userqueries.updateUser(newuser, id);
        res.status(201).send({ message: "The User has been updated" });
      } else if (!doesPasswordMatch) {
        res.status(200).send({ message: "Old Password does not match!" });
      } else if (exists) {
        res.status(200).send({ message: "Please fill all the required fields" });
      } else {
        res.status(200).send({ message: "The User does not exist" });
      }
    } else if (req.method === "DELETE") {
      // if (exists) {
      //   await userqueries.removeUserById(id);
      // take password
      //   res.status(200).send("The User has been deleted");
      // } else {
      //   res.status(404).send("The User does not exist");
      // }
    } else if (req.method === "GET") {
      const user = await userqueries.getUserbyID(id);
      res.status(200).send(user);
    } else if (req.method === "POST") {
      const user = await userqueries.getUserbyEmail(id);
      res.status(200).send(user);
    }
  } else res.status(200).send({ message: "not found" });
}

const whatRole = (admin, verified, user, role) => {
  if (admin === "on") return 2;
  else if (verified === "on") return 1;
  else if (user === "on") return 0;
  else if (Number.isInteger(role)) return role;
  else return null;
};

// function isValid(user) {
//   if (user.id && user.password.length !== 0 && user.name.length !== 0 && user.img.length !== 0) {
//     return true;
//   } else return false;
// }
