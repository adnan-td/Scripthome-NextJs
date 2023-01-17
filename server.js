const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const hostname = "scripthome.org";
const port = process.env.PORT || 3000;
const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

const StatisticCron = require("./cron/cron");

app.prepare().then(() => {
  StatisticCron();
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === "/a") {
        await app.render(req, res, "/a", query);
      } else if (pathname === "/b") {
        await app.render(req, res, "/b", query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  }).listen(port, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`> Ready on https://${hostname}`);
  });
});
