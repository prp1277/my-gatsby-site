import React from "react";
import Wrapper from "../components/wrapper"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => 
<Wrapper>
<Header />
<div className="Content" css={{ height: `auto`, marginLeft:`auto`, marginRight: `auto` , maxWidth: `42rem`, textAlign: `center` }}>
  <h1 css={{ textAlign: `center` }}>Contact Information</h1>
      <ul>
        <a href={"mailto:prp1277@gmail.com"}>Email
        </a><br/>
        <a href={"https://prp1277.github.io/md/resume/"}>Resume
        </a><br/>
        <a href={"tel:14024159083"}>Cell Phone
        </a><br/>
        <a href={"https://linkedin.com/in/prpowell1277"}>LinkedIn
        </a><br/>
        <a href={"https://github.com/prp1277"}>GitHub
        </a><br/>
      </ul>
    <h2>Additional Resources</h2>
      <p> https://W3schools.com </p>
        </div>
        <Footer />
        </Wrapper>