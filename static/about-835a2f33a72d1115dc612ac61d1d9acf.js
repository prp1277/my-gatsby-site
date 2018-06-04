import React from "react";

export default ({ data }) => 
  <div>
    <h1>About 
    {data.site.siteMetadata.title}</h1>
       <p>Creator 
       {data.site.siteMetadata.author}</p>
       <p>URL 
       {data.site.siteMetadata.siteURL}</p>
  </div>

export const query = graphql`
  query AboutQuery {
      site{
          siteMetadata {
              title
              author
          }
      }
  }
`