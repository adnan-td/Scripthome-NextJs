import { scriptqueries } from "../../../db/scripts.model";
const slugify = require("slugify");

export default async function getoneuser(req, res) {
  const slug = req.query.slug;
  if (req.method === "POST") {
    const query = req.body;
    if (query.method === "getscript") {
      let scripts = await scriptqueries.getAllScripts(slug);
      const script = scripts.find((script) => {
        return (
          slug ===
          slugify(script.title, {
            lower: true,
          })
        );
      });
      if (script) {
        res.status(200).send(script);
      } else {
        res.status(200).send({ not_exists: true });
      }
    }
  } else {
    res.status(200).send({ not_exists: true });
  }
}
