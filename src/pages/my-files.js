import React from "react";
import Link from "gatsby-link";
import Container from "../components/container"

export default ({ data })=> {
    console.log(data)
    return (
      <Container>
          <h1>Index</h1>
          <p>Here's something I don't understand... I have all these files but can't figure out how to get them all working.
              I don't think I have all my plugins and such working right. Also, the dimensions of this page aren't right.
          </p>
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
        </Container>
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