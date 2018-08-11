import React from "react"
import Container from "../components/container"

export default ({ data }) => {
  console.log(data)
  return (
    <div className="My-Files-Content">

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
                <td css={{ textAlign: `left` }}>./{node.relativePath}</td>
                <td css={{ textAlign: `left` }}>
                  {node.publicURL}
                </td>
                {/* http://pat-facts.netlify.com/docs/mdutilities/sample-md-file/ */}
              </tr>
            ))}
          </tbody>
        </table>
      </Container>

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
