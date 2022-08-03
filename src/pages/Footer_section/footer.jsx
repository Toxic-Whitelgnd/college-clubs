import React from 'react';
import "../Footer_section/footer.css"
import * as Aiico from "react-icons/ai"
import * as Siico from "react-icons/si"
import * as Mdico from "react-icons/md"

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Footer = () => {
  useEffect(()=>{
    Aos.init()
  },[])
    return (
        <div className="footer-container">
          
          <div className="footer-developed">
                <h2 className="footer-dev">Developed By</h2>
            </div>
            
            <div className="footer-organisation" data-aos="zoom-out-up">
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
                <span>akatsukiorganisation999@gmail.com</span>
              </li>
              <li>
                <span><Mdico.MdPhone id="loc" /></span>
                <span>91+ 8610683202 </span>
              </li>


            </ul>

            <ul className="sci">
                <li><a href='https://www.facebook.com/TheBestBrotherEver/'><Siico.SiFacebook className="socials1"/></a></li>
                <li><a href='https://www.instagram.com/t_a_r_u_n_s_k_/'><Siico.SiInstagram className="socials1"/></a></li>
                <li><a href='https://www.linkedin.com/in/tarun-s-k-737349207/'><Siico.SiLinkedin className="socials1"/></a></li>
                <li><a href='https://twitter.com/home'><Siico.SiTwitter className="socials1"/></a></li>
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
