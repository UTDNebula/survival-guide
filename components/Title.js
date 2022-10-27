import React from 'react';
import "../styles/Title.css";

export function Title(props)
{
    return (
      <div className = "Title">
        {props.title}
      </div>
    )
};