import React from "react";
import Link from "gatsby-link";

import Container from "../components/container";
//This index.js is site-wide navbar doesn't change

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) => (
  <Container>
  <div style={{ margin: `0 auto`, maxWidth:`0 auto`, padding: `1rem 1rem` }}>
    <header style={{ marginBottom: `1rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h1 style={{ display: `inline-block` }}>Fake News!</h1>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink to="/my-files/">Index</ListLink>
      </ul>
    </header>
    {children()}
  </div>
  </Container>
);