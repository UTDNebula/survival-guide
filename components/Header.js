import React from 'react';
import "../styles/Header.css";
import Title from "./Title.js";
import Share_Button from "./Share_Button.js";
import Date from "./Date.js";
import Contributor from "./Contributor.js";

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