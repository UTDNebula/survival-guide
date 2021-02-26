module.exports = {
  siteMetadata: {
    title: `UTD Survival Guide`,
    description: `UTD Survival Guide will help you learn how to more than survive in college and plan for what happens afterward.`,
    author: `Project Nebula Maintainers`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
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
        name: `UTD Survival Guide`,
        short_name: `UTD Guide`,
        start_url: `/`,
        background_color: `#2F3FF4`,
        theme_color: `#2F3FF4`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
