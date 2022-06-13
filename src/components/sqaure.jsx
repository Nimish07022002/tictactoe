import React from "react";
// import "../styles/square.style.css"

const Square=({value,onClick})=>{
    return( 
    <>
       <button className="square" type="button" onClick={onClick}>{value}</button>
       {/* <div>{prop.children}</div> */}
    </>
    );
}
export default Square 