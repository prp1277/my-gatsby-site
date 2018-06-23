import React from "react";
import Link from "gatsby-link"
import Container from "../components/container";

export default ({ data }) => 
  <Container>
    <h1>About  {data.site.siteMetadata.author}</h1>
     <h2>Fake News! Explained</h2>
     <p>I was walking though the <a href="https://www.gatsbyjs.org/tutorial/part-three/#our-first-layout-component">Gatsbyjs Tutorial </a> 
     and was instructed to create a fake Gatsby site. I couldn't help but to read fake Gatsby site in Donald Trump's voice, 
     so I thought I'd just keep that as a placeholder until this is ready to publish.</p>
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