import React from "react";

const Container = ({ children }) => (
  <div css={{ margin: `1rem auto`, maxWidth:750 }}>
  {children}
  </div>
);

const User = props => 
<div
 css={{
  display: `flex`,
  alignItems: `center`,
  margin: `0 auto 12px auto`,
  "&:last-child": { marginBottom: 0 }
}}
>
 <img 
 src={props.avatar}
 css={{ flex: `0 0 96px`, width: 96, height: 96, margin: 0 }}
 alt=""
 />

<div css={{ flex: 1, marginLeft: 18, padding: 12 }}>
 <h1 css={{ margin: `0 0 12px 0`, padding: 0 }}>
  {props.username}
  </h1>
  <p css={{ margin: 0 }}>
   {props.excerpt}
   </p>
   </div>
</div>

export default ({ data }) => 
  <div>
    <h1>
        About {data.site.siteMetadata.title}
        </h1>
    <p>
      This is the paragraph value.
    </p>
  </div>

export const query = graphql`
  query AboutQuery {
      site{
          siteMetadata {
              title
          }
      }
  }
`