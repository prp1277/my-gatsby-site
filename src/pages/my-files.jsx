import React from "react";
import Container from "../components/container";

export default ({ data }) => {
  console.log(data);
  return (
    <div className="My-Files-Content">
      <Container>
        <h1 className="Page-Title">File References</h1>

        <h2>All Files Query</h2>

        <table className="Files-Table">
          <thead>
            <tr>
              <th className="Col-1">Source/Path</th>
              <th className="Col-2">Static URL</th>
            </tr>
          </thead>

          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td className="Col-1-Graphql">
                  /{node.sourceInstanceName}/{node.relativePath}
                </td>

                <td className="Col-2-Graphql">{node.publicURL}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />

        <h2>All Image Sharp Query</h2>

        <table className="Images-Table">
          <thead>
            <tr>
              <th>img src=".."</th>
              <th>Sizes</th>
            </tr>
          </thead>
          <tbody className="Image-Details">
            {data.allImageSharp.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.original.src}</td>
                <td>{node.sizes.sizes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

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
    allImageSharp {
      edges {
        node {
          original {
            src
          }
          sizes {
            originalName
            sizes
            aspectRatio
          }
        }
      }
    }
  }
`;
