import React from "react";
import Img from "gatsby-image"
import Container from "../components/container";

export default ({ data }) => 
  <Container>
    <h1>
    About  {data.site.siteMetadata.author}</h1>
     <h3>
       Hi, I'm Patrick Powell and I'm learning how to create websites and apps using Javascript React.</h3>
        <p>
          This is version 2.0 of my personal website. Things didn't go great on version 1.0 using Jekyll and Github pages, 
          so I figured I'd further complicate things and learn another language to make this one work a little bit better.</p>
        <p>
          Maybe it will, maybe it won't. The only way we'll know is if I actually post some content and share it instead of just writing and deleting pages over and over again.</p>
        <p>
          My plan is to learn how the JAMStack architecture works because that seems to be the way web development is going. 
          The JAMStack framework involves using Javascript, APIs and Markdown to build simple but dynamic websites.</p>
        <p>   
          It doesn't really make a lot of sense to me to learn the intimate details of a bunch of different languages all at once 
          when I can easily learn how to write and format Markdown for content and React for just about everything else. </p>
        <p>
          Anyway, I'm hosting the content on Github, using Gatsby to compile everything and Netlify for continuous integration. 
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