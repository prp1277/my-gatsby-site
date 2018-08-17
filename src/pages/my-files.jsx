import React from "react"
import Container from "../components/container"

export default ({ data }) => {
  console.log(data)
  return (
    <div className="My-Files-Content">

      <Container>
        <h1 className="Page-Title"
          css={{ textAlign: `center` }}
        >File References
        </h1>

        <h2>All Files Query</h2>

        <table className="Files-Table">
          <thead>
            <tr>
              <th className="Col-1"
                css={{ textAlign: `center` }}
              >Source/Path
              </th>
              <th className="Col-2"
                css={{ textAlign: `center` }}
              >Static URL
               </th>
            </tr>
          </thead>

          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>

                <td className="Col-1-Graphql"
                  css={{ textAlign: `left` }}
                >/{node.sourceInstanceName}/{node.relativePath}
                </td>

                <td className="Col-2-Graphql"
                  css={{ textAlign: `left` }}
                >{node.publicURL}
                </td>

              </tr>
            ))}
          </tbody>
        </table><br />

        <h2>All Image Sharp Query</h2>

        <table className="Images-Table">
          <thead>
            <tr>
              <th>Image Name</th>
              <th>Sizes</th>
            </tr>
          </thead>
          <tbody className="Image-Details">
            {data.allImageSharp.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.sizes.originalName}</td>
                <td>{node.sizes.sizes}</td>
              </tr>
            )
            )}
          </tbody>
        </table>
      </Container>

    </div>
  )
}

export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
        node {
          sourceInstanceName
          relativePath
          publicURL
        }
      }
    }
    allImageSharp{
    edges{
      node{
        sizes{
          originalName
          sizes
          aspectRatio
        }
      }
    }
  }
}
`
