import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './carou.css'

class Carou extends Component {
    render() {
        return (
            <div className='col-lg-9'>
                <Carousel className="my-4">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgp"
                            src="https://24warez.ru/uploads/posts/1316968917_besthdwallpaperspack362_99_bender777post.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgp"
                            src="https://million-wallpapers.ru/wallpapers/2/61/16771467067221162384/landscape-an-evening-journey-street-city-painting-eveni.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imgp"
                            src="http://img.crazys.info/files/i/2012.4.7/1333768550_savv-113.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Carou;