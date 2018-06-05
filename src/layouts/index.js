import React from "react";
import Link from "gatsby-link";

import container from "../components/container";
//This index.js is site-wide navbar doesn't change

const ListLink = props =>
  <li style={{ 
    display: `inline-block`, 
    marginRight: `1rem`,
    color: `#000000`, 
    }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) => (
  <div style={{ 
    margin: `0 auto`, 
    maxWidth:`0 auto`, 
    color: `#000000` , 
    padding: `1rem 1rem` }}
    >
    <header style={
      { marginBottom: `1rem` }
      }>
      <Link to="/" style={{ 
        textShadow: `none`, 
        backgroundImage: `none` 
        }}>
        <h2 style={
          { 
            display: `inline-block` 
        }}
          >Fake News
          </h2>
      </Link>
      <ul style={{ 
        listStyle: `none`, 
        float: `right` 
      }}>
        <ListLink to="/">
        Home</ListLink>
        <ListLink to="/about/">
        About</ListLink>
        <ListLink to="/resume/">
        CV</ListLink>
        <ListLink to="/contact/">
        Contact</ListLink>
      </ul>
    </header>
    {children()}
  </div>
);