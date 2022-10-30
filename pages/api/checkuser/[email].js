import { userqueries } from "../../../db/users.model";

export default async function getoneuser(req, res) {
  const email = req.query.email;
  if (req.method === "GET") {
    let user = await userqueries.getUserbyEmail(email);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(202).send({ message: "user not found" });
    }
  }
}
