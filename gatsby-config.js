module.exports = {
  siteMetadata: {
    title: 'Fake News!',
    author: `Patrick Powell`,
    description: `My Personal and Professional Blog`,
  },
  
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-glamor`,
    {resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
          }
    },
    {resolve: `gatsby-plugin-typography`,
       options: {
         pathToConfigModule: `src/utils/typography`,
          }
      },  
  ]
}