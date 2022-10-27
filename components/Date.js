import React from 'react';
import "../styles/Date.css";

export function Date(props)
{
  return (
    <div className = "Date">
      Last Edited {props.date}
    </div>
  )
};