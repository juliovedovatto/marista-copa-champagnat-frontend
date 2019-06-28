const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require('dotenv').config({
  path: `.env.${activeEnv}`
})

module.exports = {
  pathPrefix: process.env.GATSBY_PATH || '/copachampagnat/',
  siteMetadata: {
    title: `Copa Champagnat - Província Marista Brasil Centro-Sul`,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `copa-champagnat-frontend`,
        short_name: `copa-champagnat`,
        start_url: `/`,
        background_color: `#13b9c5`,
        theme_color: `#13b9c5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
