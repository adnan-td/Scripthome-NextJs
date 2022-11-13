import { otherqueries } from "../../db/otherqueries.model";

export default async function viewQueries(req, res) {
  if (req.method === "POST") {
    // body syntax = {method : "", id_script: "script, id_user: "user id, like: "object"}
    const query = req.body;
    if (query.method === "get") {
      res.status(200).send({ isLiked: await otherqueries.getLike(query.id_user, query.id_script) });
    } else if (query.method === "add") {
      res.status(200).send(await otherqueries.addNewLike(query.id_user, query.id_script));
    } else if (query.method === "remove") {
      res.status(200).send(await otherqueries.removeLike(query.id_user, query.id_script));
    } else {
      res.status(200);
    }
  }
}
