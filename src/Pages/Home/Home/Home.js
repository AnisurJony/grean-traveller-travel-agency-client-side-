import React from 'react';
import Footer from '../../Footer/Footer';
import './Home.css'
import Banner from '../Banner/Banner';
import ContactInfo from '../ContactInfo/ContactInfo';


import HomeServices from '../HomeServices/HomeServices';



const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <ContactInfo></ContactInfo>
            <HomeServices></HomeServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;