import React from "react";

//Create List Link

const Footer = (props) => (
  <div
    className="Footer"
    style={{
      borderTop: `2px solid #BBB`,
      marginTop: `1rem`,
      backgroundColor: `#056303`,
      width: `100%`,
      marginBottom: `0px`,
      textAlign: `center`,
    }}>
    <ul style={{ listStyle: `none` }}>
      <li style={{ display: `inline-block`, padding: `1rem` }}>
        <a href={"mailto:prp1277@gmail.com"} alt="Email">
          <img
            src={
              "https://prp1277.github.io/static/envelope-square-5a6ce3361478e21cbbeea2c926484ad5.svg"
            }
            width="32px"
          />
        </a>
      </li>
      <li style={{ display: `inline-block`, padding: `1rem` }}>
        <a
          href={"https://1drv.ms/w/s!AoLkNBOSNnKyhel7Dp8q06YYxobiHQ"}
          alt="docx">
          <img
            src={
              "https://prp1277.github.io/static/file-248c4289beabe32d14a5bf286fa8d285.svg"
            }
            width="28px"
          />
        </a>
      </li>
      <li style={{ display: `inline-block`, padding: `1rem` }}>
        <a href={"tel:14024159083"} alt="cell-phone">
          <img
            src={
              "https://prp1277.github.io/static/mobile-3ca043f01eb64437316c554c8b1c7784.svg"
            }
            width="28px"
          />
        </a>
      </li>
      <li style={{ display: `inline-block`, padding: `1rem` }}>
        <a href={"https://linkedin.com/in/prpowell1277"} alt="linkedin">
          <img
            src={
              "https://prp1277.github.io/static/linkedin-48a2133dd5c34ad46cc6ab6ff06c03ec.svg"
            }
            width="32px"
          />
        </a>
      </li>
      <li style={{ display: `inline-block`, padding: `1rem` }}>
        <a href={"https://github.com/prp1277"} alt="github">
          <img
            src={
              "https://prp1277.github.io/static/github-f5a069d24c7855d24188c14f570b6a57.svg"
            }
            width="32px"
          />
        </a>
      </li>
      <li style={{ display: `inline-block`, padding: `1rem` }}>
        <a href={"https://facebook.com/patrick.powell1"} alt="facebook">
          <img
            src={
              "https://prp1277.github.io/static/facebook-square-2362db2ef99c063558ffe8d9121643d4.svg"
            }
            width="32px"
          />
        </a>
      </li>
    </ul>
    <p style={{ color: `#ffffff` }}>Patrick Powell 2018</p>
  </div>
);

export default Footer;
