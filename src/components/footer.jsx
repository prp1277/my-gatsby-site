import React from "react"
import Link from "gatsby-link"

const Footer = (props) => ( 
    <div className="footer-container">
      <footer className = "footer-nav" style = {{ 
        borderTop: `2px solid #BBB`, 
        backgroundColor: `green`,
        textAlign: `center`, 
        fontSize: `20px`,
        height: `40px`,
        bottom: 0,
        width: `100%`,
        }} itemScope itemType = "http://schema.org/WPFooter">
          <Link to = "/" style = {{ color:`snow`, marginRight: `1rem`, marginLeft: `1rem` }}>Home </Link>
          <Link to = "/about/" style = {{ color:`snow`, marginRight: `1rem`, marginLeft: `1rem` }} >About </Link>
          <Link to = "/md/resume/" style = {{ color:`snow`, marginRight: `1rem`, marginLeft: `1rem` }} >CV </Link>
          <Link to = "/contact/" style = {{ color:`snow`, marginRight: `1rem`, marginLeft: `1rem` }} >Contact </Link>
          <Link to = "/my-files/" style = {{ color:`snow`, marginRight: `1rem`, marginLeft: `1rem` }} >Index </Link>
      </footer>            
    </div>

) 


export default Footer