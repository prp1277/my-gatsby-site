import React from "react";
import Header from "./header";
import Footer from "./footer";

const Container = ({ children }) => (
  <div className="Container-Component">
    <Header />
    <div className="Content">{children}</div>
    <Footer />
  </div>
);

export default ({ children }) => (
  <Container>
    {children}
    <br />
  </Container>
);
