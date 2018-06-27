import React from "react";
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="blog-post" style={{  
      display: "block",
      maxWidth: `42rem`,
      color: `inherit`,
      marginLeft: `auto`,
      marginRight: `auto`,
      padding: `1.5rem 1.125rem`,
      paddingTop: `1.5rem`}}>
      <h1 style={{ textAlign: `center` }}>{post.frontmatter.title}</h1>
      <p style={{ textAlign: `center` }}>Posted - {post.frontmatter.date}</p>
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