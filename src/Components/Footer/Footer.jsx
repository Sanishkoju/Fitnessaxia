import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="top">
                <div className="menus">
                    <h4>Company</h4>
                    <ul className="menu">
                        <li>About Us</li>
                        <li>Why Us</li>
                        <li>Security</li>
                        <li>Partnership</li>
                    </ul>
                </div>
                <div className="menus">
                    <h4>Cotegories</h4>
                    <ul className="menu">
                        <li>Basic Yoga</li>
                        <li>Strength Training</li>
                        <li>Body Building</li>
                        <li>Weight Lost</li>
                    </ul>
                </div>
                <div className="menus">
                    <h4>Help</h4>
                    <ul className="menu">
                        <li>Account</li>
                        <li>Support Center</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="menus">
                    <h4>Contact us</h4>
                    <ul className="menu">
                        <li><NavLink to="tel:+1(406)555-0120"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15px"><path fill="#d73e3e" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></span>+1(406)555-0120</NavLink></li>
                        <li><NavLink to="mailto:example@gmail.com"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15px"><path fill="#d73e3e" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></span>example@gmail.com</NavLink></li>
                        <li><NavLink to="#"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="15px"><path fill="#d73e3e" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg></span>New Jersey 45463</NavLink></li>
                    </ul>
                </div>
                <div className="menus">
                    <h4>Subscribe our Newspaper</h4>
                    <div id="newsletter-form">
                    <input type="email" id="email" name="email" placeholder="you@example.com" required />
                    <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px"><path fill="#fff" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg></button>
                    </div>
                        <p>Lorem ipsum dolor sit amet dolor sit dolor sit <br></br> elit. Tempora, provident.</p>
                    </div>

            </div>
            <div className="bottom">
            <div className="logo">
                <NavLink to="/">FITNESSAXIA</NavLink>
            </div>
            <div className="copyright">
                @2024 ,All Copyrights reserved
            </div>
            <div className="socials">
                <span><NavLink to=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15px"><path fill="#000000" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg></NavLink></span>
                <span><NavLink to=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15px"><path fill="#000000" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></NavLink></span>
                <span><NavLink to=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15px"><path fill="#000000" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></NavLink></span>
                <span><NavLink to=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15px"><path fill="#000000" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg></NavLink></span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer