import React from "react"
import Container from "../components/container"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <Container >
        <div className="Directory-Page">
          <h1>Directory</h1>
          <table>
            <thead>
              <tr>
                <th css={{ textAlign: `center` }}>
                  Links ({data.allSitePage.totalCount} Total)
              </th>
                <th css={{ textAlign: `center` }}>
                  jsonName
              </th>
              </tr>
            </thead>
            <tbody>
              {data.allSitePage.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td css={{ textAlign: `left` }}>
                    {/*
                [Link to node.path](node.path)
                */}
                    <a href={node.path}>{node.path}</a>
                  </td>
                  <td>
                    {node.jsonName}
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
          jsonName
        }
      }
    }
  }
`
