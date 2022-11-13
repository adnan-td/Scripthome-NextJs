import { hostname } from "../../config/hostname";
import slugify from "slugify";
import { scriptqueries } from "../../db/scripts.model";
import RSS from "rss";

export async function getServerSideProps(context) {
  const siteURL = hostname;
  const allScripts = JSON.parse(JSON.stringify(await scriptqueries.getAllScripts()));

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
  // console.log(feed);
  // context.res.send(feed);
  return {
    props: { feed: feed.xml({ indent: true }) },
  };
}

export default function getRSS({ feed }) {
  return <pre>{feed}</pre>;
}
