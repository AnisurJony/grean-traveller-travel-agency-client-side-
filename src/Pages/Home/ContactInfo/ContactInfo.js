import React from 'react';
import './ContactInfo.css'
const ContactInfo = () => {
    return (
        <div className="container" >
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 item-container g-5">
                <div className="col item">
                    <div className='p-3 border bg-light '>
                        <h4>Opening Hours</h4>
                        <p>09.00-08.00 PM</p>
                    </div>
                </div>
                <div className="col item">
                    <div className='p-3 border bg-light '>
                        <h4>Visit Our Location</h4>
                        <p>Bannani, Dhaka</p>
                    </div>
                </div>
                <div className="col item">
                    <div className='p-3 border bg-light '>
                        <h4>Contact Us Now</h4>
                        <p>Bannani, Dhaka</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;