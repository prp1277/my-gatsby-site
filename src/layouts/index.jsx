import React from "react";
import Link from "gatsby-link";
import Header from "../components/header";
import Footer from "../components/footer";
import Container from "../templates/container";

require("prismjs/themes/prism-coy.css");

//Should probably be called post container
//This controls the actual blog post text and margin

export default ({children}) => (
    <div>
    <Header />
    <Container>
    {children()}
    </Container>
    <Footer />
    </div>
  );