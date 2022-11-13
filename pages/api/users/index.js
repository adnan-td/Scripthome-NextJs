import { userqueries } from "../../../db/users.model";
const bcrypt = require("bcrypt");

export default async function getuser(req, res) {
  if (req.method === "GET") {
    const allusers = await userqueries.getAllUsers();
    res.status(200).send(allusers);
  } else if (req.method === "POST") {
    const user = req.body;

    const role = whatRole(user.admin, user.verified);

    if (!user.name && !user.email && !user.password) {
      res.status(200).send({ message: "Please fill all the required fields!" });
    } else if (await userqueries.existsUserWithEmail(user.email)) {
      res.status(200).send({ message: "User with the Email already exists!" });
    } else {
      const encryptpassword = await bcrypt.hash(user.password, 10);
      const newuser = {
        name: user.name,
        email: user.email,
        role: role,
        password: encryptpassword,
        img: user.img ? user.img : null,
        adsense: user.adsense ? user.adsense : null,
      };
      for (const key in newuser) {
        if (newuser[key] === null || newuser[key] === undefined) {
          delete newuser[key];
        }
      }
      await userqueries.addNewUser(newuser);

      res.status(201).send({ message: "Registered Successfully!" });
    }
  }
}

const whatRole = (admin, verified) => {
  if (admin === "on") return 2;
  else if (verified === "on") return 1;
  else return 0;
};
