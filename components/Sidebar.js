import React from 'react';
import './Sidebar.css';
import Section from './Section.js';

export default function Sidebar(props){
    return(
        <div className='sidebar'>
            <Section sectionName='Introduction'/>
        </div>
    )
};
