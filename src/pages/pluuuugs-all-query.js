import react from "React"

export default ({ data })=> {
    console.log(data)
    return (
      <div>
          <h1>Plugins Installed</h1>
          <table>
              <thead>
                  <tr>
                      <th>Node</th>
                      <th>Plugin</th>
                    </tr>
                </thead>
                <tbody>{data.allSitePlugin.edges.map(({ node }, index) =>
                    <tr key={index}>
                      <td>{node}</td>
                      <td>{node.id}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export const query = graphql`
query pluuuugs {
  allSitePlugin {
    edges {
      node {
        id
      }
    }
  }
}
`