import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Wrapper from "../components/wrapper"

export default ({ data }) => 
    <div>
      <Wrapper>
      <Header />
      <center style={{ marginLeft:`auto`, marginRight:`auto`, maxWidth:`42rem` }}><h1>About  Me</h1>
      <img src="https://prp1277.github.io/static/LinkedIn-dfbd71c0fae03cd7d16ce2433df200e9.jpg" alt="Profile" />
        <p>I'm originally from Omaha, NE, went to Missouri State University in Springfield, MO and moved to Kansas City after graduating in December 2015.</p></center>
      <Footer />
      </Wrapper>
     </div>


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