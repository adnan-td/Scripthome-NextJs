import { userqueries } from "../../../db/users.model";
const slugify = require("slugify");

export default async function getoneuser(req, res) {
  const name = req.query.name;
  if (req.method === "GET") {
    let user = await userqueries.getUserbyName(name);
    if (user) {
      res.status(200).send({ exists: true, user: user });
    } else {
      res.status(200).send({ exists: false });
    }
  }
  // if (req.method === "POST") {
  //   let users = await userqueries.getAllUsers();
  //   let user = null;
  //   users.forEach((item) => {
  //     if (name === slugify(item.name, { lower: true })) {
  //       user = item;
  //     }
  //   });
  //   if (user) {
  //     res.status(200).send({ exists: true, user: user });
  //   } else {
  //     res.status(200).send({ exists: false });
  //   }
  // }
}
