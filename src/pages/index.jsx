import React from "react";
import Link from "gatsby-link";
import Header from "../components/header";
import Footer from "../components/footer";
import Wrapper from "../components/wrapper"
require("prismjs/themes/prism-dark.css");

/* Code themes from https://prism.js.com
/* Copy and paste from below over line 6
/* Make sure the {} are removed before saving
/* to change the code theme */

/*
require("prismjs/themes/prism-{coy}.css");
require("prismjs/themes/prism-{dark}.css");
require("prismjs/themes/prism-{funky}.css");
require("prismjs/themes/prism-{okaidia}.css");
require("prismjs/themes/prism-{solarizedlight}.css");
require("prismjs/themes/prism-{tomorrow}.css");
require("prismjs/themes/prism-{twilight}.css");
require("prismjs/themes/prism-{prism}.css");
*/

import { rhythm } from "../utils/typography";

/* This is essentially the "app"
/* It's also the only page 
/* actually working (locally)*/

export default ({ data }) => {
  console.log(data);
  return (
    <Wrapper className="landing-page">
      <Header />
      <h1 css={{ 
        textAlign: `center`, maxWidth: `42rem`, marginLeft: `auto`, 
        marginRight: `auto`, display: `block`, fontStyle: `calibri`
       }}>Posts
       </h1>
       {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="card" key={node.id} 
        css={{ 
          textAlign: `center`, fontStyle: "calibri" , maxWidth: `42rem`, marginLeft: `auto`, 
          marginRight: `auto`, borderBottom: `2px solid #BBB`,
          marginTop: `auto`, marginBottom:`auto`, display: `block`, 
          backgroundColor: `#eaeaea`, borderRight: `2px solid #BBB`,
          borderLeft: `2px solid #BBB`, backgroundColor: `#f4f4f4`
          }}>
          <Link to={node.fields.slug}>
            <h2 css={{ marginBottom: `1rem`, color:`#FFFFFF`, 
            backgroundColor:`#005ba1` 
            }}>{node.frontmatter.title}
              <small>- {node.frontmatter.date}</small></h2>
          </Link>
            <p>{node.excerpt}</p>
        </div>
      )
    )
  }
      <Footer />
      </Wrapper>
  );
};

/* This is the query that creates the feedr
/* TODO - Create card component to mimic  
/*          a reddit / outlook display */

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (sort:
    {fields: [frontmatter___date], order: DESC})
    {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: " MMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;