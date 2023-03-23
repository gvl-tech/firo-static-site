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
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Source Sans Pro`,
            file: `https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap`,
          },
          {
            name: `Saira`,
            file: `https://fonts.googleapis.com/css2?family=Saira:wght@300;400;600;700&display=swap`,
          },
          {
            name: `Saira Semi Condensed`,
            file: `https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@300;400;600;700&display=swap`,
          },
        ],
      },
    },
  ],
}
