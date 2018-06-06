import React from "react";

//Should probably be called post container
//This controls the actual blog post text and margin

export default ({children}) => (
<div style={{ 
    margin: "1rem auto", 
    maxWidth:750, 
    color: "black" }}>
{children}
</div>
);