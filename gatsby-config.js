/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Firo",
    description: "The future of Privacy is here",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
}
