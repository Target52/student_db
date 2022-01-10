import React from 'react'
import logo from '../img/Winc-logo.svg';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo" />
            <h1>Student Dashboard - Winc Academy</h1>
        </div>
    )
}

export default Header