// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "loda.me",
  siteUrl: 'https://loda.me',
  siteDescription: 'Chia sẻ, hướng dẫn lập trình miễn phí và chất lượng nhất.',
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
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-XXXXXXXXX-X'
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
};
