import { getServerSideSitemap } from "next-sitemap";
import { hostname } from "../../config/hostname";
const slugify = require("slugify");
import { userqueries } from "../../db/users.model";

export const getServerSideProps = async (context) => {
  const fields = (await userqueries.getAllUsers()).map((user) => {
    return {
      loc: `${hostname}/users/${slugify(user.name, { lower: true })}`,
      lastmod: new Date().toISOString(),
    };
  });
  return getServerSideSitemap(context, fields);
};

export default function Site() {}
