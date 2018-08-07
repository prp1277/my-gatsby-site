import React from "react"
import Link from "gatsby-link"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"
require("prismjs/themes/prism-okaidia.css")

/* 
** Code themes from https://prism.js.com
** Make sure the {} are removed before saving to change the code theme 
**  require("prismjs/themes/prism-coy.css");require("prismjs/themes/prism-dark.css");require("prismjs/themes/prism-funky.css");require("prismjs/themes/prism-okaidia.css");require("prismjs/themes/prism-solarizedlight.css");require("prismjs/themes/prism-tomorrow.css");require("prismjs/themes/prism-twilight.css");require("prismjs/themes/prism-prism}.css");

** This is essentially the "app"
**  It's also the only page 
**  actually working (locally)
*/

/*
css components:
<h1> Blog Posts
<ul "Category Links">
<div "card">
<h2>
*/

export default ({ data }) => {
  console.log(data)
  return (
    <div className="Index-Content">
      <Header />
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
        {/* <p> 
          <b>Categories:</b>
        </p>
        <ul
          className="Category-Links"
          css={{ listStyle: `none`, float: `middle` }}>
          <a href="./docs/excel/" alt="Excel">
            Excel{" "}
          </a>
          <a href="./docs/mdUtilities/" alt="Markdown">
            Markdown{" "}
          </a>
          <a href="./docs/R/" alt="R">
            R{" "}
          </a>
        </ul>*/}
        {data.allMarkdownRemark.edges.map(({ node }) => (
          // Everything below this line is populated by the graphql query Cards component supposed to look like Excel tables
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
            <Link className="Blog-Post-Links" to={node.fields.slug}>
              <h2
                className="Blog-Post-Title"
                css={{
                  borderBottom: `2px solid #BBB`,
                  color: `#FFFFFF`,
                  backgroundColor: `#005ba1`,
                }}>
                {node.frontmatter.title} <br />
                <small>{node.frontmatter.date}</small>
              </h2>
            </Link>
            <p
              className="Tags-Link"
              css={{ margin: `1rem`, textAlign: `center` }}>
              {/* The rest is the actual content inside the card */}
              <b>
                Tags:<Link to={node.path}>{node.frontmatter.tags}</Link>
              </b>
              <br /> {node.excerpt}
            </p>
          </div>
          //This is the end of the card
        ))}
      </Container>
      <Footer />
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
      limit: 10
    ) {
      totalCount
      edges {
        node {
          id
          timeToRead
          tableOfContents
          excerpt
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
