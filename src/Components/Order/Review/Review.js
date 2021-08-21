import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Review.css'
import OrderNav from '../OrderNav/OrderNav';
const Review = () => {
    let { name } = useParams();

    

    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
      fetch('http://localhost:4000/addReviews',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => console.log(data))
  };
    return (
        <div className="container">
            <OrderNav name ={name}></OrderNav>
       
            

            <form className=" sm-form row" onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-md-6">
                            <div className="form-group ">
                            
                            <input type="text" className="form-control" ref={register} id="" placeholder="Your Name" name="name" required/>
                            </div>

                            
                            <div className="form-group">
                            
                            <input type="text" className="form-control" ref={register} id="" name="companyName" placeholder="Company's Name"  />
                            </div>
                            <div className="form-group">
                            
                            <input type="text" className="form-control" ref={register} id="" name="imgLink" placeholder="Your image Link"  />
                            </div>
                            </div>

                            <div className="col-md-6">
                            <div className="form-group ">
                           
                           <textarea className="form-control " ref={register} id="exampleFormControlTextarea1" rows="6" placeholder="Description" name="projectDetails"  required>

                           </textarea>

                           
                            </div>
                            </div>
                        
                       <div className="col-md-12">
                       <button type="submit" className="btn btn-dark mt-5 btn-lg btn-block">Send</button>
                       </div>
                </form>

            </div>
       
        
    
    );
};

export default Review;