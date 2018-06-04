module.exports = {
    siteMetadata: {
        title: 'Fake News!',
        author: "Patrick Powell",
          Phone: "14024159083",
          Email: "prp1277@gmail.com",
          LinkedIn: "https://Linkedin.com/in/prpowell1277",
        siteUrl: `https://prp1277.github.io`,
        description: `My Personal Blog`
    },
    plugins: [
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `src`,
              path: `${__dirname}/src/`,
          }
      },
      `gatsby-transformer-remark`,

      `gatsby-plugin-glamor`,
      {
        resolve: `gatsby-plugin-typography`,
          options: {
          pathToConfigModule: `src/utils/typography`,
          },
      },
    ],
  };