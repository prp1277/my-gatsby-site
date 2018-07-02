import react from "react";

const Wrapper = ({ children }) => (
  <div>{{ children }}</div>
);

export default ({children}) => (
    <div className="Wrapper">
    {children}
    </div>
);