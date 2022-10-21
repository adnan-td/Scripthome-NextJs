import { scriptqueries } from "../../../../db/scripts.model";

export default async function getoneuser(req, res) {
  const id = req.query.id;
  if (req.method === "GET") {
    const script = await scriptqueries.getScriptsbyUserID(id);
    res.status(200).send(script);
  }
}
