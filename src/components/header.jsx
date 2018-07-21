import React from "react"
import Link from "gatsby-link"

//Should be a Functional Component that is reusable on all pages 
const Header = (props) => (
  <div 
  className = "header" 
  css={{
    borderBottom: `2px solid #BBB`,
    backgroundColor: `green`,
    marginBottom: `1rem`
  }}>
    <ul 
    css={{ 
      listStyle: `none`, 
      float: `right`, 
      display: `block`, 
      fontSize: `15px`
       }}>
       <Link 
       to="/" 
       style={{ 
      color: `snow`, 
      marginRight: `1rem`, 
      marginLeft: `1rem` 
      }}>Home
      </Link>
    <Link 
    to="/about/" 
    style={{ 
      color: `snow`, 
      marginRight: `1rem`, 
      marginLeft: `1rem` 
      }}>About</Link>
    <Link 
    to="/md/resume/" 
    style={{ 
      color: `snow`, 
      marginRight: `1rem`, 
      marginLeft: `1rem` 
      }}>CV</Link>
    <Link 
    to="/resources/" 
    style={{ 
      color: `snow`,
       marginRight: `1rem`, 
       marginLeft: `1rem` 
      }}>Resources</Link>
    <Link 
    to="/my-files/" 
    style={{ 
      color: `snow`, 
      marginRight: `1rem`, 
      marginLeft: `1rem` 
      }}>Index</Link>
    </ul>
  <h2 
  style={{ 
    color: `snow`, 
    marginLeft: `2rem`, 
    display: `inline-block`, 
    textDecoration: `none` }}>
  <Link 
  to="/" 
  style={{ 
    color: `snow`
  }}
  >Patrick Powell</Link>
  </h2>
  <p css={{ color: `snow`, marginLeft: "2rem" }}>Financial Analyst | Business Intelligence | Data Visualization</p>
    </div>
)

export default Header