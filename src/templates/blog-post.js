import React from "react";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="blog-post" style={{  
      display: "block",
      width: `95%`,
      color: `inherit`
  }}>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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