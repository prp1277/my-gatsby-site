import React from "react"
import Link from "gatsby-link"

//Should be a Functional Component that is reusable on all pages 
const Header = (props) => (
  <nav className = "navbar navbar-inverse navbar-fixed-top" css={{ top: `0px`, borderBottom: `2px solid #BBB`, backgroundColor: `green`, width:`100%` }}>
  <div className="navbar-header" css={{ display: `block`, color: `snow`, marginLeft: `2rem` }}>
    <Link to="/" css={{ color: `snow`}}>Patrick Powell</Link>
    </div>
  <ul className="nav navbar-nav" css={{ listStyle: `none` }}>
       <li><a href="/my-files/" css={{ float:`right`, marginRight: `1rem`, color: `snow` }}>Index</a></li>
       <li><a href="/resources/" css={{ float:`right`, marginRight: `1rem`, color: `snow` }} >Resources</a></li>
       <li><a href="/md/resume/" css={{ float:`right`, marginRight: `1rem`, color: `snow` }} >CV</a></li>
       <li><a href="/about/"css={{ float:`right`, marginRight: `1rem`, color: `snow` }} >About</a></li>
       <li><a href="/" css={{ float:`right`, marginRight: `1rem`, color: `snow` }} >Home</a></li>
    </ul>
  <p css={{ color: `snow`, marginLeft: "2rem", display: `block` }}>Financial Analyst | Business Intelligence | Data Visualization</p>    
    </nav>
)

export default Header