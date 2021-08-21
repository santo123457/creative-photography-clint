import React from 'react';
import HeaderBody from '../HeaderBody/HeaderBody';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <header>
          <Navbar></Navbar> 
          <HeaderBody></HeaderBody>
        </header>
    );
};

export default Header;