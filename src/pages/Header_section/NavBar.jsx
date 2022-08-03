import React from 'react';
import "../Header_section/NavBar.css"
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div>
             <div className="navbar">
             <section class="top-nav">
    
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>
                </label>
                <ul class="menu">
                    <li className="nav-text"><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
                    <li className="nav-text"><Link to="club" spy={true} smooth={true}>Club</Link></li>
                    <li className="nav-text"><Link to="availableclub" spy={true} smooth={true}>AvailableClub</Link></li>   
                    <li className="nav-text"><Link to="Contact" spy={true} smooth={true}>Contact</Link></li>
                    <li className="nav-text"><Link to="aboutus" spy={true} smooth={true}>Aboutus</Link></li>
                </ul>
            </section>
            </div>
        </div>
    );
}

export default Navbar;
