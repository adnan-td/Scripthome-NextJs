module.exports = {
  siteUrl: process.env.HOST,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/admin" },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${process.env.HOST}/sitemap.xml`,
      `${process.env.HOST}/scripts-sitemap.xml`,
      `${process.env.HOST}/users-sitemap.xml`,
    ],
  },
  exclude: ["/admin", "/admin/*"],
};
