import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../../src/images/banner/banner1.jpg';
import banner2 from '../../../../src/images/banner/banner2.jpg';
import banner3 from '../../../../src/images/banner/banner3.jpg';
import banner4 from '../../../../src/images/banner/banner4.jpg';
import banner5 from '../../../../src/images/banner/banner5.jpg';
import banner6 from '../../../../src/images/banner/banner6.jpg';
import './Banner.css'
const Banner = () => {
    return (
        < >
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="caption">
                        <div className="text-style">
                            <h2>Welcome to</h2>
                            <h1><span className="style-header">Green </span>Travellers</h1>
                            <p>Grean Travellers has international reputation about travelling and touring guid</p>
                            <button className="book-btn"><Link to="/services">Explore</Link></button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="caption">
                        <div className="text-style">
                            <h2>Welcome to</h2>
                            <h1><span className="style-header">Green </span>Travellers</h1>
                            <p>Grean Travellers has international reputation about travelling and touring guid</p>
                            <button className="book-btn"><Link to="/services">Explore</Link></button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="caption">
                        <div className="text-style">
                            <h2>Welcome to</h2>
                            <h1><span className="style-header">Green </span>Travellers</h1>
                            <p>Grean Travellers has international reputation about travelling and touring guid</p>
                            <button className="book-btn"><Link to="/services">Explore</Link></button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="caption">
                        <div className="text-style">
                            <h2>Welcome to</h2>
                            <h1><span className="style-header">Green </span>Travellers</h1>
                            <p>Grean Travellers has international reputation about travelling and touring guid</p>
                            <button className="book-btn"><Link to="/services">Explore</Link></button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner5}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="caption">
                        <div className="text-style">
                            <h2>Welcome to</h2>
                            <h1><span className="style-header">Green </span>Travellers</h1>
                            <p>Grean Travellers has international reputation about travelling and touring guid</p>
                            <button className="book-btn"><Link to="/services">Explore</Link></button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner6}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="caption">
                        <div className="text-style">
                            <h2>Welcome to</h2>
                            <h1><span className="style-header">Green </span>Travellers</h1>
                            <p>Grean Travellers has international reputation about travelling and touring guid</p>
                            <button className="book-btn"><Link to="/services">Explore</Link></button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;