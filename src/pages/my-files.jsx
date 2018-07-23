import React from "react"
import Wrapper from "../components/wrapper"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => {
  console.log(data)
  return (
    <Wrapper>
      <Header />
      <div
        className="Content"
        css={{
          height: `auto`,
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: `42rem`,
          textAlign: `center`,
        }}>
        <h1>Index</h1>
        <table>
          <thead>
            <tr>
              <th css={{ textAlign: `center` }}>Source Folder</th>
              <th css={{ textAlign: `center` }}>File Name</th>
              <th css={{ textAlign: `center` }}>Public URL</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td css={{ textAlign: `center` }}>.{node.sourceInstanceName}</td>
                <td css={{ textAlign: `center` }}>.{node.base}</td>
                <td css={{ textAlign: `center` }}>.{node.publicURL}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
          sourceInstanceName
          base
          publicURL
        }
      }
    }
  }
`
