import React, { useState } from 'react';
import logo from "../../../images/logos/logo.png";
import Sidebar from '../AdminNavbar/AdminNavbar';
import './AddService.css'
const AddServices = () => {
    
    
    const[info,setInfo]=useState({});
    const[file,setFile] = useState(null) 
    const handleBlur = e=>{
        const  newInfo ={...info};
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }
    const handleFileChange =(e)=>{
        const  newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file)
        formData.append('serviceTitle',info.serviceTitle)
        formData.append('description',info.description)
        formData.append('serviceName',info.serviceName)
        formData.append('price',info.price)
        fetch('http://localhost:4000/addService', {   
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log('Successfull', data);
            })
    };
    return (
        <div className="container-fluid">
            <Sidebar></Sidebar>
    
           
           <div className="d-flex justify-content-center">
           <form onSubmit={handleSubmit} className="">
                            <div className="form-group w-50">
                            
                            <input type="text" className="form-control" id="" placeholder="Enter Service Title" name="serviceTitle" onBlur={handleBlur} required/>
                            </div>
                            <div className="form-group w-50">
                            <input type="text" className="form-control" id="" placeholder="Enter Service Name in lowercase without spacing" name="serviceName" onBlur={handleBlur} required/>
                            </div>
                            <div className="form-group w-50">
                            <input type="text" className="form-control" id="" placeholder="Enter Service Price" name="Price" onBlur={handleBlur} required/>
                            </div>

                            <div className="form-row">
                            <div className=" col form-group">
                           
                           <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Description" onBlur={handleBlur} name="description"  required>

                           </textarea>
                       </div>
                                <div className="col">
                                <input type="file" onChange={handleFileChange} id="file" className="inputfile"  />
                                    <label htmlFor="file" ><h6>
                                      Upload <img src="https://www.flaticon.com/svg/static/icons/svg/25/25399.svg" style={{width:"30px"}} alt=""/>
                                        </h6></label>
                                </div>
                            </div>
                            
                        
                        
                        
                        <button type="submit" className="btn btn-dark mt-5 ">Send</button>
                </form>
           </div>


            </div>
        
        
    );
};

export default AddServices;