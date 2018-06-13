import React from "react"
import Link from "gatsby-link"

const Footer = (props) => ( 
    <div className="footer-container">
      <footer className = "site-footer" style = {{ borderTop: `2px solid #BBB`, backgroundColor: `green`, marginTop: `1rem` }} itemScope itemType = "http://schema.org/WPFooter">
        <ul className = "footerNavList" style={{ display: `inline-block` }}>
          <Link to="/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem`}}>Home </Link>
          <Link to="/about/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem`}}>About </Link>
          <Link to="/resume/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem`}}>CV </Link>
          <Link to="/contact/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem`}}>Contact </Link>
          <Link to="/my-files/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem`}}>Index </Link>
          </ul>
      </footer>            
    </div>

) 


export default Footer