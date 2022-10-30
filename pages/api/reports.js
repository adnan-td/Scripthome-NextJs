import { otherqueries } from "../../db/otherqueries.model";

export default async function commentQueries(req, res) {
  if (req.method === "POST") {
    // body syntax = {method : "", report: "object"}
    const query = req.body;
    if (query.method === "getall") {
      res.status(200).send(await otherqueries.getReports());
    } else if (query.method === "add") {
      res.status(200).send(await otherqueries.addReport(query.report));
    } else if (query.method === "update") {
      await otherqueries.updateReport(query.report);
      res.status(200).send({ message: "done" });
    }
    res.status(200);
  }
}
