import React from "react";
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data })=> {
    console.log(data)
    return (
        <Container>
          <Header />
          <h1>Index</h1>
          <table>
              <thead>
                  <tr>
                      <th>Public URL</th>
                      <th>Local Folder</th>
                      <th>Created</th>
                    </tr>
                </thead>
                <tbody>{data.allFile.edges.map(({ node }, index) =>
                    <tr key={index}>
                      <td>https://prp1277.github.io{node.publicURL}</td>
                      <td>{node.sourceInstanceName}</td>
                      <td>{node.birthTime}</td>
                    </tr>
                    )}
                </tbody>
            </table>
            <Footer />
        </Container>
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
        relativePath
        publicURL
      }
    }
  }
}
`