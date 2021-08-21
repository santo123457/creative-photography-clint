import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from "../../../images/logos/logo.png";
import Sidebar from '../AdminNavbar/AdminNavbar';

const MakeAdmin = () => {
    const[loggedInUser , setLoggedInUser]= useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
            fetch('http://localhost:4000/addAdmin',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(res=> res.json())
            .then(console.log(data))
    };
    return (
        <div className="container-fluid">
           <Sidebar></Sidebar>
           
            
            <div >
                <form  className="" onSubmit={handleSubmit(onSubmit)} >
                <div className="form-group w-50 d-block m-auto">
                     <input type="text" className="form-control" id="" placeholder="Enter a email of new Admin" name="email" ref={register} required/>
                 </div>
                    <button className="btn btn-dark d-block " type='submit' style={{margin:"20px auto"}}> Submit </button>
                    
                </form>
            
            </div>
            
        </div>
    );
};

export default MakeAdmin;
