import { scriptqueries } from "../../../db/scripts.model";
import { otherqueries } from "../../../db/otherqueries.model";
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
        const adsense = await scriptqueries.getScriptAdsense(script.user_id);
        const def_ads = await otherqueries.getAdsenseDefault();
        res.status(200).send({ ...script, adsense: adsense, def_ads: def_ads.adsense });
      } else {
        res.status(200).send({ not_exists: true });
      }
    }
  } else {
    res.status(200).send({ not_exists: true });
  }
}
