// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const nodeExternals = require('webpack-node-externals')

module.exports = {
  siteName: "loda.me",
  siteUrl: "https://loda.me",
  titleTemplate: '%s - loda.me',
  siteDescription: "Chia sẻ, hướng dẫn lập trình miễn phí và chất lượng nhất.",

  chainWebpack(config, { isServer }) {
    if (isServer) {
      config.externals(nodeExternals({
        whitelist: [
          /\.css$/,
          /\?vue&type=style/,
          /vue-instantsearch/,
          /instantsearch.js/
         ]
      }))
    }
  },


  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "article/_posts/**/*.md",
        typeName: "Article",
        route: "/:year/:month/:day/:slug"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "article/_hot/**/*.md",
        typeName: "HotArticle",
        route: "/hot/:slug"
      }
    },
    {
      use: '@gridsome/plugin-sitemap'
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-135687402-1"
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
