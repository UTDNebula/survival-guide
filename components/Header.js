import React from 'react';
import "../styles/Header.css";
import "Title.js";
import "Share_Button.js";
import "Date.js";

function Header(props)
{
  return (
    <div className = "Header">
      <Share_Button
        url = {props.url}
      />
      <Title
        title = {props.title}
      />
      <Date
        date = {props.date}
      />
      <Contributor
        contributors = {props.contributors}
      />
    </div>
  )
}