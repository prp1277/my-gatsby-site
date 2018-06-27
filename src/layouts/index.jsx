import React from "react";
import Link from "gatsby-link";
import Header from "../components/header";
import Footer from "../components/footer"
require("prismjs/themes/prism-coy.css");

//Should probably be called post container
//This controls the actual blog post text and margin

export default ({children}) => (
    <div>
    <Header />
    {children()}
    <Footer />
    </div>
  );