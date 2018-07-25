import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => {
  console.log(data)
  return (
    <div className="About-Me-Content">
      <Header />
      <Container>
        <h1 css={{ textAlign: `center` }}>About Me</h1>
        <center>
          <img
            src="https://prp1277.github.io/static/LinkedIn-dfbd71c0fae03cd7d16ce2433df200e9.jpg"
            alt="Profile"
            height="301"
            width="301"
          />
        </center>
        <p>
          I'm originally from Omaha, NE, went to Missouri State University in
          Springfield, MO and moved to Kansas City after graduating in December
          2015.
        </p>
      </Container>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query MyImagesQuery {
    allImageSharp {
      edges {
        node {
          original {
            width
            height
            src
          }
          resolutions {
            width
            height
          }
        }
      }
    }
  }
`
