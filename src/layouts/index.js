import React from "react";
import Link from "gatsby-link";

import Container from "../components/container"

//This should probably be called Nav
//4 Links in the top right -> ListLink is variable name
const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
    {props.children}</Link>
  </li>

//Header styling and usability using ListLink as a variable
//props.children = {children()} -> 
export default ({ children }) => (
  <Container>
  <header style={{ marginBottom: "0px", textDecoration: "none" }}>
     <Link to="/" style={{textShadow: "none", backgroundImage: "none", textDecoration: "none" }}>
     <h1 style={{ display: "inline", textDecorationLine: "none", color: "black" }}>Fake News!</h1>
       </Link>
     <ul style={{ listStyle: "none", float: "right" }}>
       <ListLink to="/">Home</ListLink>
       <ListLink to="/about/">About</ListLink>
       <ListLink to="/resume/">CV</ListLink>
       <ListLink to="/contact/">Contact</ListLink>
       <ListLink to="/my-files/">Index</ListLink>
      </ul>
  </header>
{children()}
  </Container>
);