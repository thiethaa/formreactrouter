import React from 'react';
import {Carousel} from 'react-bootstrap';
//images
import Love from './love.jpg';
import Puzzle from './puzzle.jpg';
import Heart from './heart.jpg';

const Home = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img 
                src={Heart}
                className="d-block w-100"
                alt="First slide"
                style={{ height: 600, width: 100}}
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Love}
                alt="Third slide"
                style={{ height: 600, width: 100}}
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Puzzle}
                alt="Third slide"
                style={{ height:600, width: 100}}
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}


export default Home;
