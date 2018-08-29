import React from "react"
import Link from "gatsby-link"
import Container from "../components/container"
require("prismjs/themes/prism-okaidia.css")

/* 
Themes from: https://github.com/PrismJS/prism/tree/1d5047df37aacc900f8270b1c6215028f6988eb1/themes
require("prismjs/themes/prism-coy.css");require("prismjs/themes/prism-dark.css");require("prismjs/themes/prism-funky.css");require("prismjs/themes/prism-okaidia.css");require("prismjs/themes/prism-solarizedlight.css");require("prismjs/themes/prism-tomorrow.css");require("prismjs/themes/prism-twilight.css");require("prismjs/themes/prism-prism.css");
*/

/* 
Structure
* <div1 "Index-Content" />
** <Container "Index-Page" />
*** <h1> Blog Posts />
**** <div2 "Card-Container"/>
***** <div3 "card"/>
***** <Link "Blog-Post-Links"/>
****** <H2 "Blog-Post-Titles"/>
******* <p "Post-Date"/>
******** <p "Excerpt"/>
*/

export default ({ data }) => {
  console.log(data)
  return (
    <div className="Main">
      <Container className="Index-Page">

        <h1 className="Page-Title"
          css={{
            display: `block`,
            fontStyle: `Calibri`,
            textAlign: `center`,
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        >
          Blog Posts
        </h1>

        <div className="Card-Container">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="card"
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
                backgroundColor: `#eaeaea`
              }}
            >
              <Link className="Blog-Post-Links"
                to={node.fields.slug}
              >
                <h2 className="Blog-Post-Title"
                  css={{
                    borderBottom: `2px solid #BBB`,
                    color: `#FFFFFF`,
                    backgroundColor: `#005ba1`,
                  }}
                >{node.frontmatter.title}
                </h2>
              </Link>

              <p className="Post-Date"
                css={{
                  marginTop: `auto`,
                  marginRight: `1rem`,
                  marginLeft: `1rem`,
                  textAlign: `center`
                }}
              ><b>Updated: {node.frontmatter.date}</b>
              </p>

              <p className="Excerpt"
                css={{
                  marginTop: `auto`,
                  marginRight: `1rem`,
                  marginLeft: `1rem`,
                  textAlign: `center`
                }}
              >{node.excerpt}
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
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            title
            date(formatString: " MMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

/** Google Analytics Script:
 * <!-- Global site tag (gtag.js) - Google Analytics -->
 * <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115800548-1"></script>
 * <script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-115800548-1');</script>
 * 
*/