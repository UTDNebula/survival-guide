import React from "react";
import "../styles/Content.css";

export function Content(props)
{
    return (
        <div className = "Content">
            {props.content.split('\n').map((str) => <p key = {str}>{str}</p>)}
        </div>
  )
};