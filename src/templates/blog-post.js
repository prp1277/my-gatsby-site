import React from "react";
import Container from "../components/container";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="BLOG-POST-TEMPLATE">
      <Container>
        <h1 className="Blog-Post-Title">{post.frontmatter.title}</h1>
        <p>
          <b>Updated -</b> {post.frontmatter.date}
        </p>
        <div
          className="mdContent"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Container>
    </div>
  );
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
