import React from "react";
import Wrapper from "../components/wrapper"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data })=> {
    console.log(data)
    return (
        <Wrapper>
          <Header />
          <div className="Content" css={{ height: `auto`, marginLeft:`auto`, marginRight: `auto` , maxWidth: `42rem`, textAlign: `center` }}>
          <h1>Index</h1>
          <table>
              <thead>
                  <tr>
                      <th style={{ textAlign: `center` }}>Public URL</th>
                    </tr>
                </thead>
                <tbody>{data.allFile.edges.map(({ node }, index) =>
                    <tr key={index}>
                      <td>https://prp1277.github.io{node.publicURL}</td>
                    </tr>
                    )}
                </tbody>
            </table></div>
            <Footer />
        </Wrapper>
    )
}

export const query = graphql`
query MyFilesQuery {
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