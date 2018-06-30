import React from "react";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="blog-post" style={{  
      display: "block",
      maxWidth: `42rem`,
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