import React from "react";

/**
 *
 */
const Header = props => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="navbar-header">
      <b>
        <a href="/">Patrick Powell</a>
      </b>
    </div>
    <ul className="nav navbar-nav">
      <li>
        <a href="/resources/">Links</a>
      </li>
      <li>
        <a href="/about/">About</a>
      </li>
      <li>
        <a href="/directory/">Pages</a>
      </li>
      <li>
        <a href="/">Blog</a>
      </li>
    </ul>
    <p>Financial Analyst | Business Intelligence</p>
  </nav>
);

export default Header;
