import React from 'react';
import "../Footer_section/footer.css"
import * as Aiico from "react-icons/ai"
import * as Siico from "react-icons/si"
import * as Mdico from "react-icons/md"

const Footer = () => {
    return (
        <div className="footer-container">
          
          <div className="footer-developed">
                <h2 className="footer-dev">Developed By</h2>
            </div>
            
            <div className="footer-organisation">
                <span>A</span>
                <span>K</span>
                <span>A</span>
                <span>T</span>
                <span>S</span>
                <span>U</span>
                <span>K</span>
                <span>I</span>
                
               
            </div>
            <div className="footer-contact">
            <h2>Contact info</h2>
            <ul className="info">
              <li>
                <span ><Mdico.MdLocationPin id="loc" /></span>
                <span>Bangalore,India</span>
              </li>
              <li>
                <span><Siico.SiGmail  id="loc"/></span>
                <span>akatsuki99@gmail.com</span>
              </li>
              <li>
                <span><Mdico.MdPhone id="loc" /></span>
                <span>91+ 345345353 </span>
              </li>


            </ul>

            <ul className="sci">
                <li><a href='#'><Siico.SiFacebook className="socials1"/></a></li>
                <li><a href='#'><Siico.SiInstagram className="socials1"/></a></li>
                <li><a href='#'><Siico.SiLinkedin className="socials1"/></a></li>
                <li><a href='#'><Siico.SiTwitter className="socials1"/></a></li>
            </ul>

            </div>
            
            <footer>
            <div className="footer-copyright">
                <h3><Aiico.AiOutlineCopyrightCircle /> By Akatsuki Organisation , 2022</h3>
            </div>
            </footer>
            
        </div>
    );
}

export default Footer;
