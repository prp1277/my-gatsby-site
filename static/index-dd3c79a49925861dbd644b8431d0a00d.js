import React from "react";
import g from "glamorous";
import Link from "gatsby-link"

import { rhythm } from "../utils/typography";
//This is the index.js that controls what pages look like
export default ({ data }) => {
  console.log(data);
  return (
    <div style={{  margin: `1rem auto`, maxWidth:750 }}>
      <g.H1 display={"inline-block"}>
        [Welcome to My Blog]()
      </g.H1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
        <Link
        to={node.fields.slug}
        css={{ textDecoration: `none`, color: `0000FF`}}
        >
          <g.H3 marginBottom={rhythm(1 / 4)}>
            {node.frontmatter.title}{" "}
            <g.Span color='inherit'>— {node.frontmatter.date}</g.Span>
          </g.H3>
          <p>{node.excerpt}
          </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

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
            date(formatString: "DD MMMM, YYYY")
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