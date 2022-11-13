import { scriptqueries } from "../../../db/scripts.model";

export default async function getoneuser(req, res) {
  const id = req.query.id;
  const exists = await scriptqueries.existsScriptWithId(id);
  if (exists) {
    if (req.method === "PUT") {
      const script = req.body;
      if (isValid(script)) {
        await scriptqueries.updateScript(script);
        res.status(200).send({ message: "The User has been updated" });
      } else if (exists) {
        res.status(200).send({ message: "Please fill all the required fields" });
      } else {
        res.status(200).send({ message: "The User does not exist" });
      }
    }
    // else if (req.method === "DELETE") {
    // if (exists) {
    //   await scriptqueries.removeUserById(id);
    // take password
    //   res.status(200).send("The User has been deleted");
    // } else {
    //   res.status(404).send("The User does not exist");
    // }
    // }
    else if (req.method === "GET") {
      const script = await scriptqueries.getScriptbyID(id);
      res.status(200).send(script);
    }
  } else if (req.method === "GET") {
    const script = await scriptqueries.getScriptbyID(id);
    res.status(200).send(script);
  } else {
    res.status(200).send({ message: "Does not exist" });
  }
}

function isValid(script) {
  if (script.user_id && script.title && script.madeby && script.script_code && script.description) {
    return true;
  } else return false;
}
