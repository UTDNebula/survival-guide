import React from "react";
import "Heading.jss";
import "Content.jss";
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