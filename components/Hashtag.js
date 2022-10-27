import React from "react"
import "../styles/Hashtag.css"

function Hashtag(props)
{
    return (
        <div className = "Hashtag" id = {props.heading.split(" ").join("_")}>
            #
        </div>
    );
};