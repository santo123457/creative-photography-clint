import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Demo from '../Demo/Demo.js';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
            <Services></Services>
            <Demo></Demo>
            <Feedback></Feedback>
            <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Home;