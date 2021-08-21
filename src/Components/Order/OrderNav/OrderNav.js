import React, { useContext} from 'react';
import { Link,} from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from "../../../images/logos/logo.png";

const OrderNav = ( props) => {
  const[loggedInUser , setLoggedInUser]= useContext(UserContext);
  const{name}=props;
    return (
        <div className="container">
            
<nav className="navbar navbar-expand-lg navbar-light pt-4">
           <Link to="/" ><img className="logo"src={logo} style={{width:"100px"}} alt=""/> </Link>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto oderItem" >
      <li className="nav-item  ">
        
            <Link to={"/order/"+ name} style={{textDecoration:"none",color:"#343a40"}} >
                    <h6>
                     
                      Order
                     </h6>
                     <span className="sr-only">(current)</span></Link>
      </li>


      <li className="nav-item ml-3">
      <Link to={"/order-list/"+ name} style={{textDecoration:"none"}}>                    
                    <h6 className="text-dark">
                    
                    Order list 
                    </h6>
                    </Link>
      </li>
      
      <li className="nav-item ml-3">
      <Link to={"/review/"+ name} style={{textDecoration:"none"}}>                    
                    <h6 className="text-dark">
                    
                    Review
                    </h6>
                    </Link>
      </li>
      
     
       
     
     
    </ul>
    <div className="col-md-3 mt-2 justify-content-center d-flex ml-5">
               {
                       loggedInUser.isSignIn && <Link to="/admin-panel/addServices" style={{textDecoration:"none"}}>
                           <button className="btn btn-dark mr-5">
                           Admin
                       </button>
                       </Link>
                   }
                    <img src={loggedInUser.img} style={{width:"50px", height:"50px",borderRadius:'50%'}} alt=""/>
                <h6 className="ml-3 mt-3">{loggedInUser.firstName}</h6>
                </div>
   
  </div>
</nav> 




        </div>
    );
};

export default OrderNav;