import React from "react";

export default ({ data })=> {
    console.log(data)
    return (
        <div className="container" style={{  
            display: "block",
            maxWidth: `42rem`,
            color: `inherit`,
            marginLeft: `auto`,
            marginRight: `auto`,
            padding: `1.5rem 1.125rem`,
            paddingTop: `1.5rem`}}>
          <h1>Index</h1>
          <table>
              <thead>
                  <tr>
                      <th>Local Folder Name</th>
                      <th>Relative Path</th>
                      <th>Public URL</th>
                      <th>Created</th>
                    </tr>
                </thead>
                <tbody>{data.allFile.edges.map(({ node }, index) =>
                    <tr key={index}>
                      <td>{node.sourceInstanceName}</td>
                      <td>{node.relativePath}</td>
                      <td>https://prp1277.github.io{node.publicURL}</td>
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
                  sourceInstanceName
                  relativePath
                  publicURL
                  birthTime(fromNow: true)
              }
          }
      }
  }
`