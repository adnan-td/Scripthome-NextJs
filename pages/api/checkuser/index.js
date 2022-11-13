import { userqueries } from "../../../db/users.model";
const bcrypt = require("bcrypt");

const errorobj = { message: "" };

export default async function getuser(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email && !password) {
      errorobj.message = "Please fill all the required fields";
      res.status(200).send(errorobj);
    } else {
      const user = await userqueries.getUserbyEmail(email);
      if (user) {
        try {
          if (await bcrypt.compare(password, user.password)) {
            res.status(201).send(user);
          } else {
            errorobj.message = "Password incorrect";
            res.status(200).send(errorobj);
          }
        } catch (e) {
          console.log("Something caused error => ", e);
          errorobj.message = "Something caused error";
          res.status(200).send(errorobj);
        }
      } else {
        errorobj.message = "User does not exist";
        res.status(200).send(errorobj);
      }
    }
  }
}
