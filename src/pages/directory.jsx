import React from "react"
import Header from "../components/header"

export default ({ data }) => {
  console.log(data)
  return (
    <div className="Directory-Main">
      <Header />

      <div >
        <p className="Page-List" css={{ float: "left", margin: `1rem`, border: `2px #000000` }}><b>Page Links: </b> </p>
      </div>

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
              </th></tr>
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
    </div>
  );
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
