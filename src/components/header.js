import React from "react"
import Link from "gatsby-link"

const Header = (
    <header style={{ marginBottom: `1.5rem`, backgroundColor: `green`, borderBottom: `2px solid #BBB` }}>
     <Link style={{ backgroundImage: `none`, textShadow: `none`, }}>
       <h1 style={{ marginLeft: `2rem`, display: `block` }}>Fake News!</h1>
     </Link>
     <ul style={{ listStyle: `none`, fontSize: `20px`, float: `right` }}>
       <Link to="/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>Home</Link>
       <Link to="/about/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>About</Link>
       <Link to="/resume/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>CV</Link>
       <Link to="/contact/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>Contact</Link>
       <Link to="/my-files/" style={{ color: `snow`, marginRight: `1rem`, marginLeft: `1rem` }}>Index</Link>
       </ul>
    </header>
);

export default Header