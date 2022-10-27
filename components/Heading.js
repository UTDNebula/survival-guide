import React from "react"
import Hashtag from "./Hashtag.jss"
import "../styles/Heading.css"

export function Heading(props)
{
    const size = (20) - ((props.level - 1) * 2);
    return (
        <div className = "Heading">
            <Hashtag heading = {props.heading}/>
            <div className = "Heading_Title" style = {{fontSize: size}}>
                {props.heading}
            </div>
        </div>
    );
};