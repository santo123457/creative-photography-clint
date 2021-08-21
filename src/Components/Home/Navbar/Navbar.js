import React from 'react';
import { Link } from 'react-router-dom';
import logo from '.././../../images/logos/logo.png'

const Navbar = () => {
    return (
        <div className='container'>
           <nav className="navbar navbar-expand-lg navbar-light pt-4">
           <Link to="/" ><img className="logo"src={logo} style={{width:"100px"}} alt=""/> </Link>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link mr-4" to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>

      <li className="nav-item">
        <a className="nav-link mr-4" href="#services">Our Services</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link mr-4" href="#demo">Demo Work</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link mr-4" href="#contactUs">Contact Us</a>
      </li>
       
     
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
      
      <Link to="/login"><button className="btn my-2 btn-dark my-sm-0" type="submit">Login</button></Link>
    </form>
  </div>
</nav> 
        </div>
    );
};

export default Navbar;