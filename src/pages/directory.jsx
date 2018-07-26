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
      <Header />
      <Container className="Directory-Page">
        <h1>Directory</h1>
        <table>
          <thead>
            <tr>
              <th css={{ textAlign: `center` }}>Relative Dir </th>
              <th css={{ textAlign: `center` }}>Source Name </th>
              <th css={{ textAlign: `center` }}>Base </th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td css={{ textAlign: `center` }}>.{node.relativeDirectory}</td>
                <td css={{ textAlign: `center` }}>
                  .{node.sourceInstanceName}
                </td>
                <td css={{ textAlign: `center` }}>.{node.base}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query DirectoryQuery {
    allFile {
      edges {
        node {
          relativeDirectory
          sourceInstanceName
          base
          name
        }
      }
    }
  }
`
