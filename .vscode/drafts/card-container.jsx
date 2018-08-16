import react from "react"

const CardContainer = ({ children }) => (
    <div className="Card-Container">
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div
                className="card"
                key={node.id}
                css={{
                    display: `block`,
                    fontStyle: `Calibri`,
                    textAlign: `center`,
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    marginTop: `auto`,
                    marginBottom: `auto`,
                    borderBottom: `2px solid #BBB`,
                    borderRight: `2px solid #BBB`,
                    borderLeft: `2px solid #BBB`,
                    backgroundColor: `#eaeaea`,
                }}>
                <Link
                    className="Blog-Post-Links"
                    to={node.fields.slug}>
                    <h2
                        className="Blog-Post-Title"
                        css={{
                            borderBottom: `2px solid #BBB`,
                            color: `#FFFFFF`,
                            backgroundColor: `#005ba1`,
                        }}>
                        {node.frontmatter.title}
                    </h2>
                </Link>

                <p className="Post-Date"
                    css={{ marginTop: `auto`, marginRight: `1rem`, marginLeft: `1rem`, textAlign: `center` }}><b>Updated: {node.frontmatter.date}</b></p>

                <p
                    className="Excerpt"
                    css={{ marginTop: `auto`, marginRight: `1rem`, marginLeft: `1rem`, textAlign: `center` }}>{node.excerpt}
                    {/* The rest is the actual content inside the card */}
                </p>

            </div>
            //This is the end of the card
        ))}
        {children}
    </div>
)


export default ({ children }) => <CardContainer>{children}<br /></CardContainer>