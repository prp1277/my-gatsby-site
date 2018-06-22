import React from "react";
import Link from "gatsby-link";

//This is a backup copy of layouts/index.js 
//4 Links in the top right -> ListLink is variable name
const ListLink = props =>  
  <li style={{ 
    display: `inline-block`, 
    marginRight: `1rem`,
    marginLeft: `1rem`,
    }}>
    <Link to={props.to}>
    {props.children}</Link>
  </li>

//Header styling and usability using ListLink as a variable
//props.children = {children()} -> 
//Container is the component holding this all together
export default ({children}) => (
  <div style={{ 
    margin: `0 auto`, 
    maxWidth: `100%`,  
    backgroundColor: `WhiteSmoke`,
    }}>
  <header style={{ 
    backgroundColor: `Green`, 
    marginBottom: `1.5rem`,
    }}>
     <Link to="/" style={{
       color: `Snow`,
       textShadow: "none", 
       backgroundImage: "none", 
     }}>
     <h1 style={{ 
       display: "inline-block", 
       marginLeft: `2rem`,  
       }}>Fake News!</h1>
       </Link>
     <ul style={{ 
         listStyle: `none`, 
         float: `right`,  
         fontSize: `20px` }}>
       <Link to="/" style={{
           color: `Snow`, 
           marginRight: `1rem`, 
           marginLeft: `1rem`}}>Home</Link>
       <Link to="/about/" style={{
           color: `Snow`, 
           marginRight: `1rem`,
           marginLeft: `1rem`}}>About</Link>
       <Link to="/resume/" style={{
           color: `Snow`, 
           marginRight: `1rem`,
           marginLeft: `1rem`}}>CV</Link>
       <Link to="/contact/" style={{
           color: `Snow`, 
           marginRight: `1rem`,
           marginLeft: `1rem`}}>Contact</Link>
       <Link to="/my-files/" style={{
           color: `Snow`, 
           marginRight: `1rem`,
           marginLeft: `1rem`}}>Index</Link>
      </ul>
  </header>
{children()}
      </div>
);