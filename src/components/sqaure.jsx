import React from "react";
// import "../styles/square.style.css"

const square=(prop)=>{
    return( 
    <>
       <button className="square" type="button">{prop.value}</button>
       {/* <div>{prop.children}</div> */}
    </>
    );
}
export default square 