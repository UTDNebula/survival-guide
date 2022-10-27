import React from "react";
import Heading from "./Heading.jss";
import Content from "./Content.jss";
import "../styles/Section.css";

function Section(props)
{
    return (
        <div className = "Section">
            <Heading heading = {props.heading} level = {props.level}/>
            <Content content = {props.content}/>
        </div>
    );
};