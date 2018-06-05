module.exports = {
  siteMetadata: {
    title: 'Fake News',
    author: `Patrick Powell`,
    description: `My Personal and Professional Blog`,
    pages: ['about', 'contact', 'my-files', 'resume']
  },
  
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
      {
        resolve:'gatsby-transformer-remark',
        options: {
         plugins: ['gatsby-remark-responsive-iframe']
      },
    },
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "prp1277.github.io",
        path: `${__dirname}/source/`,
          },
    },
    {
      resolve: 'gatsby-plugin-typography',
       options: {
         pathToConfigModule: '/source/utils/typography',
          },
      },  
  ]
}