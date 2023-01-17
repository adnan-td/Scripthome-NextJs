import { scriptqueries } from "../../../db/scripts.model";

export default async function viewQueries(req, res) {
  if (req.method === "POST") {
    // body syntax = {method : "", limit : "", offset : ""}
    const query = req.body;
    if (query.method === "recent") {
      res.status(200).send(await scriptqueries.get12ScriptRecent());
    } else if (query.method === "highviews") {
      res.status(200).send(await scriptqueries.get6ScriptHighViews());
    } else if (query.method === "paginated") {
      res.status(200).send(await scriptqueries.getAllScriptsPaginated(query.limit, query.offset));
    } else if (query.method === "all") {
      res.status(200).send(await scriptqueries.getAllScripts());
    } else if (query.method === "length") {
      res.status(200).send(await scriptqueries.getAllScriptsLength());
    } else {
      res.status(200);
    }
  }
}
