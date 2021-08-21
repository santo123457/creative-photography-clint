import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from "../../../images/logos/logo.png";
import Sidebar from '../AdminNavbar/AdminNavbar';

const AllServiceList = () => {
    const[loggedInUser , setLoggedInUser]= useContext(UserContext);
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://murmuring-journey-43171.herokuapp.com/allOrders')
        .then(res=> res.json())
        .then(data =>setServices(data))
    },[])
    console.log(services);
    return (
        <div className="container-fluid">

      <Sidebar></Sidebar>

            < div className="">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email Id</th>
      <th scope="col">Service</th>
      <th scope="col" >Project Details</th>
      <th scope="col">status</th>
      
    </tr>
  </thead>
  <tbody>
      
    {
        services.map((data)=><tr>
        
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.projectName}</td>
        <td className='w-50'>{data.projectDetails}</td>
        <td>
        <select class="form-control"  id="exampleFormControlSelect1">
      <option className='text-danger'>pending</option>
      <option className='text-warning'>On Going</option>
      <option className='text-success'>Done</option>
      
    </select>
        </td>
      </tr>) 
    }
    
  </tbody>
</table>
            
        </div>
        </div>
        
    );
};

export default AllServiceList;