/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ["gatsby-plugin-typescript",
  {
    resolve: 'gatsby-plugin-apollo',
    options: {
      uri: 'https://fullstack-airbnbclone.herokuapp.com/graphql',
      credentials: "include"
    }
  }],
}
