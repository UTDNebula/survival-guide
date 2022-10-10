import React from 'react';
import './Sidebar.css';


export default function Sidebar(props){
    return(
        <div className='sidebar'>
            <Section sectionName='Introduction'/>
        </div>
    )
};

function Section(props){
    return (
        <ul>
            <li className='section'>{props.sectionName}</li>
            <li><Article url="https://www.utdallas.edu/" articleName="UT Dallas"/></li>
            <li><Article url="https://github.com/UTDNebula" articleName="UTD Nebula"/></li>
            <li><Article url="https://github.com/UTDNebula/survival-guide" articleName="Survival Guide"/></li>  
        </ul>
    )
};

function Article(props){
    return(
        <a href={props.url}>{props.articleName}</a>
    )
};