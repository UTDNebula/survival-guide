import React from 'React'
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
            // <ShareBtn
            //   url={this.state.url}
            //   text={"SHARE"}
            //   // className='Share_Button'
            //   displayText='Share'
            // />
            <div>

            </div>
        )
    }
}