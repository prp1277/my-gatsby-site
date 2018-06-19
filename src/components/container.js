import React from "react";

/* This is the post-container component 
*  it controls the body style for any
*  file that imports "<Container> from "../components/container";
*/

export default ({children}) => (
<div className="post-container" style={{ 
    display: "block",
    margin: `auto`,
    width: `75%`,    //75% leaves 12.50% padding on each side
    minHeight: 500,  //500 is one roll-click 
    marginBottom: `1rem`,
    color: `inherit`
}}>
{children}
</div>
);