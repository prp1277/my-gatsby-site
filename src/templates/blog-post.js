import React from "react";
import Wrapper from "../components/wrapper"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    /* 
       Wrapper - container, but easier to spell
       Header - Navbar and links
       h1 - Post Title
       p1 - Date
       p2 - Tags
       mdContent - graphql html output
       Footer - Footer Navbar and social media links 
    */
   
    <Wrapper>
    <Header />
      <h1 css={{ textAlign: `center`, marginLeft:`auto`, marginRight: `auto` , maxWidth: `42rem` }}>{post.frontmatter.title}</h1>
      <p css={{ textAlign: `center` }}><b>Updated -</b> {post.frontmatter.date}</p>
      <p css={{ textAlign: `center` }}><b>Tags - </b>{post.frontmatter.tags}</p>
      <div className="mdContent" css={{ marginLeft:`auto`, marginRight: `auto` , maxWidth: `42rem` }} dangerouslySetInnerHTML={{ __html: post.html }} />
      <center><p> Tags: {post.frontmatter.tags}</p></center>
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