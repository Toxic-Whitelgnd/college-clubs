import React from 'react';
import "../AvailableClub_part/availableclub.css"
import data from '../AvailableClub_part/API/clubsapi'
import { Card,Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import Tilt from 'react-parallax-tilt';

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect,useState } from 'react';

import * as Siico from "react-icons/si"


const Availableclub = () => {
    // for filters
    const [Searchterm,setSearchTerm] = useState('');
    JSON.stringify(data)
    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">No Accounts</Popover.Header>
          <Popover.Body>
            oops! <strong>Sorry</strong>. The Club doesn't have account.. 
          </Popover.Body>
        </Popover>
      );
      useEffect(()=>{
        Aos.init()
      },[])
    return (
        <div className="AvailableClub">
            <div data-text="Available Club" class="light">Available Clubs</div>
            {/* for search btn */}
            <div class="search-box">
                <button class="btn-search"><i class="fas fa-search"></i></button>
                <input type="text" class="input-search" placeholder="Type to Search..." 
                onChange={e => {
                    setSearchTerm(e.target.value);
                }}/>
            </div>
        <div className="card-container">
           
            {   
                
                data.filter((result)=>{
                    if( Searchterm == ""){
                        return result
                    }
                    else if( result.type.toLocaleLowerCase().includes(Searchterm.toLocaleLowerCase()) ){
                        return result
                    }
                    else if( result.title.toLocaleLowerCase().includes(Searchterm.toLocaleLowerCase())){
                        return result
                    }
                  
                }).map((value,index)=>{
                    function openweb(link){
                        console.log(link)
                        console.log("clicked")
                        window.location.href=link;
                    }

                    return(
                        <div className="card-container" key={index}>
                        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={25} >
                        <Card className="card-cc" border={value.border}  key={index} style= {{width: '18rem'}}
                        data-aos={value.framework} data-aos-duration="1000"  data-aos-mirror="true" >
                            <Card.Img variant="top" src={value.img} className="imagehover" />
                            <Card.Body className="card-cb">
                                <Card.Title id="title">{value.title}</Card.Title>
                                <Card.Subtitle id="subtitle">{value.type}</Card.Subtitle>
                                <Card.Text className="description">{value.description}
                                </Card.Text>

                                <div className="socials">
                                <Card.Link href={value.facebook}><Siico.SiFacebook></Siico.SiFacebook></Card.Link>
                                <OverlayTrigger trigger='click' placement="right" overlay= {popover}>
                                <Card.Link href={value.linkedin}><Siico.SiLinkedin></Siico.SiLinkedin></Card.Link>
                                </OverlayTrigger>
                                <Card.Link className="insta" href={value.instagram}><Siico.SiInstagram></Siico.SiInstagram></Card.Link>
                                </div>

                                <Button variant="primary" onClick={()=> openweb(value.link)}>Website</Button>
                            </Card.Body>
                            


                        </Card>
                        </Tilt>
                        
                        
                    

                        </div>
                        
                    );
                })
            }

            
        </div>
        </div>
    );
}

export default Availableclub;
