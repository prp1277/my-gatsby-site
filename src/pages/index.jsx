import React from "react";
import Container from "../components/container";
require("prismjs/themes/prism-okaidia.css");

/**
 * Themes from: https://github.com/PrismJS/prism/tree/1d5047df37aacc900f8270b1c6215028f6988eb1/themes
 * require("prismjs/themes/prism-coy.css");  require("prismjs/themes/prism-dark.css");  require("prismjs/themes/prism-funky.css"); require("prismjs/themes/prism-okaidia.css");  require("prismjs/themes/prism-solarizedlight.css"); require("prismjs/themes/prism-tomorrow.css"); require("prismjs/themes/prism-twilight.css"); require("prismjs/themes/prism-prism.css");
 */

export default ({ data }) => {
  return (
    <Container>
      <h1
        className="Page-Title"
        style={{
          display: `block`,
          textAlign: `center`,
          marginLeft: `auto`,
          marginRight: `auto`,
        }}>
        Blog Posts
      </h1>

      <div className="Card-Container">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div
            className="Idv-Card"
            key={node.id}
            style={{
              display: `block`,
              textAlign: `center`,
              textDecoration: `none`,
              border: `2px solid #000`,
              margin: `10px`,
            }}>
            <h2
              className="Blog-Post-Title"
              style={{
                padding: `2px`,
                backgroundColor: `#4472c4`,
                borderBottom: `1px solid #000`,
                textAlign: `center`,
                margin: `0 auto`,
              }}>
              <a href={node.fields.slug} style={{ color: `#000` }}>
                {node.frontmatter.title}
              </a>
              <br />
              <small>{node.frontmatter.date}</small>
            </h2>
            <p
              style={{
                backgroundColor: `#ffffff`,
                padding: `2px`,
                marginBottom: `0`,
              }}>
              {node.excerpt}
            </p>
          </div>
        ))}
      </div>
    </Container>
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
          excerpt(pruneLength: 150)
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
