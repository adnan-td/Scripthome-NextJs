import { getServerSideSitemap } from "next-sitemap";
import { hostname } from "../../config/hostname";
const slugify = require("slugify");
import { scriptqueries } from "../../db/scripts.model";

export const getServerSideProps = async (context) => {
  const fields = (await scriptqueries.getAllScripts()).map((script) => {
    return {
      loc: `${hostname}/scripts/${slugify(script.title, { lower: true })}`,
      lastmod: new Date().toISOString(),
    };
  });
  return getServerSideSitemap(context, fields);
};

export default function Site() {}
