import React from "react";
import Link from "gatsby-link";

//Create List Link

const Footer = props => (
  <div className="Footer">
    <ul className="contactList">
      <a href={"mailto:prp1277@gmail.com"} alt="Email">
        <img
          src={
            "https://prp1277.github.io/static/envelope-square-5a6ce3361478e21cbbeea2c926484ad5.svg"
          }
        />
      </a>
      <a href={"https://1drv.ms/w/s!AoLkNBOSNnKyhel7Dp8q06YYxobiHQ"} alt="docx">
        <img
          src={
            "https://prp1277.github.io/static/file-248c4289beabe32d14a5bf286fa8d285.svg"
          }
        />
      </a>
      <a href={"tel:14024159083"} alt="cell-phone">
        <img
          src={
            "https://prp1277.github.io/static/mobile-3ca043f01eb64437316c554c8b1c7784.svg"
          }
        />
      </a>
      <a href={"https://linkedin.com/in/prpowell1277"} alt="linkedin">
        <img
          src={
            "https://prp1277.github.io/static/linkedin-48a2133dd5c34ad46cc6ab6ff06c03ec.svg"
          }
        />
      </a>
      <a href={"https://github.com/prp1277"} alt="github">
        <img
          src={
            "https://prp1277.github.io/static/github-f5a069d24c7855d24188c14f570b6a57.svg"
          }
        />
      </a>
      <a href={"https://facebook.com/patrick.powell1"} alt="facebook">
        <img
          src={
            "https://prp1277.github.io/static/facebook-square-2362db2ef99c063558ffe8d9121643d4.svg"
          }
        />
      </a>
    </ul>
    <p>Patrick Powell 2018</p>
  </div>
);

export default Footer;
