import React from "react";

export default ({ data }) => {
    console.log(data)
    return (
        <div>
            <h1>FileSources</h1>
            <table>
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Relative Dir</th>
                        <th>Relative Path</th>
                        <th>File Name</th>
                    </tr>
                </thead>
            <tbody>{data.allFile.edges.map(({ node }, index) =>
            <tr key={index}>
            <td>{node.sourceInstanceName}</td>
            <td>{node.relativeDirectory}</td>
            <td>{node.relativePath}</td>
            <td>{node.id}</td>
            </tr>
        )}
            </tbody>
            </table>
        </div>
    )
}

export const query = graphql`
  query IdentifyFiles {
      allFile {
          edges {
              node {
                  sourceInstanceName
                  relativeDirectory
                  relativePath
                  id
              }
          }
      }
  }
`