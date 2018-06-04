import React from "react"

export default ({ data })=> {
    console.log(data)
    return (
      <div>
          <h1>Index</h1>
          <table>
              <thead>
                  <tr>
                      <th>Path</th>
                      <th>Date/Time</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allFile.edges.map(({ node }, index) =>
                    <tr key={index}>
                    <td>
                        {node.relativePath}
                     </td>
                     <td>
                        {node.ctime}
                     </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export const query = graphql`
  query MyFilesQuery {
      allFile{
          edges {
              node {
                  name
                  ctime
                  relativePath
                  sourceInstanceName
                  birthTime(fromNow: true)
              }
          }
      }
  }
`