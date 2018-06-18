import React from "react"
import Link from "gatsby-link"

const Footer = (props) => ( 
    <div className="footer-container">
      <footer className = "footer-nav" style = {{ 
        borderTop: `2px solid #BBB`, 
        backgroundColor: `green`,
        marginTop: `1rem`,
        textAlign: `center`, 
        }} itemScope itemType = "http://schema.org/WPFooter">
          <Link to = "/" style = {{ color:`snow` }}>Home </Link>
          <Link to = "/about/" style = {{ color:`snow` }} >About </Link>
          <Link to = "/resume/" style = {{ color:`snow` }} >CV </Link>
          <Link to = "/contact/" style = {{ color:`snow` }} >Contact </Link>
          <Link to = "/my-files/" style = {{ color:`snow` }} >Index </Link>
      </footer>            
    </div>

) 


export default Footer