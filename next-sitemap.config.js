/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://sky-garden.lv',
    generateRobotsTxt: true,
    outDir: 'public',
  }