import React from 'react'
import styles from './Footer.module.css'
import logo2 from '../public/Images/guide_logo2.png'
import websiteLogo from '../public/Images/website_logo.png'
import discordLogo from '../public/Images/discord_logo.png'
import instagramLogo from '../public/Images/instagram_logo.png'
import utdLogo from "../public/Images/utd_logo2.png"

export default function Footer()
{
    return (
        <div className = {styles.Footer}>
            <img
                className = {styles.Footer_Logo}
                src = {logo2.src}
                alt = '?'
            /> 
            <div className = {styles.Footer_Sections}>
                <div className = {styles.one}>
                    <div className = {styles.Footer_Divider}/>
                    Nebula Labs
                    <img
                        className = {styles.Website_Logo}
                        src = {websiteLogo.src}
                        alt = "?"
                    />
                    <br/><br/>
                    Nebula Labs Instagram
                    <img
                        className = {styles.Instagram_Logo}
                        src = {instagramLogo.src}
                        alt = "?"
                    />
                    <br/><br/>
                    Nebula Labs Discord
                    <img
                        className = {styles.Discord_Logo}
                        src = {discordLogo.src}
                        alt = "?"
                    />
                </div>
                <div className = {styles.two}>
                    <div className = {styles.Footer_Divider}/>
                    Copyright Information
                    <br/><br/>
                    © The Univerity of Texas at Dallas
                    <br/><br/>
                    Contact Us
                    </div>
                <div className = {styles.three}>
                    <div className = {styles.Footer_Divider}/>
                    <img
                        className = {styles.UTD_Logo}
                        src = {utdLogo.src}
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