import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>

            <div className=" footer-style">
                <div className='container'>
                    <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                        <div className='col'>
                            <h2>Green Travellers</h2>
                            <p>green@travellers.com</p>
                            <p>+88001704568952</p>
                            <p>bannani,dhaka</p>

                        </div>
                        <div className='col'>
                            <h3>Talk to us</h3>
                            <hr />
                            <p>About us</p>
                            <p>Registration</p>
                            <p>Blog</p>
                            <p>Contract</p>
                        </div>
                        <div className='col'>
                            <h3>Support</h3>
                            <hr />
                            <p>Documantation</p>
                            <p>FAQs</p>
                            <p>Conditions</p>

                        </div>
                        <div className='col'>
                            <h3>Newsletter</h3>
                            <hr />
                            <h5>Get our offers & News in your inbox</h5>
                            <input type="email" placeholder="Enter email" />
                            <input type="submit" value="subscribe" />

                        </div>

                    </div>
                </div>
                <small>&copy; All Rights Reserved by Green Travellers </small>
            </div>


        </>
    );
};

export default Footer;