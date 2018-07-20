import React from "react";
import Wrapper from "../components/wrapper"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Wrapper>
    <Header />
      <h1 css={{ textAlign: `center`, marginLeft:`auto`, marginRight: `auto` , maxWidth: `42rem` }}>{post.frontmatter.title}</h1>
      <p css={{ textAlign: `center` }}>Posted - {post.frontmatter.date}</p>
      <p css={{ textAlign: `center` }}>Tags {post.frontmatter.tags}</p>
      <div className="mdContent" css={{ marginLeft:`auto`, marginRight: `auto` , maxWidth: `42rem` }} dangerouslySetInnerHTML={{ __html: post.html }} />
    <Footer />
    </Wrapper>
  )
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;