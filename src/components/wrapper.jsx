import react from "react";

const Wrapper = ({ children }) => (
  <section>{{ children }}</section>
);

export default ({children}) => (
    <section className="Wrapper" css={{ marginLeft: `auto`, marginRight: `auto`, maxWidth: `100%`, Height:`600px` }}>
    {children}
    </section>
);