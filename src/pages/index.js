import React from "react";
import Link from "gatsby-link";
import Header from "../components/header";
import Footer from "../components/footer"
require("prismjs/themes/prism-coy.css");

import { rhythm } from "../utils/typography";

//This is essentially the "app"
export default ({ data }) => {
  console.log(data);
  return (
    <div className="blog-post" style={{  
      display: "block",
      maxWidth: `42rem`,
      color: `inherit`,
      marginLeft: `auto`,
      marginRight: `auto`,
      padding: `1.5rem 1.125rem`,
      paddingTop: `1.5rem`}}>
  <h1 style={{ textAlign: `center`, maxWidth: `50rem`, marginLeft: `auto`, marginRight: `auto`, display: `block`, clear: `both` }}>Welcome To My Website!<small>{" - "}{data.allMarkdownRemark.totalCount} Posts and Counting</small>
    </h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="card" style={{ textAlign: `center`, maxWidth: `50rem`, marginLeft: `auto`, marginRight: `auto`, marginTop: `auto`, marginBottom:`auto`, display: `block`, clear: `both` }} key={node.id}>
          <Link to={node.fields.slug} css={{ color: `inherit` }}>
          <h2 marginBottom={rhythm(1 / 4)}>{node.frontmatter.title}{" "}<small color="#BBB">— {node.frontmatter.date}</small>
            </h2>
          <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
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