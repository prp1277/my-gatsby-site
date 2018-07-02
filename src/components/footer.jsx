import React from "react"
import Link from "gatsby-link"
//Create List Link
const Footer = (props) => ( 
    <div className="footer"
      css= {{ 
        borderTop: `2px solid #BBB`, 
        backgroundColor: `green`,
        textAlign: `center`, 
        fontSize: `20px`,
        bottom: 0,
        width: `100%`,
        }}>
        <ul style={{ listStyle: `none`, float: `center`, display: `inline-block`, fontSize: `15px` }}> 
          <Link to="/"style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>Home </Link>
          <Link to="/about/"style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>About </Link>
          <Link to="/md/resume/"style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>CV </Link>
          <Link to="/contact/"style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>Contact </Link>
          <Link to="/my-files/"style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>Index </Link>
          </ul>
    </div>

) 


export default Footer