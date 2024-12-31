import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <div className="wrapper">
                <div className="logo">
                <NavLink to="/">FITNESSAXIA</NavLink>
                </div>
                <ul className="menu">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="#">About US</NavLink></li>
                    <li><NavLink to="#">Program</NavLink></li>
                    <li><NavLink to="#">Membership</NavLink></li>
                    <li><NavLink to="#">Testimonials</NavLink></li>
                </ul>
                <button className="signup">
                Signup
                </button>
             </div>
        </div>
    </div>
  )
}

export default Header