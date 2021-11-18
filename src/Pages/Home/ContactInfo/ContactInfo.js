import React from 'react';
import { Card } from 'react-bootstrap';

const ContactInfo = () => {

    const style = {
        bg1: 'Secondary',
        bg2: 'Primary',
        bg3: 'Success',
        bg4: 'Danger',
        bg5: 'Warning',
        bg6: ' Info',
        bg7: 'Dark',

    }






    return (


        <div className="container my-5">


            <h2 className='mb-4 text-primary'>Information Desk</h2>


            <div className="row  row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-5 info-container">

                <div className="col container ">
                    <Card className="col mx-auto" border="primary" bg={style.bg5.toLowerCase()} style={{ width: '18rem' }}>
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title><h4>Opening Hours</h4></Card.Title>
                            <Card.Text>
                                <p>09.00-08.00 PM</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>

                <div className="col container">


                    <Card border="primary mx-auto" bg={style.bg5.toLowerCase()} style={{ width: '18rem' }}>
                        <Card.Header> </Card.Header>
                        <Card.Body>
                            <Card.Title>  <h4>Visit Our Location</h4></Card.Title>
                            <Card.Text>
                                <p>Bannani, Dhaka</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>

                <div className="col container">


                    <Card border="primary mx-auto" bg={style.bg5.toLowerCase()} style={{ width: '18rem' }}>
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title><h4>Contact Us Now</h4></Card.Title>
                            <Card.Text>
                                <p>Bannani, Dhaka</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>

            </div>






        </div>



    );
};

export default ContactInfo;

