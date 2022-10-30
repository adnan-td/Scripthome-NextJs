import { otherqueries } from "../../db/otherqueries.model";

export default async function commentQueries(req, res) {
  if (req.method === "POST") {
    // body syntax = {method : "", id_script: "script id", comment: "object", id_sender: "sender id" }
    const query = req.body;
    if (query.method === "getall") {
      res.status(200).send(await otherqueries.getAllComments());
    } else if (query.method === "getalladmin") {
      res.status(200).send(await otherqueries.getAllCommentsAdmin());
    } else if (query.method === "getcomments") {
      res.status(200).send(await otherqueries.getComments(query.id_script));
    } else if (query.method === "getcommentbyid") {
      res.status(200).send(await otherqueries.getComments(query.id_comment));
    } else if (query.method === "add") {
      res.status(200).send(await otherqueries.addComment(query.comment));
    } else if (query.method === "update") {
      await otherqueries.updateComment(query.comment);
      res.status(200).send({ message: "done" });
    } else if (query.method === "delete") {
      await otherqueries.removeComment(query.comment.id);
      res.status(200).send({ message: "done" });
    }
    res.status(200);
  }
}
