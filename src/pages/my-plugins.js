import React from "react";

export default ({ data })=> {
    console.log(data)
    return (
      <div>
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
`
/*
dev-404-page
component-page-creator
component-layout-creator
internal-data-bridge
prod-404
query-runner
gatsby-plugin-offline
gatsby-transformer-sharp
gastby-transformer-remark
gatsby-plugin-sharp
gatsby-remark-responsive-iframe
gatsby-source-filesystem
gatsby-plugin-glamor
gatsby-plugin-typography
default-site-plugin
*/