import React from 'react'
import '../styles/View_Area.css'

export function View_Area(props)
{
  return (
    <div className="View-area">
        <Header
        url = {props.url}
        date = {props.date}
        title = {props.title}
        contributors = {props.contributors}
        />
    </div>
    )
}