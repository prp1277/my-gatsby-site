import React from "react";
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Container>
    <Header />
      <h1 style={{ textAlign: `center` }}>{post.frontmatter.title}</h1>
      <p style={{ textAlign: `center` }}>Posted - {post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    <Footer />
    </Container>
  )
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

/* 
query{
  allMarkdownRemark{
    edges{
      node{
        id
        htmlAst //HTML As Text
        frontmatter{
          title
          path
          tags
          date
        }
      }
    }
  }
}
*/