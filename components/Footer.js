import React from 'react'
import '../styles/Footer.css'
import logo2 from '../public/Images/guide_logo2.png'
import websiteLogo from '../public/Images/website_logo.png'
import discordLogo from '../public/Images/discord_logo.png'
import instagramLogo from '../public/Images/instagram_logo.png'
import utdLogo from "../public/Images/utd_logo2.png"

export default function Footer()
{
    return (
        <div className = "Footer">
            <img
                className = "Footer_Logo"
                src = {logo2}
                alt = '?'
            /> 
            <div className = "Footer_Sections">
                <div className = "one">
                    <div className = "Footer_Divider"/>
                    Nebula Labs
                    <img
                        className = "Website_Logo"
                        src = {websiteLogo}
                        alt = "?"
                    />
                    <br/><br/>
                    Nebula Labs Instagram
                    <img
                        className = "Instagram_Logo"
                        src = {instagramLogo}
                        alt = "?"
                    />
                    <br/><br/>
                    Nebula Labs Discord
                    <img
                        className = "Discord_Logo"
                        src = {discordLogo}
                        alt = "?"
                    />
                </div>
                <div className = "two">
                    <div className = "Footer_Divider"/>
                    Copyright Information
                    <br/><br/>
                    © The Univerity of Texas at Dallas
                    <br/><br/>
                    Contact Us
                    </div>
                <div className = "three">
                    <div className = "Footer_Divider"/>
                    <img
                        className = "UTD_Logo"
                        src = {utdLogo}
                        alt = "?"
                    />
                    800 W. Campbell Road
                    <br/>
                    Richardson, Texas 75080-3021
                    <br/><br/>
                    972-883-2111
                </div>
            </div>
        </div>
    )
};