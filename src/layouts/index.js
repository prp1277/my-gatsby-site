import React from "react";
import Link from "gatsby-link";
import Footer from "../components/footer";
import Header from "../components/header";
import Container from "../components/container";

//This should probably be called Nav
//Functional Component 
const ListLink = props =>  
  <li style={{ display: `inline-block`, marginRight: `1rem`, marginLeft: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>

//Header styling and usability using ListLink as Functional Component
//props.children = {children()} -> 
export default ({ children }) => 
  <div>
    <Header/>
{children()}
<Footer/>
      </div>