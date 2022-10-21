import { userqueries } from "../../db/users.model";
const bcrypt = require("bcrypt");

export default async function getuser(req, res) {
  if (req.method === "GET") {
    const allusers = await userqueries.getAllUsers();
    res.status(200).send(allusers);
  } else if (req.method === "POST") {
    const { name, email, password, admin, verified, user } = req.body;

    const role = whatRole(admin, verified, user);

    if (!name && !email && !password) {
      res.status(406).send("Please fill all the required fields");
    } else {
      const encryptpassword = await bcrypt.hash(password, 10);
      await userqueries.addNewUser(name, email, role, encryptpassword);
      res.status(200).send("Added successfully");
    }
  }
}

const whatRole = (admin, verified, user) => {
  if (admin === "on") return 2;
  if (verified === "on") return 1;
  if (user === "on") return 0;
};
