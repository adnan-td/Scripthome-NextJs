import { scriptqueries } from "../../../db/scripts.model";

export default async function getuser(req, res) {
  if (req.method === "GET") {
    let allscripts = await scriptqueries.getAllScripts();
    res.status(200).send(allscripts);
  } else if (req.method === "POST") {
    const script = req.body;
    await scriptqueries.addNewScript(script);
    res.status(200).send("Added successfully");
  }
}
