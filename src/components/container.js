import react from "react";

const Container = ({ children }) => (
  <div>{{ children }}</div>
);

export default ({children}) => (
    <div className="wrapper">{children}
    </div>
);