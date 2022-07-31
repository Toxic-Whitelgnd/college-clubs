import React from 'react';
import {Carousel} from "react-bootstrap"
import img1 from  "../Clubs_Activity/images/1.jpg"
import img2 from  "../Clubs_Activity/images/1.jpg"
import img3 from  "../Clubs_Activity/images/1.jpg"

const Clubsactivity = () => {
    return (
    <div>
    <Carousel>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Explore our clubs</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Dance</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Music</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={img2}
            alt="fourth slide"
            />
            <Carousel.Caption>
            <h3>Hookah</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
    );
}

export default Clubsactivity;
