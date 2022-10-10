import { userqueries } from "../../db/users.model";
const bcrypt = require("bcrypt");

export default async function getuser(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email && !password) {
      res.status(406).send({ message: "Please fill all the required fields" });
    } else {
      let user = await userqueries.getUserbyEmail(email);
      if (user.rows[0]) {
        user = user.rows[0];
        console.log(password, user.password);
        try {
          if (await bcrypt.compare(password, user.password)) {
            res.status(200).send(user);
          } else {
            console.log("password wrong");
            res.status(406).send({ message: "Password incorrect" });
          }
        } catch (e) {
          console.log("Something caused error => ", e);
          res.status(500).send({ message: "Something caused error" });
        }
      } else {
        res.status(406).send({ message: "User Does not exist" });
      }
    }
  }
}
