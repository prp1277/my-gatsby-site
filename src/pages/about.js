import React from "react";

export default ({ data }) => 
  <div>
    <h1>
    About  {data.site.siteMetadata.title}
     </h1>
     <p>
       This is version 2.0 of my personal website using Gatsby.js and React. Things didn't go great on version 1.0 using Jekyll and Github pages, 
       so I figured I'd further complicate things and learn another language to make this one work a little bit better. 
       Maybe it will, maybe it won't. The only way we'll know is if I actually post some content and share it instead of just writing and deleting
       pages over and over again.</p>
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