import React from "react";
import Link from "gatsby-link";
import Header from "../components/header";
import Footer from "../components/footer";
import Container from "../components/container"
require("prismjs/themes/prism-coy.css");

import { rhythm } from "../utils/typography";

// This is essentially the "app"
// It's also the only page actually working (locally)
export default ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Header />
      <h1 
      css={{ 
        textAlign: `center`, 
        maxWidth: `42rem`, 
        marginLeft: `auto`, 
        marginRight: `auto`, 
        display: `block`, 
        clear: `both`
       }}
    >Posts
    </h1>
    
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div 
        className="card" 
        css={{ 
          textAlign: `center`, 
          maxWidth: `42rem`, 
          marginLeft: `auto`, 
          marginRight: `auto`, 
          marginTop: `auto`, 
          marginBottom:`auto`, 
          display: `block`, 
          clear: `both`
         }} 
         key={node.id}>
          <Link 
          to={node.fields.slug}>
          <h2 
          marginBottom={rhythm(1 / 4)}
          >{node.frontmatter.title}{" "}
          <small color="#BBB">— {node.frontmatter.date}</small>
            </h2>
          <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
      <Footer />
    </Container>
  );
};

//This is the post pagination query and output
export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (sort:
    {fields: [frontmatter___date], order: DESC})
    {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;