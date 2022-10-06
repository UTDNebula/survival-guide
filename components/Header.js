import React from 'React'
import './Header.css'
import './Title.js'

class Header extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            curUrl: props.curUrl,
            title: props.title
        }
    }

  render()
  {
        const curTitle = this.state.title
        
        return (
            <div className = "Header">
                <Share_Button
                    url = {this.state.curUrl}
                />
                <Title
                    title = {curTitle}
                />
            </div>
        )
    }
}