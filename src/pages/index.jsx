import React from "react"
import Link from "gatsby-link"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"
require("prismjs/themes/prism-twilight.css")

/* Code themes from https://prism.js.com
/* Copy and paste from below over line 6
/* Make sure the {} are removed before saving
/* to change the code theme */

/*
require("prismjs/themes/prism-{coy}.css");
require("prismjs/themes/prism-{dark}.css");
require("prismjs/themes/prism-{funky}.css");
require("prismjs/themes/prism-{okaidia}.css");
require("prismjs/themes/prism-{solarizedlight}.css");
require("prismjs/themes/prism-{tomorrow}.css");
require("prismjs/themes/prism-{twilight}.css");
require("prismjs/themes/prism-{prism}.css");*/

/* This is essentially the "app"
/* It's also the only page 
/* actually working (locally)*/

export default ({ data }) => {
  console.log(data)
  return (
    <div className="Index-Content">
      <Header />
      <Container className="Index-Page">
        <h1
          css={{
            display: `block`,
            fontStyle: `calibri`,
            textAlign: `center`,
            marginLeft: `auto`,
            marginRight: `auto`,
          }}>
          Posts
        </h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div
            className="card"
            key={node.id}
            css={{
              display: `block`,
              fontStyle: "calibri",
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
            <Link to={node.fields.slug}>
              <h2
                css={{
                  borderBottom: `2px solid #BBB`,
                  color: `#FFFFFF`,
                  backgroundColor: `#005ba1`,
                }}>
                {node.frontmatter.title} <br />
                <small>{node.frontmatter.date}</small>
              </h2>
            </Link>
            <p css={{ margin: `auto` }}>
              <b>
                Tags:<Link to={/my-tags/}> {node.frontmatter.tags}</Link>
              </b>
              <br /> {node.excerpt}
            </p>
          </div>
        ))}
      </Container>
      <Footer />
    </div>
  )
}

/* This is the query that creates the feedr
/* TODO - Create card component to mimic  
/*          a reddit / outlook display */

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            date(formatString: " MMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
