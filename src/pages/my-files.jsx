import React from "react"
import Container from "../components/container"

export default ({ data }) => {
  console.log(data)
  return (
    <div className="My-Files-Content">

      <Container>
        <h1 className="Page-Title"
          css={{ textAlign: `center` }}
        >Index
        </h1>

        <table className="Files-Table">
          <thead>
            <tr>
              <th className="Col-1"
                css={{ textAlign: `center` }}
              >Source
              </th>
              <th className="Col-2"
                css={{ textAlign: `center` }}
              >Path
               </th>
            </tr>
          </thead>

          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>

                <td className="Col-1-Graphql"
                  css={{ textAlign: `right` }}
                >/{node.sourceInstanceName}/
                 </td>

                <td className="Col-2-Graphql"
                  css={{ textAlign: `left` }}
                >{node.relativePath}
                </td>

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
    allFile {
      edges {
        node {
          sourceInstanceName
          relativePath
          publicURL
        }
      }
    }
  }
`
