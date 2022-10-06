import React from 'react'
import './View_Area.css'
import './Header.js'

class View_Area extends React.Component
{
    render()
    {
        return (
            <div className="Background">
                <div className="View-area">
                    <Header
                        url = "https://www.bing.com"
                        title = "How to Survive and Thrive at UTD"
                    />
                </div>
            </div>
        )
    }
}