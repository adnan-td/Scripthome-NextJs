import { writeFileSync } from "fs";
import { hostname } from "./hostname";
import slugify from "slugify";
import RSS from "rss";
import path from "path";

export default async function getRSS(allScripts) {
  const siteURL = hostname;
  // console.log(path.join(__dirname, "../../../../public/rss/feed.xml"));
  console.log("Feeding RSS");

  const feed = new RSS({
    title: "ScriptHome",
    description:
      "Automatically optimize your Roblox experience with scripts from ScriptHome. Roblox Scripts, which are frequently updated and uploaded, where almost everyone can contribute!. Get notified for new roblox scripts by joining our server.",
    site_url: siteURL,
    feed_url: `${siteURL}/rss/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Scripthome`,
  });

  allScripts.map((post) => {
    feed.item({
      title: post.title,
      url: `${siteURL}/scripts/${slugify(post.title, { lower: true })}`,
      date: post.date,
      description: post.description,
    });
  });

  writeFileSync(
    path.join(__dirname, "../../../../public/rss/feed.xml"),
    feed.xml({ indent: true })
  );
}
