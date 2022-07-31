import React from 'react';
import akalogo from "/VSCode_file/VSCodeProjects/clgclubs/src/images/akalogo.jpg"
import "../Header_section/ClubLogo.css"

const Clublogo = () => {
    return (
        <div>
            <div className="logos">
                <img src={akalogo} alt="logo" className="logo" />
            </div>
        </div>
    );
}

export default Clublogo;
