import React from 'react'
import './Title.css'

class Title extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state =
        {
            title: props.title
        }
    }

    render()
    {
        return (
            <div className = "Title">
                {this.state.title}
            </div>
        )
    }
}