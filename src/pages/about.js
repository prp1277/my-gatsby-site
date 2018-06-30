import React from "react";
import Link from "gatsby-link"

export default ({ data }) => 
  <div className="container" style={{  
    display: "block",
    maxWidth: `49rem`,
    color: `inherit`,
    marginLeft: `auto`,
    marginRight: `auto`,
    padding: `1.5rem 1.125rem`,
    paddingTop: `1.5rem`}}>
    <h1 style={{ textAlign: `center` }}>About  {data.site.siteMetadata.author}</h1>
     <p>
       I'm originally from Omaha, NE, went to Missouri State University in Springfield, MO and moved to Kansas City after graduating in December 2015.
     </p>
        <h2 style={{ textAlign: `center` }}>Website Details
        </h2>
          <p>
          I'm hosting the content on Github Pages, using Gatsby to compile everything and Netlify for continuous integration. 
          It's all a little more complicated than I'd planned, but I've learned a lot along the way. 
          There's still a lot more I have to learn (images are pretty high on that list), but that will come in time.</p>
          <h2 style={{ textAlign: `center` }}>What Makes It Work?</h2>
          <p>
          I'm glad you asked! I've been slowly finding out through trial-and-(mostly)-error.</p>
          <ul>
            <p>Framework: React.js</p>
            <p>Static Site Generator: Gatsby</p>
            <p>Languages: JavaScript, Markdown, CSS (via Glamor)</p>
            <p>Hosting / Continual Integration: Netlify</p>
            <p>IDE: VSCode</p>
            </ul>
  </div>

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