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
              <th css={{ textAlign: `center` }}>Source</th>
              <th css={{ textAlign: `center` }}>Path</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td css={{ textAlign: `right` }}>/{node.sourceInstanceName}/</td>
                <td css={{ textAlign: `left` }}>
                  {node.relativePath}
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
          sourceInstanceName
          relativePath
          publicURL
          internal {
            type
            description
          }
        }
      }
    }
  }
`
