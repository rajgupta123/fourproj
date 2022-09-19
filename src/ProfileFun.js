import React from "react";
export default function Profile(prop){

    //Arrow function
    const red=()=>{
        alert("Red function call");
    }

    return(

        // <div><h1 onClick={red}>Profile Functional Component</h1></div>
        <div><h1 onClick={red}>{prop.text}</h1></div>
    )
}