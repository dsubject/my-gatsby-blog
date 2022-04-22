module.exports = {
  siteMetadata: {
    title: 'Changing the Subject',
    menuLinks: [
      {
        name: 'home',
        link: '/'
      }
    ],
    description:
      "Named after a column she used to write at the University of Guelph's student newspaper, Changing the Subject is a blog written by Danielle Subject. Her posts explore (but are not limited to) tech, the environment, and mental health.",
    siteUrl: 'https://www.changingthesubject.ca',
    twitterUsername: '@danisubject',
    image: '/homeBanner.png',
    author: 'Danielle Subject',
    keywords: [
      'green software',
      'green tech',
      'software developer',
      'beekeeping'
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`
      }
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
            }
          }
        ]
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-87156604-2',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Enables Google Optimize Experiment ID
        experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // Set Variation ID. 0 for original 1,2,3....
        variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'example.com',
        // defaults to false
        enableWebVitalsTracking: true
      }
    }
  ]
}
