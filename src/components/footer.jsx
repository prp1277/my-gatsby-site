import React from "react"
import Link from "gatsby-link"

//Create List Link

const Footer = (props) => ( 
    <section className="footer"
      css={{ 
        borderTop: `2px solid #BBB`, 
        backgroundColor: `green`, 
        width: `100%`,
        bottom: `0px`,
        textAlign: `center`
        }}>
  
    <ul className="contactList">
      <a href={"mailto:prp1277@gmail.com"}>
        <img src={"https://prp1277.github.io/static/envelope-square-5a6ce3361478e21cbbeea2c926484ad5.svg"} 
        css={{ marginLeft: `1rem`, marginRight: `1rem`, marginTop:`1rem` }} 
        alt="mailto:prp1277@gmail.com" height="30px" width="30px"/></a>       
      <a href={"https://prp1277.github.io/md/resume/"}>
        <img src={"https://prp1277.github.io/static/file-248c4289beabe32d14a5bf286fa8d285.svg"} 
        css={{ marginLeft: `1rem`, marginRight: `1rem`, marginTop:`1rem` }} 
        alt="Resume" height="30px" width="30px"  /></a>
      <a href={"tel:14024159083"}>
        <img src={"https://prp1277.github.io/static/mobile-3ca043f01eb64437316c554c8b1c7784.svg"} 
        css={{ marginLeft: `1rem`, marginRight: `1rem`, marginTop:`1rem` }} 
        alt="Cell Phone" height="30px" width="30px" /></a>
      <a href={"https://linkedin.com/in/prpowell1277"}>
        <img src={"https://prp1277.github.io/static/linkedin-48a2133dd5c34ad46cc6ab6ff06c03ec.svg"} 
        css={{ marginLeft: `1rem`, marginRight: `1rem`, marginTop:`1rem` }} 
        alt="LinkedIn Profile" height="30px" width="30px" /></a>
      <a href={"https://github.com/prp1277"}>
        <img src={"https://prp1277.github.io/static/github-f5a069d24c7855d24188c14f570b6a57.svg"} 
        css={{ marginLeft: `1rem`, marginRight: `1rem`, marginTop:`1rem` }}
        alt="Github Profile" height="30px" width="30px" /></a>
      <a href={"https://facebook.com/patrick.powell1"}>
        <img src={"https://prp1277.github.io/static/facebook-square-2362db2ef99c063558ffe8d9121643d4.svg"} 
        css={{ marginLeft: `1rem`, marginRight: `1rem`, marginTop:`1rem` }} 
        alt="Facebook Profile" height="30px" width="30px" /></a>
    </ul>
      <p css={{ color: `snow` }}>Patrick Powell 2018</p>

    </section>
) 

export default Footer