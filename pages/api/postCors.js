import { scriptqueries } from "../../db/scripts.model";
import Cors from "cors";
const slugify = require("slugify");

const cors = initMiddleware(
  Cors({
    methods: ["POST"],
  })
);

export default async function getuser(req, res) {
  await cors(req, res);
  const script = req.body;
  // console.log(script);
  // console.log(await checkvalidscript(script));
  if (await checkvalidscript(script)) {
    try {
      await scriptqueries.addNewScript(script);
      res.status(200).send({ message: "Added successfully" });
    } catch (e) {
      if (e) console.log(e);
    }
  } else {
    res.status(400).send({ message: "Failed" });
  }
}

function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

const checkvalidscript = async (script) => {
  const { title, user_id, img, madeby, gameLink, script_code, description } = script;
  if (title && title.length > 4) {
    const slug = slugify(title, { lower: true });
    var title_matched_or_not = (await scriptqueries.getAllScripts()).find((script) => {
      return (
        slug ===
        slugify(script.title, {
          lower: true,
        })
      );
    });
  } else {
    title_matched_or_not = true;
  }
  console.log("title_matched: ", title_matched_or_not);

  if (title_matched_or_not) {
    return false;
  } else if (!user_id) {
    return false;
  } else if (!img) {
    return false;
  } else if (!madeby || madeby.length <= 4) {
    return false;
  } else if (!gameLink || gameLink.length <= 4) {
    return false;
  } else if (!script_code || script_code.length <= 4) {
    return false;
  } else if (!description || description.length <= 4) {
    return false;
  } else {
    return true;
  }
};
