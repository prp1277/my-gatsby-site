import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Footer from "../components/footer"

export default ({ data }) => {
  console.log(data)
  return (
    <div className="My-Tags-Content">
      
      <Container>
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
      </Container>
      
    </div>
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
