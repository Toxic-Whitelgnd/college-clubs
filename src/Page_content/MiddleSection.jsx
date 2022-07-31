import React from 'react';
import Contact from '../pages/Footer_section/contact_part/contact';
import Footer from '../pages/Footer_section/footer';
import Availableclub from '../pages/Middle_Section/AvailableClub_part/availableclub';
import Clubsactivity from '../pages/Middle_Section/Clubs_Activity/clubsactivity';
import Clubs from '../pages/Middle_Section/Clubs_part/clubs';
import Home from '../pages/Middle_Section/Home_part/home';

const Middlesection = () => {
    return (
        <div>
            <div id="home">
                <Home />
            </div>
            <div className="club">
                <Clubs />
            </div>
            <div className="availableclub">
                <Availableclub/>
            </div>
            <div className="Clubsactivity">
                <Clubsactivity />
            </div>
            <div className="Contact">
                <Contact />
            </div>
            <div className="aboutus">
                <Footer />
            </div>
        </div>
    );
}

export default Middlesection;
