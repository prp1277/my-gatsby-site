import React from "react"
import Header from "../components/header"
import Wrapper from "../components/wrapper"
import Footer from "../components/footer"

export default ({ data }) => {
  console.log(data)
  return (
    <Wrapper>
      <Header />
      <div
        className="Content"
        css={{
          height: `auto`,
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: `42rem`,
          textAlign: `center`,
        }}
      >
        <table>
          <thead>
            <tr>
              <th style={{ textAlign: `center` }}>Tag</th>
              <th style={{ textAlign: `center` }}>Title</th>
            </tr>
          </thead>
          <tbody>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.frontmatter.tags}</td>
                <td>{node.frontmatter.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </Wrapper>
  )
}

export const query = graphql`
  query AllTagsQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            tags
          }
        }
      }
    }
  }
`
