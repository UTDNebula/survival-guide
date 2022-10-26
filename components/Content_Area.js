import React from "react";
import "Section.jss";
import "../styles/Content_Area.css";

export function Content_Area(props)
{
    const sections = props.sections;
    return (
        <div className = "Content_Area">
            {sections.map((section) => <Section heading = {section.heading} level = {section.level} content = {section.content}/>)}
        </div>
    );
};