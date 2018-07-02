import React from "react";
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) => 
<Container>
<Header />
  <h1 css={{ textAlign: `center` }}> Get In Touch!</h1>
      <ul>
        <p css={{ textAlign: `center` }}><a href="mailto:prp1277@gmail.com"> Prp1277@gmail.com</a>
        </p>
      <p css={{ textAlign: `center` }}><a href="https://prp1277.github.io/md/resume/"> Resume</a>
        </p>
      <p css={{ textAlign: `center` }}><a href="tel:14024159083"> Cell Phone</a>
        </p>
      <p css={{ textAlign: `center` }}><a href="https://linkedin.com/in/prpowell1277"> LinkedIn</a>
        </p>
      <p css={{ textAlign: `center` }}><a href="https://github.com/prp1277"> GitHub</a>
        </p>
        </ul>
        <Footer />
        </Container>