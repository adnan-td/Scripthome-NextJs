import { otherqueries } from "../../db/otherqueries.model";

export default async function getStatistics(req, res) {
  if (req.method === "GET") {
    res.status(200).send(await otherqueries.getStatistics());
  }
}
