import React from "react";
import Wrapper from "../components/wrapper"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => 
<Wrapper>
<Header />
<div className="Content" css={{ height: `auto`, marginLeft:`auto`, marginRight: `auto` , maxWidth: `42rem`, textAlign: `center` }}>
  <h1 css={{ textAlign: `center` }}>Resources</h1>
    <h2 style={{ textDecorationLine: `none` }}>Web Development / APIs</h2>
      <ul className="Reference-Links">
        <a href="https://W3schools.com" alt="W3Schools" >W3schools </a><br/>
        <a href="https://github.com/prp1277/resources" alt="Github-Resource-Repo" >Personal Resources Repository </a><br/>
      </ul>
    <h3>Excel</h3>
      <ul>
        <a href="https://reddit.com/r/excel" alt="/r/Excel">/r/Excel</a><br/>
        <a href="https://powerspreadsheets.com" alt="PowerSpreadSheets">PowerSpreadSheets </a><br/>
      </ul>
    <h3>RStudio</h3>
      <ul>
        <a href="https://www.r-bloggers.com/" alt="r-bloggers">R-Bloggers </a><br/>
        <a href="https://reddit.com/r/rstudio" alt="/r/Rstudio">/r/RStudio </a><br/>
      </ul>
        </div>
  <Footer />
  </Wrapper>