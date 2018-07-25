import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => {
  console.log(data)
  return (
    <div className="My-Files-Content">
      <Header />
      <Container>
        <h1>Index</h1>
        <table>
          <thead>
            <tr>
              <th css={{ textAlign: `center` }}>Source Folder</th>
              <th css={{ textAlign: `center` }}>File Name</th>
              <th css={{ textAlign: `center` }}>Public URL</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td css={{ textAlign: `center` }}>
                  .{node.sourceInstanceName}
                </td>
                <td css={{ textAlign: `center` }}>.{node.base}</td>
                <td css={{ textAlign: `center` }}>.{node.publicURL}</td>
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
  query MyFilesQuery {
    site {
      siteMetadata {
        siteURL
      }
    }
    allFile {
      edges {
        node {
          sourceInstanceName
          base
          publicURL
        }
      }
    }
  }
`
