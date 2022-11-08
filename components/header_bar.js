import React from 'react'
import '../styles/header_bar.css';
import Logo from './logo.js';
import indexButton from './indexButton.js';

function Header_Bar() {
    return(
        <div class="header_bar">
            <Logo></Logo>
            <indexButton></indexButton>
        </div>
    )
}

export default Header_Bar;
