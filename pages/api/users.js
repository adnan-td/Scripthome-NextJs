import { userqueries } from "../../db/users.model";
const bcrypt = require("bcrypt");

export default async function getuser(req, res) {
  if (req.method === "GET") {
    const allusers = await userqueries.getAllUsers();
    res.status(200).send(allusers);
  } else if (req.method === "POST") {
    const user = req.body;

    const role = whatRole(user.admin, user.verified);

    if (!user.name && !user.email && !user.password) {
      res.status(406).send("Please fill all the required fields");
    } else {
      const encryptpassword = await bcrypt.hash(user.password, 10);
      await userqueries.addNewUser({
        name: user.name,
        email: user.email,
        role: role,
        password: encryptpassword,
        img: user.img ? user.img : "Default Value",
        adsense: user.adsense ? user.adsense : null,
      });
      res.status(200).send("Added successfully");
    }
  }
}

const whatRole = (admin, verified) => {
  if (admin === "on") return 2;
  else if (verified === "on") return 1;
  else return 0;
};
