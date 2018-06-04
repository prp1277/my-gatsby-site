import react from "React"

export default ({ data })=> {
    console.log(data)
    return (
        <div>
            <h1>Site MetaData
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>author</th>
                        <th>site url</th>
                    </tr>
                </thead>
                <tbody>
                    {data.site.siteMetadata.map(({ node }, index) =>
                <tr key={index}>
                  <td>
                      {node.title}
                  </td>
                  <td>
                      {node.author}
                  </td>
                  <td>
                      {node.siteURL}
                  </td>
                </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export const query = graphql`
 query MetaDataQuery {
  site{
      siteMetadata {
          title
          author
          siteURL
        }
    }
 }
`