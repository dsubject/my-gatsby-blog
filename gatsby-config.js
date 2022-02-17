module.exports = {
  siteMetadata: {
    title: "My Gatsby Blog",
        menuLinks:[
      {
        name: 'home',
        link:'/'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: true,
              loading: 'lazy',
              markdownCaptions: true,
              withWebp: true,
              withAvif: true,
              quality: 50
            },
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-sharp`,
  ],
};
