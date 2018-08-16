import React from "react"
import Link from "gatsby-link"
import Container from "../components/container"
require("prismjs/themes/prism-okaidia.css")

/* 
* This is essentially the "app"
* Code themes from https://prism.js.com
* https://github.com/PrismJS/prism/tree/1d5047df37aacc900f8270b1c6215028f6988eb1/themes
* Make sure the {} are removed before saving to change the code theme 

require("prismjs/themes/prism-coy.css");require("prismjs/themes/prism-dark.css");require("prismjs/themes/prism-funky.css");require("prismjs/themes/prism-okaidia.css");require("prismjs/themes/prism-solarizedlight.css");require("prismjs/themes/prism-tomorrow.css");require("prismjs/themes/prism-twilight.css");require("prismjs/themes/prism-prism.css");

* css components:
** <h1> Blog Posts
** <ul "Category Links">
** <div "card">
** <h2>
*/

export default ({ data }) => {
  console.log(data)
  return (
    <div className="Index-Content">

      <Container className="Index-Page">
        <h1 // Posts Header
          css={{
            display: `block`,
            fontStyle: `Calibri`,
            textAlign: `center`,
            marginLeft: `auto`,
            marginRight: `auto`,
          }}>
          Blog Posts
        </h1>

        <div className="Card-Container">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div
              className="card"
              key={node.id}
              css={{
                display: `block`,
                fontStyle: `Calibri`,
                textAlign: `center`,
                marginLeft: `auto`,
                marginRight: `auto`,
                marginTop: `auto`,
                marginBottom: `auto`,
                borderBottom: `2px solid #BBB`,
                borderRight: `2px solid #BBB`,
                borderLeft: `2px solid #BBB`,
                backgroundColor: `#eaeaea`,
              }}>
              <Link
                className="Blog-Post-Links"
                to={node.fields.slug}>
                <h2
                  className="Blog-Post-Title"
                  css={{
                    borderBottom: `2px solid #BBB`,
                    color: `#FFFFFF`,
                    backgroundColor: `#005ba1`,
                  }}>
                  {node.frontmatter.title}
                </h2>
              </Link>

              <p className="Post-Date"
                css={{ marginTop: `auto`, marginRight: `1rem`, marginLeft: `1rem`, textAlign: `center` }}><b>Updated: {node.frontmatter.date}</b></p>

              <p
                className="Excerpt"
                css={{ marginTop: `auto`, marginRight: `1rem`, marginLeft: `1rem`, textAlign: `center` }}>{node.excerpt}

              </p>

            </div>
            //This is the end of the card
          ))}
        </div>
      </Container>

    </div>
  )
}

/* This is the query that creates the feedr
** TODO - Create card component to mimic  
**   a reddit / outlook display
*/

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      totalCount
      edges {
        node {
          id
          timeToRead
          tableOfContents
          excerpt(pruneLength: 150)
          frontmatter {
            title
            tags
            date(formatString: " MMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
    allSitePage {
      totalCount
      edges {
        node {
          path
          id
        }
      }
    }
  }
`
{
  /*
  <ol
  class="pagination"
  style={{ listStyle: `none`, display: `inline-block` }}>
  <li>
  <a href="#">«</a>
  </li>
  <li>
  <a href="#">1</a>
  </li>
  <li>
  <a href="#">2</a>
  </li>
  <li>
  <a href="#">3</a>
  </li>
  <li>
  <a href="#">4</a>
  </li>
  <li>
  <a href="#">5</a>
  </li>
  <li>
  <a href="#">6</a>
  </li>
  <li>
  <a href="#">»</a>
  </li>
</ol>  */
}
