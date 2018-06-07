import React from "react";

export default ({ data }) => 
  <div>
    <h1>
    About  {data.site.siteMetadata.title}
     </h1>
     <h3>
       Hi, my name is Patrick Powell and I wish I knew how to put a picture here!
     </h3>
     <a href="https://prp1277.github.io/img/LinkedIn.jpg"><img src="/img/LinkedIn.jpg" alt="LinkedIn Picture"></img></a>
     <p>
       This is version 2.0 of my personal website. Things didn't go great on version 1.0 using Jekyll and Github pages, 
       so I figured I'd further complicate things and learn another language to make this one work a little bit better. 
       Maybe it will, maybe it won't. The only way we'll know is if I actually post some content and share it instead of just writing and deleting
       pages over and over again.</p>
    <p> 
       My plan is to learn how the "JAMStack" architecture works because that seems to be the way web development is going. 
       It doesn't really make a lot of sense to me to learn the intimate details of a bunch of different languages all at once
       when I can easily learn how to write and format Markdown for content and React for just about everything else. 
       Taking the server-side components out of the mix should help to simplify things (me thinks), but I could also be
       ass-backwards on that mentality.
       </p>
       <p>
         Anyway, I'm hosting the content on Github, using Gatsby to compile everything and Netlify for continuous integration. 
         It's all a little mmore complicated than I'd planned, but I've learned a lot along the way. There's still a lot more I have 
         to learn, but that will come in time.
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