import React from "react";

/* export default ({ data })=> {
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
          <h1>Plugins
          </h1>
              <table>
                  <thead>
                      <tr>
                          <th>Name</th>
                      </tr>
                  </thead>
                  <tbody>{data.allSitePlugin.edges.map(({ node }, index) =>
                      <tr key = {index}>
                      <td> {node.name} </td>
                      </tr>
                    )}
                  </tbody>
              </table>
      </div>
    )
}

export const query = graphql`
query MyPluginsQuery {
    allSitePlugin {
      edges {
        node {
          name
        }
      }
    }
  }
` */

export default ({ data })=> {
  console.log(data)
  return (
    <div className="table-container" style={{  
      display: "block",
      maxWidth: `42rem`,
      color: `inherit`,
      marginLeft: `auto`,
      marginRight: `auto`,
      padding: `1.5rem 1.125rem`,
      paddingTop: `1.5rem`}}>
      <h1 style={{ textAlign: `center` }}>Paths</h1>
      <table>
              <thead>
                  <tr>
                      <th>Local Folder Name</th>
                      <th>Relative Path</th>
                    </tr>
                </thead>
                <tbody>{data.allFile.edges.map(({ node }, index) =>
                    <tr key={index}>
                      <td>{node.relativePath}</td>
                      <td>{node.publicURL}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export const query = graphql`
query PathMapping {
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