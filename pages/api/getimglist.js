import { otherqueries } from "../../db/otherqueries.model";

export default async function getoneuser(req, res) {
  if (req.method === "GET") {
    const imglist = await otherqueries.getImageList();
    res.status(200).send({ imglist });
  }
}
