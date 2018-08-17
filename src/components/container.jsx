import react from "react"
import Header from "./header"
import Footer from "./footer"

const Container = ({ children }) => (
  <div className="Container-Component"
    css={{
      maxWidth: `100%`,
      marginBottom: 0,
      backgroundColor: `#FFFFFF`,
    }}>
    <Header />
    <div className="Container-Main"
      css={{
        maxWidth: `42rem`,
        marginLeft: `auto`,
        marginRight: `auto`,
      }}>
      {children}
    </div>
    <Footer />
  </div>
)

export default ({ children }) => <Container>{children}<br /></Container>
