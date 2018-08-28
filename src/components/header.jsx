import React from "react"
import Link from "gatsby-link"

/*
**Set navbar to float left and then use the left-sidebar as a right sidebar instead 
using the headers of the document to fully integrate the Microsoft look         */
//Should be a Functional Component that is reusable on all pages

const Header = props => (
  <nav
    className="navbar navbar-inverse navbar-fixed-top"
    css={{
      top: `0px`,
      borderBottom: `2px solid #BBB`,
      backgroundColor: `green`,
      width: `100%`,
    }}>
    <div
      className="navbar-header"
      css={{
        display: `inline`,
        color: `snow`,
        marginLeft: `2rem`,
        fontSize: `28`,
      }}>
      <b>
        <Link to="/" css={{ color: `snow` }}>
          Patrick Powell
        </Link>
      </b>
    </div>
    <ul className="nav navbar-nav" css={{ listStyle: `none` }}>
      <li>
        <a
          href="/resources/"
          css={{ float: `right`, marginRight: `1rem`, color: `snow` }}>
          Links
        </a>
      </li>
      <li>
        <a
          href="/about/"
          css={{ float: `right`, marginRight: `1rem`, color: `snow` }}>
          About
        </a>
      </li>
      <li>
        <a
          href="/directory/"
          css={{ float: `right`, marginRight: `1rem`, color: `snow` }}>
          Pages
        </a>
      </li>
      <li>
        <a
          href="/"
          css={{ float: `right`, marginRight: `1rem`, color: `snow` }}>
          Blog
        </a>
      </li>
    </ul>
    <p css={{ color: `snow`, marginLeft: "2rem", display: `block` }}>
      Financial Analyst | Business Intelligence
    </p>
  </nav>
)

export default Header
