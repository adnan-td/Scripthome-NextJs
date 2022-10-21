import { userqueries } from "../../../db/users.model";
const bcrypt = require("bcrypt");

export default async function getoneuser(req, res) {
  const id = req.query.id;
  let exists = await userqueries.existsUserWithId(id);
  if (exists) {
    if (req.method === "PUT") {
      const { name, email, password, admin, verified, user } = req.body;
      const role = whatRole(admin, verified, user);
      const userbyid = await userqueries.getUserbyID(id);
      const doesPasswordMatch = await bcrypt.compare(password, userbyid.password);
      if (name && email && doesPasswordMatch) {
        await userqueries.updateUser(name, password, role, id);
        res.status(200).send({ message: "The User has been updated" });
      } else if (exists) {
        res.status(406).send({ message: "Please fill all the required fields" });
      } else {
        res.status(404).send({ message: "The User does not exist" });
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
  } else res.status(404).send({ message: "not found" });
}

const whatRole = (admin, verified, user) => {
  if (admin === "on") return 2;
  if (verified === "on") return 1;
  if (user === "on") return 0;
};
