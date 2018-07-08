import React from "react";
import Wrapper from "../components/wrapper"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => 
  <Wrapper>
    <Header />
    <div className="Content" css={{ marginLeft:`auto`, marginRight: `auto` , maxWidth: `42rem` }}>
    <h1 css={{ textAlign: `center` }}
    >About  {data.site.siteMetadata.author}
    </h1>
     <p>
       I'm originally from Omaha, NE, went to Missouri State University in Springfield, MO and moved to Kansas City after graduating in December 2015.
     </p>
        <h1 css={{ textAlign: `center` }}>Website Details
        </h1>
          <p>
            I'm hosting the content on Github Pages, using Gatsby to compile everything and Netlify for continuous integration. 
            It's all a little more complicated than I'd planned, but I've learned a lot along the way. 
            There's still a lot more I have to learn (images are pretty high on that list), but that will come in time.
            </p>
          <h1 css={{ textAlign: `center`}}>
             What Makes It Work?
             </h1>
          <p>
          I'm glad you asked! I've been slowly finding out through trial-and-(mostly)-error.
          </p>
          <ul>
            <p>Framework: React.js</p>
            <p>Static Site Generator: Gatsby</p>
            <p>Languages: JavaScript, Markdown, CSS (via Glamor)</p>
            <p>Hosting / Continual Integration: Netlify</p>
            <p>IDE: VSCode</p>
            </ul>
            </div>
    <Footer />
  </Wrapper>

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

/*
import Footer from "../components/footer"

export default ({ data }) => 
  <Wrapper>
    <Header />
    <div className="Content" css={{ marginLeft:`auto`, marginRight: `auto` , maxWidth: `42rem` }}>
    <h1 css={{ textAlign: `center` }}
    >About  {data.site.siteMetadata.author}

*/
