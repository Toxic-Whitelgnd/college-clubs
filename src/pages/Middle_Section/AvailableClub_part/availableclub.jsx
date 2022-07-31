import React from 'react';
import "../AvailableClub_part/availableclub.css"
import data from '../AvailableClub_part/API/clubsapi'
import { Card,Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import * as Siico from "react-icons/si"


const Availableclub = () => {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">No Accounts</Popover.Header>
          <Popover.Body>
            oops! <strong>Sorry</strong>. The Club doesn't have account.. 
          </Popover.Body>
        </Popover>
      );
    return (
        <div className="AvailableClub">
            <h2>Available Clubs</h2>
        <div className="card-container">
           
            {
                data.map((value,index)=>{
                    function openweb(link){
                        console.log(link)
                        console.log("clicked")
                        window.location.href=link;
                    }

                    return(
                        <div className="card-container">
                        <Card border={value.border}  key={index} style= {{width: '18rem'}}>
                            <Card.Img variant="top" src={value.img} className="imagehover" />
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Subtitle>{value.type}</Card.Subtitle>
                                <Card.Text className="description">{value.description}
                                </Card.Text>

                                <div className="socials">
                                <Card.Link href={value.facebook}><Siico.SiFacebook></Siico.SiFacebook></Card.Link>
                                <OverlayTrigger trigger='click' placement="right" overlay= {popover}>
                                <Card.Link href={value.linkedin}><Siico.SiLinkedin></Siico.SiLinkedin></Card.Link>
                                </OverlayTrigger>
                                <Card.Link className="insta" href={value.instagram}><Siico.SiInstagram></Siico.SiInstagram></Card.Link>
                                </div>

                                <Button variant="primary" onClick={()=> openweb(value.link)}>website</Button>
                            </Card.Body>



                        </Card>
                        </div>
                        
                    );
                })
            }

            
        </div>
        </div>
    );
}

export default Availableclub;
