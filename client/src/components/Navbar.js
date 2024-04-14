import React from 'react'
import logo from '../assets/ira_logo.png';

//change to toolbar
export default function Navbar(){
    return (
        <div className="navbar">
            <img className="navbar-logo" src={logo} alt='logo'/>
            <button type='button'>Login</button>
            <button type='button'>Have Feedback?</button>
        </div>
    )
}
