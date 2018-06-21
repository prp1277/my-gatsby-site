import React from "react";
import Img from "gatsby-image"
import Container from "../components/container";

export default ({ data }) => 
  <Container>
    <h1>About  {data.site.siteMetadata.author}</h1>
     <h2>Version 2</h2>
        <p>
          I'm hosting the content on Github Pages, using Gatsby to compile everything and Netlify for continuous integration. 
          It's all a little more complicated than I'd planned, but I've learned a lot along the way. 
          There's still a lot more I have to learn (images are pretty high on that list), but that will come in time.</p>
  </Container>

export const query = graphql`
  query AboutQuery {
      site{
          siteMetadata {
              title
              author
              description
          }
      }
  }
`