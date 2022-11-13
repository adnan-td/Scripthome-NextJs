import { otherqueries } from "../../db/otherqueries.model";

export default async function getoneuser(req, res) {
  if (req.method === "GET") {
    const result = await otherqueries.getAdsenseDefault();
    res.status(200).send(result);
  } else if (req.method === "POST") {
    await otherqueries.updateDefaultAdsense(req.body.adsense);
    res.status(200).send({ message: "Updated" });
  }
}
