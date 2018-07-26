const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require(`gatsby-paginate`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    //create pages is a function? arguments are graphql and boundActionCreators? query is a string
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      createPaginatedPages({
        edges: result.data.posts.edges,
        createPage: createPage,
        pageTemplate: "./src/templates/index.jsx",
        pageLength: 5,
      })
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            //Data passed to context is available in page queries as GraphQL variables
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
