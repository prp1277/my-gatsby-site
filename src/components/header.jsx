import React from "react";

/**
 *
 */
const Header = (props) => (
  <div
    className="navbar-header"
    style={{
      backgroundColor: `#056303`,
      borderBottom: `2px solid #BBB`,
      marginBottom: `1.5rem`,
      top: `0px`,
    }}>
    <h2>
      <a
        href="/"
        style={{
          display: `inline-block`,
          float: `left`,
          marginLeft: `2rem`,
          marginTop: `1rem`,
          color: `#ffffff`,
        }}>
        Patrick Powell
      </a>
    </h2>
    <br />

    <ul
      className="nav navbar-nav"
      style={{
        listStyle: `none`,
        margin: 0,
        padding: 0,
        overflow: `hidden`,
      }}>
      <li style={{ float: `right`, marginRight: `2rem` }}>
        <a
          href="/resources/"
          style={{
            display: `inline-block`,
            padding: `8px`,
            color: `#ffffff`,
          }}>
          Links
        </a>
      </li>
      <li style={{ float: `right` }}>
        <a
          href="/about/"
          style={{
            display: `inline-block`,
            padding: `8px`,
            color: `#ffffff`,
          }}>
          About
        </a>
      </li>
      <li style={{ float: `right` }}>
        <a
          href="/directory/"
          style={{
            display: `inline-block`,
            padding: `8px`,
            color: `#ffffff`,
          }}>
          Pages
        </a>
      </li>
      <li style={{ float: `right` }}>
        <a
          href="/"
          style={{
            display: `inline-block`,
            padding: `8px`,
            color: `#ffffff`,
          }}>
          Blog
        </a>
      </li>
    </ul>
  </div>
);

export default Header;
