import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import logo from "../../../images/logos/logo.png";
import { UserContext } from '../../../App';

const Sidebar = () => {
    const[loggedInUser , setLoggedInUser]= useContext(UserContext);
    return (
        <div>


<Nav className="navbar navbar-expand-lg navbar-light pt-4">
          
<Link to="/" ><img className="logo"src={logo} style={{width:"100px"}} alt=""/> </Link>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto oderItem" >
      <li className="nav-item  ">
        
          
          
          
            <Link to="/admin-panel/allServices"  style={{textDecoration:"none",color:"#343a40"}} >
                    <h6>
                     
                    Service List
                     </h6>
                     <span className="sr-only">(current)</span></Link>
      </li>

            
      <li className="nav-item ml-3">
      <Link to="/admin-panel/addServices"  style={{textDecoration:"none"}}>                    
                    <h6 className="text-dark">
                    
                    Add Service 
                    </h6>
                    </Link>
      </li>
      
      <li className="nav-item ml-3">
      <Link to="/admin-panel/makeAdmin"style={{textDecoration:"none"}}>                    
                    <h6 className="text-dark">
                    
                    Make Admin
                    </h6>
                    </Link>
      </li>    
    </ul>
    <div className="col-md-3 mt-2 justify-content-center d-flex ml-5">
              
                    <img src={loggedInUser.img} style={{width:"50px", height:"50px",borderRadius:'50%'}} alt=""/>
                <h6 className="ml-3 mt-3">{loggedInUser.firstName}</h6>
                </div>
    </div>
</Nav> 



            {/* <Link to="/admin-panel/allServices" style={{textDecoration:"none"}} >
                    <h6 className="text-dark ">
                     <IconButton ><AssignmentIcon className="text-dark " /> </IconButton>
                      Service List
                     </h6>
                     
                    </Link>
                
                    <Link to="/admin-panel/addServices" style={{textDecoration:"none"}}>                    
                    <h6 className="text-dark mt-3">
                    <span className='font-weight-bold mx-3'>+</span> Add Service 
                    </h6>
                    </Link>
                    <Link to="/admin-panel/makeAdmin" style={{textDecoration:"none"}}>                    
                    <h6 className="text-dark mt-3">
                    <IconButton><PersonAddIcon className="text-dark"/></IconButton>
                     Make Admin
                    </h6>
                    </Link>  */}
        </div>
    );
};

export default Sidebar;