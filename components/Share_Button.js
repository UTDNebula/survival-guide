import React from 'React'
import {RWebShare} from 'react-web-share'
import './Share_Button.css'

class Share_Button extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = 
    {
      url: props.url
    }
  }

  render()
  {
    return (
      <RWebShare
        data = {{ 
          url: this.state.url, 
          text: "Share this Article", 
          title: "Syrvival Guide"
        }}
      >
        <button className = "Share_Button">
          SHARE
        </button>
      </RWebShare>
    )
  }
}