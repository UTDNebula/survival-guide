import React from "react"
import "../styles/Share_Button.css"
import {RWebShare} from 'react-web-share'
import shareImg from "../public/Images/share.png"

export default function Share_Button(props)
{
  return (
    <RWebShare
      data = {{ 
        url: props.url, 
        text: "Share this Article", 
        title: "Survival Guide"
      }}
    >
      <button className = "Share_Button">
        <img className = "Share_Button_Img"
            src = {shareImg}
            alt = "?"
            width = "20"
            height = "13"
        />
        SHARE
      </button>
    </RWebShare>
  )
}