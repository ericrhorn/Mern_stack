import React from "react";
import Adverts from "./Adverts";
import Subcontent from "./Subcontent";

const Main = (props) => {
    return (
        <div style = {{
            backgroundColor: "#e06666",
            display: "inline-block",
            verticalAlign: "top",
            margin: "2px",
            width: "580px",
            height: "400px", 
            border: "2px solid black",
        }}>
            <Subcontent/>
            <Subcontent/>
            <Subcontent/>
            <Adverts/>
        </div>

    );
};

export default Main;