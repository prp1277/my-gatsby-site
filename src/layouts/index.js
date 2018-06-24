import React from "react";
import Link from "gatsby-link";
import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";                                                                                                                                                                                
require("prismjs/themes/prism-okaidia.css");

//This is the landing / home page 
const ListLink = props =>  
  <li style={{ 
    display: `inline-block`, 
    marginRight: `1rem`, 
    marginLeft: `1rem` 
    }}>
    <Link 
    to={props.to}>
    {props.children}
    </Link>
  </li>

export default ({ children }) => 
  <div>
    <Header />
    {children()}
    <Footer />
  </div>