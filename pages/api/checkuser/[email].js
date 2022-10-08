import { userqueries } from "../../../db/users.model";

export default async function getoneuser(req, res) {
  const email = req.query.email;
  if (req.method === "GET") {
    let user = await userqueries.getUserbyEmail(email);
    if (user.rows[0]) {
      user = user.rows[0];
      res.status(200).send(user);
    } else {
      res.status(406).send({ message: "user not found" });
    }
  }
}
