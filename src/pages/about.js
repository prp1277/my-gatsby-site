import React from "react";

export default ({ data }) => 
  <div>
    <h1>
    About  {data.site.siteMetadata.title}
     </h1>
     <p>
       This is version 2.0 of my personal website using Gatsby.js and React.
     </p>
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