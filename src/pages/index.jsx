import React from "react";
import Link from "gatsby-link";
import Header from "../components/header";
import Footer from "../components/footer";
import Wrapper from "../components/wrapper"
require("prismjs/themes/prism-okaidia.css");

/* Code themes from https://prism.js.com
require("prismjs/themes/prism-{coy}.css");
require("prismjs/themes/prism-{dark}.css");
require("prismjs/themes/prism-{funky}.css");
require("prismjs/themes/prism-{okaidia}.css");
require("prismjs/themes/prism-{solarizedlight}.css");
require("prismjs/themes/prism-{tomorrow}.css");
require("prismjs/themes/prism-{twilight}.css");
require("prismjs/themes/prism-{prism}.css");
*/

import { rhythm } from "../utils/typography";

// This is essentially the "app"
// It's also the only page actually working (locally)
export default ({ data }) => {
  console.log(data);
  return (
    <Wrapper className="landing-page">
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
          <Link to={node.fields.slug}>
          <h2 marginBottom={rhythm(1 / 4)}>{node.frontmatter.title}<p><small>{node.frontmatter.date}</small></p></h2>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
      <Footer />
      </Wrapper>
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
`;