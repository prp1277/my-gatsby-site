module.exports = {
  siteMetadata: {
    title: "Fake News",
    author: "Patrick Powell",
    description: "My Personal and Professional Blog",
    siteURL: "https://prp1277.github.io",
  },
  
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
  {
    resolve:'gatsby-transformer-remark',
    options: {
     plugins: ["gatsby-remark-responsive-iframe"]
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'img',
      path: `${__dirname}/src/img`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'data',
      path: `${__dirname}/src/data`,
    },
  },
  `gatsby-plugin-glamor`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'prp1277.github.io',
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
  ],
}



/* Place configuration options in your gatsby-config.js

> https://www.gatsbyjs.org/packages/gatsby-source-apiserver/?=data

plugins: [
  {
    resolve: 'gatsby-source-apiserver',
    options: {
      // Type prefix of entities from server
      typePrefix: 'internal__',

      // The url, this should be the endpoint you are attempting to pull data from
      url: `http://yourapi.com/api/v1/posts`,

      method: 'post',

      headers: {
        'Content-Type': 'application/json'
      },
  
      // Request body
      data: {

      },

      // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
      // using this name. i.e. posts.json
      name: `posts`,

      // Nested level of entities in response object, example: `data.posts`
      entityLevel: `data.posts`,

      // Simple authentication, if optional, set it null
      auth: {
        username: 'myusername',
        password: 'supersecretpassword1234'
      },

      // Optional payload key name if your api returns your payload in a different key
      // Default will use the full response from the http request of the url
      payloadKey: `body`,

      // Optionally save the JSON data to a file locally
      // Default is false
      localSave: true,

      //  Required folder path where the data should be saved if using localSave option
      //  This folder must already exist
      path: `${__dirname}/src/data/auth/`,

      // Optionally include some output when building
      // Default is false
      verboseOutput: true, // For debugging purposes

      // Optionally skip creating nodes in graphQL.  Use this if you only want
      // The data to be saved locally
      // Default is false
      skipCreateNode: true, // skip import to graphQL, only use if localSave is all you want
    }
  }
];
*/