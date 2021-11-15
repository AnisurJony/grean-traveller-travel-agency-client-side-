import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Green Travellers</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/aboutus'>About Us</Nav.Link>
                        <Nav.Link as={Link} to='/places'>Places</Nav.Link>
                        <Nav.Link as={Link} to='/services'>Services</Nav.Link>


                        {user?.email && <Nav.Link as={Link} to='/myorders'>My Orders</Nav.Link>}
                        {user?.email && <Nav.Link as={Link} to='/manageallorders'>Manage All Orders</Nav.Link>}
                        {user?.email && <Nav.Link as={Link} to='/addservice'>Add Service</Nav.Link>}

                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to='/login' >Login</Nav.Link>}
                        <Navbar.Text>
                            <Link ><Link as={Link} to='/home' ><span className='ms-2'> {user?.displayName}</span></Link></Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;