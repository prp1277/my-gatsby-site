import React from "react"
import Link from "gatsby-link"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"
require("prismjs/themes/prism-twilight.css")

export default ({ data }) => {
  console.log(data)
  return (
    <div className="Directory-Content">
      <Container >
        <div className="Directory-Page">
          <h1>Directory</h1>
          <table>
            <thead>
              <tr>
                <th css={{ textAlign: `center` }}>
                  Links ({data.allSitePage.totalCount} Total)
              </th>
              </tr>
            </thead>
            <tbody>
              {data.allSitePage.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td css={{ textAlign: `center` }}> {/*
                [Link to node.path](node.path)
                */}
                    <a href={node.path}>{node.path}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  )
}

export const query = graphql`
  query DirectoryQuery {
    allSitePage {
      totalCount
      edges {
        node {
          path
          id
        }
      }
    }
  }
`
