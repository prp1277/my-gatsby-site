import React from "react"
import Container from "../components/container"


export default ({ data }) => {
  const post = data.markdownRemark
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
    <div className="BLOG-POST-TEMPLATE">

      <Container>
        <h1 className="Blog-Post-Title"
          css={{
            textAlign: `center`,
            marginLeft: `auto`,
            marginRight: `auto`,
          }}>
          {post.frontmatter.title}
        </h1>
        <p className="Last-Updated"
          css={{ textAlign: `center` }}>
          <b>Updated -</b> {post.frontmatter.date}
        </p>
        {/* Everything below this point is a transformed Markdown Doc */}
        <div
          className="mdContent"
          css={{ marginLeft: `auto`, marginRight: `auto`, maxWidth: `42rem` }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

      </Container>

    </div>
  )
}

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
`
