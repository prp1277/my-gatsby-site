import React from "react";
import Link from "gatsby-link"

import { rhythm } from "../utils/typography";
import Container from "../components/container";

//This is essentially the "app"
export default ({ data }) => {
  console.log(data);
  return (
    <Container>
    <h1 textAlign={"center"}>Welcome To My Website!
    </h1>
      <h3>{data.allMarkdownRemark.totalCount}  Posts and Counting
      </h3>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug} css={{ color: `inherit` }}>
          <h2 marginBottom={rhythm(1 / 4)}>{node.frontmatter.title}{" "}
            <span color="#BBB">— {node.frontmatter.date}</span>
            </h2>
          <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
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