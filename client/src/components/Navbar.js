import React from 'react'
import logo from '../assets/ira_logo.png';
import { Link } from 'react-router-dom';

//change to toolbar
export default function Navbar(){
    return (
        <div className="navbar">
            <img className="navbar-logo" src={logo} alt='logo'/>
            <Link to="/login"><button type='button'>Login</button></Link>
            <button type='button'>Have Feedback?</button>
        </div>
    )
}
