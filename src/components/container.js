import React from "react";

//Should probably be called post container
//This controls the actual blog post content

export default ({children}) => (
<div style={{ 
    display: "block",
    color: "black",
    margin: `auto`,
    width: `75%`,
}}>
{children}
</div>
);