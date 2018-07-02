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
    style={{ 
      listStyle: `none`, 
      float: `right`, 
      display: `inline-block`, 
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
    to="/contact/" 
    style={{ 
      color: `snow`,
       marginRight: `1rem`, 
       marginLeft: `1rem` 
      }}>Contact</Link>
    <Link 
    to="/my-files/" 
    style={{ 
      color: `snow`, 
      marginRight: `1rem`, 
      marginLeft: `1rem` 
      }}>Index</Link>
    </ul>
  <h1 
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
  >B2 -> BI</Link>
  </h1>
  <p
  style={{ 
    color: `snow`,
    marginLeft: `2rem`
  }}
  >Helping Business Do Business, Intelligently</p>
    </div>
)

export default Header