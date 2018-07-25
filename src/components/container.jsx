import react from "react"

const Container = ({ children }) => (
  <div
    className="Container-Component"
    css={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: `42rem`,
      marginBottom: 0,
      backgroundColor: `#FFFFFF`,
    }}>
    {children}
  </div>
)

export default ({ children }) => <Container>{children}</Container>
