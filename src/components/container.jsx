import React from "react";
import Header from "./header";
import Footer from "./footer";

/** The first div is the content wrapper */

const Container = ({ children }) => (
  <div style={{ backgroundColor: `#e7e6e6` }}>
    <Header />
    <div className="Content" style={{ maxWidth: `85%`, margin: `0 auto` }}>
      {children}
    </div>
    <Footer />
  </div>
);

export default ({ children }) => <Container>{children}</Container>;
