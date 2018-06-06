import React from "react";
import Link from "gatsby-link";

import Container from "../components/container"

//This should probably be called Nav
//4 Links in the top right 
const ListLink = props =>
  <li style={{ 
    display: `inline-block`, 
    marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

//Header styling and usability using container component
export default ({ children }) => (
  <Container>
  <div style={{
     margin: `0 auto`,
     padding: `1.25px 1px`
      }}>
    <header style={{ 
      marginBottom: `1.5rem`, 
      color: "green"
      }}>
      <Link to="/" style={{ 
        textShadow: `none`, 
        backgroundImage: `none` 
        }}>
        <h1 style={{ 
          display: `inline`
           }}>Fake News!
           </h1>
      </Link>
      <ul style={{ 
        listStyle: `none`, 
        float: `right` }}>
        <ListLink to="/"
        >Home</ListLink>
        <ListLink to="/about/"
        >About</ListLink>
        <ListLink to="/resume/"
        >CV</ListLink>
        <ListLink to="/contact/"
        >Contact</ListLink>
      </ul>
    </header>
    {children()}
  </div>
  </Container>
);