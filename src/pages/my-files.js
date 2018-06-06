import React from "react"

export default ({ data })=> {
    console.log(data)
    return (
      <div>
          <h1>Index</h1>
          <table>
              <thead>
                  <tr>
                      <th>Public URL</th>
                      <th>Relative Path</th>
                      <th>Relative Directory</th>
                      <th>Name</th>
                      <th>Source</th>
                      <th>Created</th>
                    </tr>
                </thead>
                <tbody>{data.allFile.edges.map(({ node }, index) =>
                    <tr key={index}>
                      <td>https://prp1277.github.io{node.publicURL}</td>
                      <td>{node.relativePath}</td>
                      <td>{node.relativeDirectory}</td>
                      <td>{node.base}</td>
                      <td>{node.sourceInstanceName}</td>
                      <td>{node.birthTime}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export const query = graphql`
  query MyFilesQuery {
      allFile {
          edges {
              node {
                  publicURL
                  relativePath
                  relativeDirectory
                  base
                  sourceInstanceName
                  birthTime(fromNow: true)
              }
          }
      }
  }
`