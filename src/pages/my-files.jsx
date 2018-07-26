import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"
import Link from "gatsby-link"

export default ({ data }) => {
  console.log(data)
  return (
    <div className="My-Files-Content">
      <Header />
      <Container>
        <h1 css={{ textAlign: `center` }}>Index</h1>
        <table>
          <thead>
            <tr>
              <th css={{ textAlign: `center` }}>Relative Path</th>
              <th css={{ textAlign: `center` }}>Static Location</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td css={{ textAlign: `center` }}>./{node.relativePath}</td>
                <td css={{ textAlign: `center` }}>
                  https://prp1277.github.io{node.publicURL}
                </td>
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
          relativePath
          publicURL
        }
      }
    }
  }
`
