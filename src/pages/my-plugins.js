import React from "react";
import Link from "gatsby-link";
import Container from "../components/container"

export default ({ data })=> {
    console.log(data)
    return (
      <Container>
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
      </Container>
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