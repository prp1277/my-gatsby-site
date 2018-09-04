import React from "react";
import Container from "../components/container";
require("prismjs/themes/prism-okaidia.css");
require("../favicon.ico");

/**
 * Themes from: https://github.com/PrismJS/prism/tree/1d5047df37aacc900f8270b1c6215028f6988eb1/themes
 * require("prismjs/themes/prism-coy.css");  require("prismjs/themes/prism-dark.css");  require("prismjs/themes/prism-funky.css"); require("prismjs/themes/prism-okaidia.css");  require("prismjs/themes/prism-solarizedlight.css"); require("prismjs/themes/prism-tomorrow.css"); require("prismjs/themes/prism-twilight.css"); require("prismjs/themes/prism-prism.css");
 */

export default ({ data }) => {
  return (
    <div className="Main">
      <Container className="Index-Page">
        <h1 className="Page-Title">Blog Posts</h1>

        <div className="Card-Container">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3 className="Blog-Post-Title">
                <a href={node.fields.slug}>{node.frontmatter.title}</a>
              </h3>
              <p>
                <b>-Updated: {node.frontmatter.date}</b>
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

/** Google Analytics Script:
 * <!-- Global site tag (gtag.js) - Google Analytics -->
 * <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115800548-1"></script>
 * <script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-115800548-1');</script>
 *
 */
