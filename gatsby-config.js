module.exports = {
  siteMetadata: {
    title: 'Changing the Subject',
    menuLinks: [
      {
        name: 'home',
        link: '/'
      }
    ],
    description: "Named after a column she used to write at the University of Guelph's student newspaper, Changing the Subject is a blog written by Danielle Subject. Her posts explore (but are not limited to) tech, the environment, and mental health.",
    siteUrl: 'https://www.changingthesubject.ca',
    twitterUsername: '@danisubject',
    image: '/homeBanner.png',
    author: 'Danielle Subject',
    keywords: ['green software', 'green tech', 'software developer', 'beekeeping']
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
