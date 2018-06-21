import React from "react"
import Link from "gatsby-link"

//Should be a Functional Component that is reusable on all pages 
const Header = (props) => (
  <div className="header-container">
  <header className = "header-nav" style = {{
    borderBottom: `2px solid #BBB`,
    backgroundColor: `green`,
    marginBottom: `1rem`
  }} itemScope itemType = "http://schema.org/WPHeader">
    <ul style={{ listStyle: `none`, fontSize: `20px`, float: `right`, display: `inline-block` }}>
    <Link to="/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>Home</Link>
    <Link to="/about/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>About</Link>
    <Link to="/md/resume/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>CV</Link>
    <Link to="/contact/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>Contact</Link>
    <Link to="/my-files/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>Index</Link>
    </ul>
  <h1 style={{ color: `snow`, marginLeft: `2rem`, display: `inline-block` }}><Link to="/" style={{ color: `snow` }}>Fake News!</Link></h1>
    </header>
  </div>
)
/*
const Header = (
    <div style={{ marginBottom: `1.5rem`, backgroundColor: `green`, borderBottom: `2px solid #BBB` }}>
     <Link style={{ backgroundImage: `none`, textShadow: `none`, }}>
       <h1 style={{ marginLeft: `2rem`, display: `block` }}>Fake News!</h1>
     </Link>
     <ul style={{ listStyle: `none`, fontSize: `20px`, float: `right` }}>
       <Link to="/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>Home</Link>
       <Link to="/about/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>About</Link>
       <Link to="/md/resume/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>CV</Link>
       <Link to="/contact/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>Contact</Link>
       <Link to="/my-files/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>Index</Link>
       </ul>
    </div>
);
*/
export default Header