module.exports = {
  siteMetadata: {
    title: "Pat Facts",
    author: "Patrick Powell",
    description: "My Personal and Professional Blog",
    siteURL: "https://prp1277.github.io",
  },

  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-twitter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "UA-115800548-1",
        includeInDevelopment: true,
        gtmAuth: "",
        gtmPreview: "",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-responsive-iframe"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/pages/docs/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "excel",
        path: `${__dirname}/src/pages/docs/excel`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/src/pages/docs/md`,
      },
    },
    `gatsby-plugin-glamor`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "prp1277.github.io",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: `/src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
}

/* Place configuration options in your gatsby-config.js

> https://www.gatsbyjs.org/packages/gatsby-source-apiserver/?=data
> https://github.com/Vagr9K/gatsby-advanced-starter/blob/master/gatsby-config.js

*/
