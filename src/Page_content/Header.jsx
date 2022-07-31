import React from "react";
import Clublogo from "../pages/Header_section/ClubLogo";
import Navbar from "../pages/Header_section/NavBar";
import "../Page_content/Header.css"


const Header = () => {
    return (
        <div className="Hcontainer">
            
            <Navbar />
            <Clublogo />
            
           
        </div>
    );
}

export default Header;
