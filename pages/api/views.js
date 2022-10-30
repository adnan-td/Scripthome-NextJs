import { otherqueries } from "../../db/otherqueries.model";

export default async function viewQueries(req, res) {
  if (req.method === "POST") {
    // body syntax = {method : "", id: "script or user id"}
    const query = req.body;
    if (query.method === "getbyscript") {
      res.status(200).send(await otherqueries.getViewsByScript(query.id));
    } else if (query.method === "getbyuser") {
      res.status(200).send(await otherqueries.getViewsByUser(query.id));
    } else if (query.method === "add") {
      // this id is of script
      await otherqueries.addNewView(query.id);
      res.status(200);
    }
  }
}
